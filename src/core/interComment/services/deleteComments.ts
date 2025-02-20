import prisma from "../../../utils/prisma"
import { InterCommentType } from "../types/interface"
import { FastifyReply, FastifyRequest } from 'fastify';


export const deleteInterComments = async (request: FastifyRequest<{
    Body: InterCommentType
}>, reply: FastifyReply) => {
    try {
        const deletedComment = await prisma.interComment.deleteMany()
        
        reply.status(200).send(deletedComment)
    } catch (error) {
        reply.status(500).send(error)
    }
}