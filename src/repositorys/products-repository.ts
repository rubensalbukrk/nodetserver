import { Product } from '@prisma/client'
import { prisma } from '../services/prisma'

export const createProduct = async (data: Product) => {
    const product = await prisma.product.create({
        data
    })
    return product
}

export const getProducts = async () => {
    const allProducts = await prisma.product.findMany()
    return allProducts
}