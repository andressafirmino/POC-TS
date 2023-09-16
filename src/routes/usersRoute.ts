import { Router } from "express";
import { usersController } from "@/controllers/usersController";

const userRouter = Router();

userRouter.get("/users", usersController.getUsers);
userRouter.post("/users", usersController.createUser);

export default userRouter;