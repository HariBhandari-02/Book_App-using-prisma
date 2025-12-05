import { Application } from "express";

export async function createUserRouter(app: Application) {
  //sign up

  app.post("/users/sign-up", signUpUserController);

  //login
  app.post("/users/login", loginUserController);

  //get all user
  app.get("/users", getAllUserController);

  //get user by id
  app.get("/users/:userId", getUserByIdController);

  //update user by id
  app.put("/users/:userId", updateUserByIdController);

  //delete user by id
  app.delete("/users/:userId", deleteUserController);
}
