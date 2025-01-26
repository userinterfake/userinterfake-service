import { ReplyGenericInterface } from "fastify/types/reply"
import prisma from "../../../utils/prisma"
import { InterCommentType } from "../types/interface"
import { FastifyReply, FastifyRequest } from 'fastify';


export const getInterComments = async (request: FastifyRequest<{
    Params: {
        id: string
    },
    Body: InterCommentType
}>, reply: FastifyReply) => {
    const interComents = await prisma.interComment.findMany({
        include : {
            votes: true,
            user: true
        },
    })
    
    reply.status(200).send(interComents)
}