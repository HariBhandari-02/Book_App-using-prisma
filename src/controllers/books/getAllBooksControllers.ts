import { Request, Response } from "express";
import { getAllBooks } from "../../prismaModels/book.model";

export type BookQueryInputs = {
  author_id: number;
  genre_id: number;
};

export const getAllBooksControllers = async (req: Request, res: Response) => {
  const query = req.query ;
  

  const allBooks = await getAllBooks();

  res.json({
    message: `All books fetched.`,
    data: allBooks,
  });
};
