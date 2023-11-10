import express, { Request, Response} from 'express'
import { _getUsers, _createUser, _removeUser } from '../repositorys/users-repository';


export const get = async (req: Request, res: Response) => {
    try {
        const users = await _getUsers()
        res.status(200).send(users)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const create = async(req: Request, res: Response) => {
    try {
        const user = await _createUser(req.body)
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const remove = async (req: Request, res: Response) => {
    try {
        const user = await _removeUser(req.body.id)
        res.status(200).send(`O usuário de id: "${req.body.id}" foi deletado!`)
    } catch (e) {
        res.status(400).send(`O usuário de id: "${req.body.id}" não foi encontrado para ser removido!`)
    }
}

