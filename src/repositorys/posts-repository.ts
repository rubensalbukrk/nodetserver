import { Post } from '@prisma/client'
import { prisma } from '../services/prisma'


export const _getPosts = async () => {
    const posts = await prisma.post.findMany()
    return posts
}

export const _createPost = async (data: Post) => {
    const post = await prisma.post.create({
        data
    })
    return post
}

export const _updatePost = async (id: number, data: any) => {
    const post = await prisma.post.update({
      where: {
        id
      },
      data
    })
}

export const _removePost = async (id: number) => {
    const post = await prisma.post.delete({
        where: {
            id
        }
    })
}
export const _removeAllPosts = async(id: number) => {
    const removedAllPosts = await prisma.post.deleteMany({})
    return removedAllPosts
}