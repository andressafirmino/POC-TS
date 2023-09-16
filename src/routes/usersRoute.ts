import { Router } from "express";
import { usersController } from "@/controllers/usersController";
import { validateSchemaMiddleware } from "@/middlewares/validateSchema";
import { userSchema } from "@/schemas/usersSchema";

const userRouter = Router();

userRouter.get("/users", usersController.getUsers);
userRouter.post("/users", validateSchemaMiddleware(userSchema), usersController.createUser);

export default userRouter;