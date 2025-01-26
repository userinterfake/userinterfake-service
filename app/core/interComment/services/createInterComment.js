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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInterComment = void 0;
const prisma_1 = __importDefault(require("../../../utils/prisma"));
const createInterComment = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const body = request.body;
    console.log(body);
    if (!body)
        return { message: "Missing data" };
    try {
        const interComment = yield prisma_1.default.interComment.create({
            data: body,
        });
        reply.status(201).send(interComment);
    }
    catch (error) {
        reply.status(500).send({ message: error });
    }
});
exports.createInterComment = createInterComment;
