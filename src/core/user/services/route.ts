import { RouteOptions } from "fastify";
import { createUser } from "./createUser";
import { getUsers } from "./getUsers";
import { getUserById } from "./getUserById";

export const RoutesUser: RouteOptions[] = [
  {
    method: "POST",
    url: "/user",
    handler: (request: any , reply) => createUser(request, reply)
  },
  {
    method: "GET",
    url: "/user",
    handler: getUsers,
  },
  {
    method: "GET",
    url: "/user/:id",
    handler: (request: any , reply) => getUserById(request, reply)
  },
];
