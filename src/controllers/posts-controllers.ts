import express, {Request, Response} from 'express'
import { 
    _getPosts,
    _createPost,
    _removeAllPosts,
    _removePost,
    _updatePost
 } from '../repositorys/posts-repository'
import { Post } from '@prisma/client'

 export const get = async (req: Request, res: Response) => {
    try {
        const posts = await _getPosts()
        res.status(200).send(posts)
    } catch (e) {
        res.status(200).send(`Houve um problema em obter todos os posts: ${e}`)
    }
 }

 export const create = async (req: Request, res: Response) => {
    try {
        const post = await _createPost(req.body)
        res.status(200).send(`O post "${req?.body?.title}" foi criado!`)
    } catch (e) {
        res.status(400).send(`Não foi possivel criar um post - error / ${e}`)
    }
 }

 export const remove = async(req: Request, res: Response) => {
    try {
        const post = await _removePost(req?.body?.id)
    } catch (e) {
        res.status(400).send(`Não foi encontrado o post para remover - error / ${e}`)
    }
 }

 export const update = async(req: Request, res: Response) => {
    try {
        const post = await _updatePost(req?.body?.id, req.body)
        res.send(200).send(`O post foi criado! \n ${post}`)
    } catch (e) {
        
    }
 }