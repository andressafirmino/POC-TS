import { Router } from "express";
import { usersController } from "@/controllers/usersController";
import { validateSchemaMiddleware } from "@/middlewares/validateSchema";
import { updateUserSchema, userSchema } from "@/schemas/usersSchema";

const userRouter = Router();

userRouter.get("/users", usersController.getUsers);
userRouter.post("/users", validateSchemaMiddleware(userSchema), usersController.createUser);
userRouter.put("/users", validateSchemaMiddleware(updateUserSchema), usersController.updateUser);
userRouter.delete("/users", usersController.deleteUser)

export default userRouter;