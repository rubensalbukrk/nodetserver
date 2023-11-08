import express, {Express, Request, Response} from 'express'
import { createProduct, getProducts } from "../repositorys/products-repository";

export const create = async (req: Request, res: Response) => {
    try {
        const product = await createProduct(req.body)
        res.status(200).send(product)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const get = async (req: Request, res:Response) =>{
    try {
        const allProducts = await getProducts()
        res.status(200).send(allProducts)
    } catch (error) {
        res.status(400).send(`Erro encontrado: ${error}`)
    }
}