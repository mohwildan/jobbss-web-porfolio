import {prisma} from "../../../prisma/Prisma"
export default async function handler(req,res) {
    const {method} = req
    const {name, email, img, comments} = req.body

    if(method === "GET") {
        const user = await prisma.comments.findMany()
        res.status(200).json(user)
    }

    if(method === "POST") {
        const user = await prisma.comments.create({
            data: {
                name, email, img,comments
            }
        })
        res.status(200).json(user)
    }
    
}