import { Request, Response } from "express";
import { z } from "zod";
import { signUpUser } from "../../prismaModels/user.models";
import { Gender, Role } from "../../generated/prisma/enums";
import { hashPassword } from "../../lib/hash";

const SignUpUserSchema = z.object({
  username: z.string().min(3).max(30),
  email: z.email(),
  password: z.string().min(5).max(20),
  gender: z.enum(Gender),
});

export type TSignUpUserSchema = z.infer<typeof SignUpUserSchema>;

export async function signUpUserController(req: Request, res: Response) {
  const body = req.body;
  // validation
  const parseData = SignUpUserSchema.safeParse(body);

  if (!parseData.success) {
    res.status(400).json({
      message: `Invalid data.`,
      errors: parseData.error,
    });
    return;
  }

  // hash the password
  const hashedPassword = await hashPassword(parseData.data.password);

  //data is valid
  const user = await signUpUser({
    // username: parseData.data.username,
    // email: parseData.data.email,
    // password: hashedPassword,
    // gender: parseData.data.gender

    ...parseData.data,
    password: hashedPassword,
  });

  res.json({
    message: `Registered Success.`,
    data: user,
  });
}
