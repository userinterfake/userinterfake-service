import { ReplyGenericInterface } from "fastify/types/reply"
import prisma from "../../../utils/prisma"
import { BirthdayType } from "../types/interface"
import { FastifyReply, FastifyRequest } from 'fastify';


export const getBirdthdayById = async (request: FastifyRequest<{
    Params: {
        id: string
    },
    Body: BirthdayType
}>, reply: FastifyReply) => {
    const id = request.params.id
    const user = await prisma.user.findUnique({
        where: {
            twitch_id: id
        },
        include: {
            birthday: true
        }
    })

    if (!user?.birthday) return reply.callNotFound()
    
    reply.status(200).send(user.birthday)
}