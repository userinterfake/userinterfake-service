import { FastifyRequest, RouteOptions } from "fastify";
import { createVote } from "./createVote";

export const RoutesVote: RouteOptions[] = [
  {
    method: "POST",
    url: "/vote",
    handler: async (request: any, reply) => {
      return createVote(request, reply)
    },
  },
];
