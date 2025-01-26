import { FastifyReply, FastifyRequest } from "fastify"
import prisma from "../../../utils/prisma"
import { BirthdayType } from "../types/interface"

export const createBirthday = async (request: FastifyRequest<{
    Body: BirthdayType
}>, reply: FastifyReply) => {
    const body = request.body
    console.log(body)
    if (!body) return { message: "Missing data" }
    const birthday = await prisma.birthday.create({
        data: body,
        include: {
            user: true
        }
    })
    reply.status(201).send(birthday)
}