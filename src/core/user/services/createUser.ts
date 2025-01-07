import prisma from "../../../utils/prisma"

export const createUser = async (request: any, reply: any) => {
    const body = await request.body
    if (!body) return { message: "Missing data" }
    const user = await prisma.user.create({
        data: body,
        include: {
            gameParameters: true
        }
    })
    reply.send(user)
}