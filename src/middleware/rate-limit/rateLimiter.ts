import rateLimit from "express-rate-limit";

export const customRateLimiter = rateLimit({
  windowMs: 15 * 1000, //takes time in seconds i.e 15 second
  limit: 50,

  message: {
    success: false,
    message: "Too many request, please try again",
  },
  standardHeaders: true,
  legacyHeaders: false,
});



