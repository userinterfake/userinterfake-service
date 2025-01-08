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
exports.updateGameParameter = void 0;
const prisma_1 = __importDefault(require("../../../utils/prisma"));
const updateGameParameter = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const body = yield request.body;
    if (!body || !body.twitch_id)
        return { message: "Missing id" };
    const gameName = body.game;
    const game = yield prisma_1.default.game.findUnique({
        where: {
            name: gameName
        }
    });
    if (!game)
        return { message: "Game not found" };
    const user = yield prisma_1.default.user.findUnique({
        where: {
            twitch_id: body.twitch_id
        }
    });
    if (!user)
        return { message: "User not found" };
    const gameParameter = yield prisma_1.default.gameParameter.findFirst({
        where: {
            user_id: user.id,
            game_id: game.id
        }
    });
    if (!gameParameter)
        return { message: "Game parameter not found" };
    const newGameParameter = yield prisma_1.default.gameParameter.update({
        where: {
            id: gameParameter.id
        },
        data: {
            value: body.value
        }
    });
    reply.send(newGameParameter);
});
exports.updateGameParameter = updateGameParameter;
