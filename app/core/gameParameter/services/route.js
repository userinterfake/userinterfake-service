"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesGameParameter = void 0;
const createParameter_1 = require("./createParameter");
const createGame_1 = require("./createGame");
const updateParameter_1 = require("./updateParameter");
exports.RoutesGameParameter = [
    {
        method: "POST",
        url: "/gameParameter",
        handler: createParameter_1.createGameParameter,
    },
    {
        method: "POST",
        url: "/game",
        handler: createGame_1.createGame,
    },
    {
        method: "PUT",
        url: "/gameParameter",
        handler: updateParameter_1.updateGameParameter,
    },
];
