import { Request, Response } from "express";
import { updateBooksById } from "../../prismaModels/book.model";
import { BookStatus } from "../../generated/prisma/enums";

export type UpdateBooksInput = {
  title?: string;
  description?: string | null;
  published_date?: string | Date | null;
  status?: BookStatus;
  completed_at?: string | Date | null;
  updated_at?: Date | string;
  language?: string;
  author_id?: number;
  genreId?: number;
};

export const updateBooksControllers = async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  const bookIdNum = parseInt(bookId as string);

  const body = req.body as UpdateBooksInput;

  const updatedBook = await updateBooksById(bookIdNum, body);

  res.json({
    message: `Book updated by id-${bookId}`,
    data: updatedBook,
  });
};
