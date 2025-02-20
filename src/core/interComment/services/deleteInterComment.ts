import prisma from "../../../utils/prisma"
import { InterCommentType } from "../types/interface"
import { FastifyReply, FastifyRequest } from 'fastify';


export const deleteInterComment = async (request: FastifyRequest<{
    Params: {
        id: string
    },
    Body: InterCommentType
}>, reply: FastifyReply) => {
    const {id} = request.params
    try {
        const deletedComment = await prisma.interComment.delete({
            where: {
                id
            }
        })
        
        reply.status(200).send(deletedComment)
    } catch (error) {
        reply.status(500).send(error)
    }
}