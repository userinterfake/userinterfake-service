import { FastifyRequest, RouteOptions } from "fastify";
import { createInterComment } from "./createInterComment";
import { getInterComments } from "./getInterComments";

export const RoutesInterComment: RouteOptions[] = [
  {
    method: "POST",
    url: "/interComment",
    handler: async (request: any, reply) => {
      return createInterComment(request, reply)
    },
  },
  {
    method: "GET",
    url: "/interComment",
    handler: async (request: any, reply) => {
      return getInterComments(request, reply)
    },
  }
];
