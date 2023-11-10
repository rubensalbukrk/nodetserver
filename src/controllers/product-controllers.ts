import express, {Express, Request, Response} from 'express'
import { _createProduct, _getProducts, _removeProduct } from "../repositorys/products-repository";

export const create = async (req: Request, res: Response) => {
    try {
        const product = await _createProduct(req.body)
        res.status(200).send(product)
    } catch (e) {
        res.status(400).send(e)
    }
}
export const get = async (req: Request, res: Response) =>{
    try {
        const allProducts = await _getProducts()
        res.status(200).send(allProducts)
    } catch (e) {
        res.status(400).send(`Houve um problema com o servidor: ${e}`)
    }
}
export const remove = async (req: Request, res: Response) => {
    try {
        const removeProduct = await _removeProduct(req.body.id);
        res.status(200).send('Produto foi removido do banco de dados!')
    } catch (e) {
        res.status(400).send(`O produto não foi encontrado, houve um problema: ${e}`)
    }
}