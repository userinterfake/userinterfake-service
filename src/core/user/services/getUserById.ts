import { FastifyRequest, FastifyReply } from "fastify"
import prisma from "../../../utils/prisma"
import { UserType } from "../types/interface"

export const getUserById = async (request: FastifyRequest<{
    Params: {
        id: string
    },
    Body: UserType
}>, reply: FastifyReply) => {
    const id = request.params.id
    const user = await prisma.user.findUnique({
        where: {
            twitch_id: id
        },
        include: {
            gameParameters: true,
            birthday: true,
            interComments: true,
        }
    })
    reply.send(user)
}