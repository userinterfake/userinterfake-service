"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterComment = void 0;
const typebox_1 = require("@sinclair/typebox");
const interface_1 = require("../../vote/types/interface");
exports.InterComment = typebox_1.Type.Object({
    id: typebox_1.Type.String(),
    comment: typebox_1.Type.String(),
    user_id: typebox_1.Type.String(),
    username: typebox_1.Type.String(),
    votes: typebox_1.Type.Object(interface_1.Vote),
    createdAt: typebox_1.Type.Date(),
});
