import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaMariaDb({
  host: "localhost",
  port: 3306,
  connectionLimit: 5,
  user: "root",
  password: "Password@123",
  database: "book_store_prisma"
});
export const prisma = new PrismaClient({ adapter });
