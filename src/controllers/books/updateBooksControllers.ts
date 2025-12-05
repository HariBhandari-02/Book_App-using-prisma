import { Request, Response } from "express";
import { updateBooksById } from "../../prismaModels/book.model";

export const updateBooksControllers = async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  const bookIdNum = parseInt(bookId as string);

  const body = req.body;

  const updatedBook = await updateBooksById(bookIdNum, body);

  res.json({
    message: `Book updated by id-${bookId}`,
    data: updatedBook,
  });
};
