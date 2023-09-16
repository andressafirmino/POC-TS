import { CreateUser } from "@/protocols/usersProtocol";
import joi from "joi";

export const userSchema = joi.object<CreateUser>({
    name: joi.string().min(1).required(),
    email: joi.string().email().required()
})
