import { errors } from "@/errors/errors";
import { CreateUser, UpdateUser } from "@/protocols/usersProtocol";
import { usersRepository } from "@/repositories/usersRepository"

async function getUsers() {
    const res = await usersRepository.getUsers();
    return res;
}

async function createUser(user: CreateUser) {
    const check = await usersRepository.checkEmail(user.email);
    if(check.length !== 0) throw errors.conflictError("Email")
    await usersRepository.createUser(user);
    return;
}

async function updateUser(user: UpdateUser) {
    await usersRepository.updateUser(user);
    return;
}

async function deleteUser(id: number) {
    console.log(id)
    await usersRepository.deleteUser(id);
    return;
}

export const usersService  = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}