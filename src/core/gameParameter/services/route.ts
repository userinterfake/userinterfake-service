import { RouteOptions } from "fastify";
import { createGameParameter } from "./createParameter";
import { createGame } from "./createGame";
import { updateGameParameter } from "./updateParameter";

export const RoutesGameParameter: RouteOptions[] = [
  {
    method: "POST",
    url: "/gameParameter",
    handler: createGameParameter,
  },
  {
    method: "POST",
    url: "/game",
    handler: createGame,
  },
  {
    method: "PUT",
    url: "/gameParameter",
    handler: updateGameParameter,
  },
];
