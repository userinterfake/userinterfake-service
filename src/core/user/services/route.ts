import { RouteOptions } from "fastify";
import { createUser } from "./createUser";
import { getUsers } from "./getUsers";

export const RoutesUser: RouteOptions[] = [
  {
    method: "POST",
    url: "/user",
    handler: createUser,
  },
  {
    method: "GET",
    url: "/user",
    handler: getUsers,
  },
];
