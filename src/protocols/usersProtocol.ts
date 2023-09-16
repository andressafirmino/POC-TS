import { type } from "os";

export type User = {
    id: number;
    name: string;
    email: string;
}

export type CreateUser = Omit<User, "id"> 

export type UpdateUser = Omit<User, "email">