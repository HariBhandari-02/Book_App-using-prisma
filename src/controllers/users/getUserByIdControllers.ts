import { Request, Response } from "express";
import { getUsersById } from "../../prismaModels/user.models";

export const getUserByIdController = async (req: Request, res: Response) => {
  const params = req.params;
  const paramsUserId = Number(params.userId);

  const userId = req.user.id;
  if (!userId) {
    res.status(401).json({
      message: `You are not authorized`,
    });
  }

  if (paramsUserId !== userId) {
    res.status(401).json({
      message: "You can only access your data.",
    });
  }

  const user = await getUsersById(userId);

  res.json({
    message: `user fetched by id-${userId}`,
    data: user,
  });
};
