import { Request, Response } from "express";
import { getAllBooks } from "../../prismaModels/book.model";
import { BookStatus } from "../../generated/prisma/enums";

export const getAllBooksControllers = async (req: Request, res: Response) => {
  const query = req.query;

  const status = query.status as BookStatus;
  const author_id = parseInt(query.author_id as string);
  const genreId = parseInt(query.genreId as string);

  const pageNum = Number(query.page || "1");
  const perPage = 5;

  const allBooksRes = await getAllBooks(
    {
      status: status,
      author_id: author_id,
      genreId: genreId,
    },
    {
      page: pageNum,
      perPage: perPage,
    }
  );


  res.json({
    message: `Books fetching success.`,
    data: allBooksRes.allBooks,
    pagination: {
      page: pageNum,
      perPage: perPage,
      totalBooks: allBooksRes.totalBooks,
    },
  });
};
