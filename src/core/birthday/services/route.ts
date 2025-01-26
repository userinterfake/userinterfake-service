import { FastifyRequest, RouteOptions } from "fastify";
import { createBirthday } from "./createBirthday";
import { getBirdthdayById } from "./getBirdthdayById";

export const RoutesBirthday: RouteOptions[] = [
  {
    method: "POST",
    url: "/birthday",
    handler: async (request: any, reply) => {
      return createBirthday(request, reply)
    },
  },
  {
    method: "GET",
    url: "/birthday/:id",
    handler: async (request: any, reply) => {
      return getBirdthdayById(request, reply)
    },
  }
];
