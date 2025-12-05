import { Application } from "express";
import { createBooksControllers } from "../controllers/books/createBooksController";
import { getAllBooksControllers } from "../controllers/books/getAllBooksControllers";
import { getBookByIdControllers } from "../controllers/books/getBookByIdControllers";
import { updateBooksControllers } from "../controllers/books/updateBooksControllers";
import { deleteBookControllers } from "../controllers/books/deleteBookControllers";

export async function booksRouter(app: Application) {
  app.post("/books", createBooksControllers);

  app.get("/books", getAllBooksControllers);

  app.get("/books/:bookId", getBookByIdControllers);

  app.put("/books/:bookId", updateBooksControllers);

  app.delete("/books/:bookId", deleteBookControllers);
}
