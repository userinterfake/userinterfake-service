import { FastifyRequest, RouteOptions } from "fastify";
import { createInterComment } from "./createInterComment";
import { getInterComments } from "./getInterComments";
import { deleteInterComment} from './deleteInterComment'
import { deleteInterComments } from "./deleteComments";

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
  },
  {
    method: 'DELETE',
    url: "/interComment/:id",
    handler: async (request: any, reply) => {
      return deleteInterComment(request, reply)
    }
  },
  {
    method: 'DELETE',
    url: "/interComment",
    handler: async (request: any, reply) => {
      return deleteInterComments(request, reply)
    }
  },
];
