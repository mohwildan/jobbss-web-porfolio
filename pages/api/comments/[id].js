import { prisma } from "../../../prisma/Prisma"

export default async function handler(req, res) {
    const {method} = req
    const {id} = req.query

    if(method === "GET") {
        const user = await prisma.comments.findUnique({
            where: {
                id
            }
        })
        res.status(200).json(user)
    }

    if(method === "DELETE") {
        const user = await prisma.comments.delete({
            where: {
                id
            }
        })
        res.status(200).json(user)
    }
}