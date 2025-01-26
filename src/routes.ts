import { RoutesBirthday } from "./core/birthday/services/route";
import { RoutesGameParameter } from "./core/gameParameter/services/route";
import { RoutesInterComment } from "./core/interComment/services/route";
import { RoutesUser } from "./core/user/services/route";
import { RoutesVote } from "./core/vote/services/route";


export const allRoutes = [
    RoutesUser,
    RoutesGameParameter,
    RoutesBirthday,
    RoutesInterComment,
    RoutesVote

]