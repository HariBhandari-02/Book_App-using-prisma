import { Request, Response } from "express";
import { getAllAuthors } from "../../prismaModels/author.model";

export const getAllAuthorsControllers = async (req: Request, res: Response) => {
  const query = req.query;
  const author_name = query.author_name as string;
  const birth_Date = query.birth_Date as string;

  const pageNum = Number(query.page || "1");
  const perPage = 5;

  const authorsDataRes = await getAllAuthors(
    {
      author_name: author_name,
      birth_Date: birth_Date,
    },
    {
      page: pageNum,
      perPage: perPage,
    }
  );

  res.json({
    message: `All Authors data fetched.`,
    data: authorsDataRes.authorsData,
    page: pageNum,
    perPage: perPage,
    totalAuthorsNum: authorsDataRes.totalAuthors,
  });
};
