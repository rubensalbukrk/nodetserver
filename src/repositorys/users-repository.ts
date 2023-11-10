import { prisma } from "../services/prisma";
import { User } from "@prisma/client";

export const _createUser = async (data: User) => {
    const user = await prisma.user.create({
        data
    })
    return user
}

export const _getUsers = async () => {
    const users = await prisma.user.findMany()
    return users
}

export const _removeUser = async(id: number) => {
    const removeUser = await prisma.user.delete({
        where: {
            id
        }
    })
}