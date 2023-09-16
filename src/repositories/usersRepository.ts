import { db } from "@/database/databaseConnection";
import { CreateUser, UpdateUser, User } from "@/protocols/usersProtocol";

async function getUsers() {
    const res = await db.query<User>(`
        SELECT * FROM users;
    `)
    return res.rows;
}

async function checkEmail(email: string) {
    const res = await db.query<User>(`
        SELECT * FROM users WHERE email = $1;
    `, [email]);
    return res.rows;
}

async function createUser(user: CreateUser) {
    const res = await db.query(`
        INSERT INTO users (name, email) VALUES ($1, $2);
    `, [user.name, user.email]);
    return res;
}

async function updateUser(user: UpdateUser) {
    const res = await db.query(`
        UPDATE users SET name = $1 WHERE id = $2;
    `, [user.name, user.id]);
    return res;
}

export const usersRepository  = {
    getUsers,
    checkEmail,
    createUser,
    updateUser
}

