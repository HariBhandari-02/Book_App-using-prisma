import http from "http";

// Server from express
// import express from "express";

// const app = express();

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.json({
//     message: "ExpressJS",
//   });
// });

// app.listen(4000, () => {
//   console.log("Server running on http://localhost:4000");
// });

//server from http
const server = http.createServer(async (req, res) => {
  console.log("Request REceived", req.url);
});

server.listen(4000, () => {
  console.log("Started server at http://localhost:4000");
});