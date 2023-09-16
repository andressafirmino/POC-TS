import { db } from "@/database/databaseConnection";
import { CreateUser, User } from "@/protocols/usersProtocol";

async function getUsers() {
    const res = await db.query<User>(`
        SELECT * FROM users;
    `)
    return res.rows;
}

async function createUser(user: CreateUser) {
    
}

export const usersRepository  = {
    getUsers,
    createUser
}