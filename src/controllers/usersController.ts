import { usersService } from "@/services/usersService";
import { Request, Response } from "express";


async function getUsers(req: Request, res: Response) {
    const users = await usersService.getUsers();
    res.send(users);
}

async function createUser(req: Request, res: Response) {
    
}

export const usersController  = {
    getUsers,
    createUser
}