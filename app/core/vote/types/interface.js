"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vote = void 0;
const typebox_1 = require("@sinclair/typebox");
const interface_1 = require("../../user/types/interface");
const interface_2 = require("../../interComment/types/interface");
exports.Vote = typebox_1.Type.Object({
    id: typebox_1.Type.String(),
    value: typebox_1.Type.Boolean(),
    user: typebox_1.Type.Object(interface_1.User),
    user_id: typebox_1.Type.String(),
    comment: typebox_1.Type.Ref(interface_2.InterComment),
    comment_id: typebox_1.Type.String(),
});
