import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
// import { loggedInUsers } from "./loginUserControllers";

export async function getMeUserController(req: Request, res: Response) {
  const token = req.cookies.token;

  if (!token) {
    throw new Error(`You are not logged in!`);
  }

  //  const userFound =  loggedInUsers.find(userToken => userToken === token);
  const userFound = await prisma.userSession.findFirst({
    where: {
      session_id: token,
    },
    include:{
      user: true
    }
  });

  if (!userFound) {
    throw new Error(`You are not logged in!`);
  }

  res.json({
    message: " you are logged in.",
    data: { token, user: userFound.user },
  });
}
