import { Request, Response } from "express";
import { createBooks } from "../../prismaModels/book.model";

export async function createBooksControllers(req: Request, res: Response) {
  const body = req.body;

  const createdBooks = await createBooks(body);
console.log("DATA:", createdBooks);
  res.json({
    message: `Books created successfully.`,
    data: createdBooks,
  });
}
