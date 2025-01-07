import prisma from "../../../utils/prisma"

export const createGameParameter = async (request: any, reply: any) => {
    const body = await request.body
    if (!body) return { message: "Missing data" }
    const gameParameter = await prisma.gameParameter.create({
        data: body,
        include: {
            game: true,
        }
    })
    reply.send(gameParameter)
}