import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
// import { loggedInUsers } from "./loginUserControllers";

export async function userLogoutController(req: Request, res: Response) {
  const token = req.cookies.token;

  if (!token) {
    throw new Error(`You are not logged in!`);
  }

  // const userFound = loggedInUsers.find((userToken) => userToken === token);

  const userFound = await prisma.userSession.findFirst({
    where: {
      session_id: token,
    },
  });

  if (!userFound) {
    throw new Error(`You are not logged in!`);
  }

  // const loggedOutUser = loggedInUsers.splice(
  //   loggedInUsers.indexOf(userFound),
  //   1
  // );

  await prisma.userSession.delete({
    where: {
      id: userFound.id,
    },
  });

  res.clearCookie("token");

  res.json({
    message: "you are logged out!",
  });
}
