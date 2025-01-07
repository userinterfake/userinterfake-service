import prisma from "../../../utils/prisma"

export const getUsers = async (request: any, reply: any) => {
    const users = await prisma.user.findMany({
        include: {
            gameParameters: {
                include: {
                    game: true
                }
            }
        }
    })
    reply.send(users)
}