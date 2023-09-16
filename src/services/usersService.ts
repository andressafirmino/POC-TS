import { errors } from "@/errors/errors";
import { CreateUser } from "@/protocols/usersProtocol";
import { usersRepository } from "@/repositories/usersRepository"

async function getUsers() {
    const res = await usersRepository.getUsers();
    return res;
}

async function createUser(user: CreateUser) {
    const check = await usersRepository.checkEmail(user.email);
    if(check.length !== 0) throw errors.conflictError("Email")
    const res = await usersRepository.createUser(user);
    return res;
}

export const usersService  = {
    getUsers,
    createUser
}