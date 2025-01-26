"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allRoutes = void 0;
const route_1 = require("./core/birthday/services/route");
const route_2 = require("./core/gameParameter/services/route");
const route_3 = require("./core/interComment/services/route");
const route_4 = require("./core/user/services/route");
const route_5 = require("./core/vote/services/route");
exports.allRoutes = [
    route_4.RoutesUser,
    route_2.RoutesGameParameter,
    route_1.RoutesBirthday,
    route_3.RoutesInterComment,
    route_5.RoutesVote
];
