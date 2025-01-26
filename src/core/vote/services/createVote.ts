import { FastifyReply, FastifyRequest } from "fastify"
import prisma from "../../../utils/prisma"
import { VoteType } from "../types/interface"
import { Vote } from "@prisma/client"

export const createVote = async (request: FastifyRequest<{
    Body: Vote
}>, reply: FastifyReply) => {
    const body = request.body
    const vote = await prisma.vote.create({ 
        data: body,
    })
    reply.status(201).send(vote)
}