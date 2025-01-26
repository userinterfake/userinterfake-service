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
exports.getUserById = void 0;
const prisma_1 = __importDefault(require("../../../utils/prisma"));
const getUserById = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    const user = yield prisma_1.default.user.findUnique({
        where: {
            twitch_id: id
        },
        include: {
            gameParameters: true,
            birthday: true,
            interComments: true,
        }
    });
    reply.send(user);
});
exports.getUserById = getUserById;
