import express from "express";
import { booksRouter } from "./Router/books.router";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "hello from express",
  });
});

booksRouter(app);

app.listen(4000, () => {
  console.log("Listening on http://localhost:4000");
});
