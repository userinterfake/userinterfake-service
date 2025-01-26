"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesUser = void 0;
const createUser_1 = require("./createUser");
const getUsers_1 = require("./getUsers");
const getUserById_1 = require("./getUserById");
exports.RoutesUser = [
    {
        method: "POST",
        url: "/user",
        handler: (request, reply) => (0, createUser_1.createUser)(request, reply)
    },
    {
        method: "GET",
        url: "/user",
        handler: getUsers_1.getUsers,
    },
    {
        method: "GET",
        url: "/user/:id",
        handler: (request, reply) => (0, getUserById_1.getUserById)(request, reply)
    },
];
