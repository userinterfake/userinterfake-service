import prisma from "../../../utils/prisma"

export const updateGameParameter = async (request: any, reply: any) => {
    const body = await request.body
    if (!body || !body.twitch_id) return { message: "Missing id" }
    const gameName = body.game
    const game = await prisma.game.findUnique({
        where: {
            name: gameName
        }
    })
    if (!game) return { message: "Game not found" }
    const user = await prisma.user.findUnique({
        where: {
            twitch_id: body.twitch_id
        }
    })
    if (!user) return { message: "User not found" }
    const gameParameter = await prisma.gameParameter.findFirst({
        where: {
            user_id: user.id,
            game_id: game.id
        }
    })
    if (!gameParameter) return { message: "Game parameter not found" }
    const newGameParameter =await prisma.gameParameter.update({
        where: {
            id: gameParameter.id
        },
        data: {
            value: body.value
        }
    })
    reply.send(newGameParameter)
}