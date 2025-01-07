"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesUser = void 0;
const createUser_1 = require("./createUser");
const getUsers_1 = require("./getUsers");
exports.RoutesUser = [
    {
        method: "POST",
        url: "/user",
        handler: createUser_1.createUser,
    },
    {
        method: "GET",
        url: "/user",
        handler: getUsers_1.getUsers,
    },
];
