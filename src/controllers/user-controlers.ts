import express, { Request, Response} from 'express'
import { getUsers, createUser } from '../repositorys/user-repository';


export const get = async (req: Request, res: Response) => {
    try {
        const users = await getUsers()
        res.status(200).send(users)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const create = async(req: Request, res: Response) => {
    try {
        const user = await createUser(req.body)
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
}

