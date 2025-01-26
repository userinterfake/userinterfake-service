"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Birthday = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.Birthday = typebox_1.Type.Object({
    id: typebox_1.Type.String(),
    day: typebox_1.Type.Integer(),
    month: typebox_1.Type.Integer(),
    user_id: typebox_1.Type.String(),
    username: typebox_1.Type.String(),
});
