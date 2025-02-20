"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesInterComment = void 0;
const createInterComment_1 = require("./createInterComment");
const getInterComments_1 = require("./getInterComments");
const deleteInterComment_1 = require("./deleteInterComment");
const deleteComments_1 = require("./deleteComments");
exports.RoutesInterComment = [
    {
        method: "POST",
        url: "/interComment",
        handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
            return (0, createInterComment_1.createInterComment)(request, reply);
        }),
    },
    {
        method: "GET",
        url: "/interComment",
        handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
            return (0, getInterComments_1.getInterComments)(request, reply);
        }),
    },
    {
        method: 'DELETE',
        url: "/interComment/:id",
        handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
            return (0, deleteInterComment_1.deleteInterComment)(request, reply);
        })
    },
    {
        method: 'DELETE',
        url: "/interComment",
        handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
            return (0, deleteComments_1.deleteInterComments)(request, reply);
        })
    },
];
