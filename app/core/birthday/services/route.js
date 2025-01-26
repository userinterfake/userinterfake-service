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
exports.RoutesBirthday = void 0;
const createBirthday_1 = require("./createBirthday");
const getBirdthdayById_1 = require("./getBirdthdayById");
exports.RoutesBirthday = [
    {
        method: "POST",
        url: "/birthday",
        handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
            return (0, createBirthday_1.createBirthday)(request, reply);
        }),
    },
    {
        method: "GET",
        url: "/birthday/:id",
        handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
            return (0, getBirdthdayById_1.getBirdthdayById)(request, reply);
        }),
    }
];
