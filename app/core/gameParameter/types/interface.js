"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameParameter = exports.Game = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.Game = typebox_1.Type.Object({
    id: typebox_1.Type.String(),
    name: typebox_1.Type.String(),
});
exports.GameParameter = typebox_1.Type.Object({
    id: typebox_1.Type.String(),
    value: typebox_1.Type.Integer(),
    game_id: typebox_1.Type.String(),
    user_id: typebox_1.Type.String(),
    game: typebox_1.Type.Object(exports.Game)
});
