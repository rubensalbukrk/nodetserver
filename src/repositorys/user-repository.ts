import { prisma } from "../services/prisma";
import { User } from "@prisma/client";

export const createUser = async (data: User) => {
    const user = await prisma.user.create({
        data
    })
    return user
}

export const getUsers = async () => {
    const users = await prisma.user.findMany()
    return users
}