import { usersRepository } from "@/repositories/usersRepository"

async function getUsers() {
    const res = await usersRepository.getUsers();
    return res;
}

async function createUser() {
    
}

export const usersService  = {
    getUsers,
    createUser
}