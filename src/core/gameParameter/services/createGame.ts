import prisma from "../../../utils/prisma"

export const createGame = async (request: any, reply: any) => {
    const body = await request.body
    if (!body) return { message: "Missing data" }
    const game = await prisma.game.create({
        data: body,
    })
    reply.send(game)
}