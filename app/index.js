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
const fastify_1 = __importDefault(require("fastify"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("@fastify/cors"));
const server = (0, fastify_1.default)();
server.register(cors_1.default, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
});
server.get('/ping', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    return 'pong\n';
}));
server.register((app, _, done) => {
    routes_1.allRoutes.forEach((routes) => routes.forEach((route) => app.route(route)));
    done();
});
const port = process.env.PORT || 4000;
server.listen({ port: Number(port), host: '0.0.0.0' }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server escuchando en ${address}`);
});
