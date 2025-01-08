"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allRoutes = void 0;
const route_1 = require("./core/gameParameter/services/route");
const route_2 = require("./core/user/services/route");
exports.allRoutes = [
    route_2.RoutesUser,
    route_1.RoutesGameParameter
];
