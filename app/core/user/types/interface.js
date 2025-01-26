"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typebox_1 = require("@sinclair/typebox");
const interface_1 = require("../../birthday/types/interface");
const interface_2 = require("../../gameParameter/types/interface");
const interface_3 = require("../../vote/types/interface");
exports.User = typebox_1.Type.Object({
    id: typebox_1.Type.String(),
    twitch_id: typebox_1.Type.String(),
    gameParameters: typebox_1.Type.Array(interface_2.GameParameter),
    birthday: typebox_1.Type.Object(interface_1.Birthday),
    votes: typebox_1.Type.Array(typebox_1.Type.Object(interface_3.Vote)),
});
