import { Request, Response } from "express";
import { getAllBooks } from "../../prismaModels/book.model";

export const getAllBooksControllers = async (req: Request, res: Response) =>  {


  const allBooks = await getAllBooks();

  res.json({
    message: `All books fetched.`,
    data: allBooks,
  });
}
