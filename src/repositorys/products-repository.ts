import { Product } from '@prisma/client'
import { prisma } from '../services/prisma'

export const _createProduct = async (data: Product) => {
    const product = await prisma.product.create({
        data
    })
    return product
}

export const _getProducts = async () => {
    const allProducts = await prisma.product.findMany()
    return allProducts
}

export const _removeProduct = async (id: number) => {
    const removedProduct = await prisma.product.delete({
        where: {
            id
        }
    })
}