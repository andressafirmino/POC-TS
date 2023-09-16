import { CreateUser, UpdateUser, User } from "@/protocols/usersProtocol";
import { usersService } from "@/services/usersService";
import { Request, Response } from "express";
import httpStatus from "http-status";


async function getUsers(req: Request, res: Response) {
    const users = await usersService.getUsers();
    res.send(users);
}

async function createUser(req: Request, res: Response) {
    const user = req.body as CreateUser;
    await usersService.createUser(user);
    res.sendStatus(httpStatus.CREATED);
}

async function updateUser(req: Request, res: Response) {
    const user = req.body as UpdateUser;
    await usersService.updateUser(user);
    res.sendStatus(httpStatus.OK);
}

export const usersController  = {
    getUsers,
    createUser,
    updateUser
}