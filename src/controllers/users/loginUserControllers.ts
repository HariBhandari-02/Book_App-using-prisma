import { Request, Response } from "express";
import { loginUser } from "../../prismaModels/user.models";
import z from "zod";
import { comparePassword} from "../../lib/hash";

const LoginUserSchema = z.object({
  username: z.string().min(3).max(30),
  password: z.string().min(5).max(20),
});

export type TLoginUserSchema = z.infer<typeof LoginUserSchema>;

export const logInUserController = async (req: Request, res: Response) => {
  const body = req.body;
  const parsedData = LoginUserSchema.safeParse(body);

  if (!parsedData.success) {
    res.status(400).json({
      message: "Invalid data",
      data: parsedData.error,
    });
    return;
  }

  //data valid
  const user = await loginUser(parsedData.data);

  res.json({
    message: " Logged in",
    data: user,
  });
};
