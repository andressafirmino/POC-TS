import { CreateUser, UpdateUser } from "@/protocols/usersProtocol";
import joi from "joi";

export const userSchema = joi.object<CreateUser>({
    name: joi.string().min(1).required(),
    email: joi.string().email().required()
})

export const updateUserSchema = joi.object<UpdateUser>({
    id: joi.number().positive().integer().required(),
    name: joi.string().min(1).required()
})

export const deleteUserSchema = joi.object({
    id: joi.number().positive().integer().required()
})