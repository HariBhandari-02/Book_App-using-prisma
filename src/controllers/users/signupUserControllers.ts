import { Request, Response } from "express";
import { z } from "zod";


const SignUpUserSchema = z.object({
    username: z.string().min(5).max(30),
    email: z.string().min(5).max(50)
    password: z.string().min(8)
})

export async function signUpUserController(req: Request, res: Response) {


}
