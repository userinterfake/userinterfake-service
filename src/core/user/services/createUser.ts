import prisma from "../../../utils/prisma"
import { FastifyReply, FastifyRequest } from "fastify"
import { User, UserType } from "../types/interface"


export const createUser = async (request: FastifyRequest<{
    Body: UserType
}>, reply: FastifyReply) => {
    const body = await request.body
    if (!body) return { message: "Missing data" }
    const user = await prisma.user.create({
        data: body as UserType,
        include: {
            gameParameters: true
        }
    })
    reply.send(user)
}