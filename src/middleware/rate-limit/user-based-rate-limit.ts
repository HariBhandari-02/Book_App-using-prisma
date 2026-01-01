import rateLimit from "express-rate-limit";
import { Role } from "../../generated/prisma/enums";

export const userBasedRateLimit = rateLimit({
  windowMs: 30 * 1000,
  limit: (req) => {
    if (req.user?.role === "SUPER_ADMIN") return 20;
    if (req.user?.role === "ADMIN") return 10;
    if (req.user?.role === "USER") return 5;
    return 3;
  },

  keyGenerator: (req) => {
    if (req.user) {
      return `role:${req.user.role} :user:${String(req.user.id)}`;
    }
    return `ip:${req.ip}`;
  },

  message: (req: { user: { role: Role } }) => ({
    success: false,
    message: `Rate limit exceed for ${req.user.role ?? "guest"} user`,
  }),
  standardHeaders: true,
  legacyHeaders: false,
});
