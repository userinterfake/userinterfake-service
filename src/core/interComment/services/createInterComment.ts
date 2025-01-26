import { FastifyReply, FastifyRequest } from "fastify"
import prisma from "../../../utils/prisma"
import { InterComment, InterCommentType } from "../types/interface"

export const createInterComment = async (request: FastifyRequest<{
    Body: InterCommentType
}>, reply: FastifyReply) => {
    const body = request.body
    console.log(body)
    if (!body) return { message: "Missing data" }
    try {
        const interComment = await prisma.interComment.create({
            data: body as InterCommentType,
        })
        reply.status(201).send(interComment)
    } catch (error) {
        reply.status(500
        ).send({ message: error })
    }
}