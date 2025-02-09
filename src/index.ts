import fastify from 'fastify'
import { allRoutes } from './routes';
import cors from '@fastify/cors'
import { Server } from 'socket.io'
import { setupSocket } from './tictactoe/socket'

const server = fastify()

const app = server.server

const io = new Server(app, {
    cors: {
        origin: `${process.env.ORIGIN}`,
        methods: ['GET']
    }
})

server.register(cors, {
  origin: `${process.env.ORIGIN}`,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
})

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

server.register((app, _, done) => {
  allRoutes.forEach((routes) => routes.forEach((route) => app.route(route)))
  done()
})

const port = process.env.PORT || 4000

server.ready((err) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    setupSocket(io)
})

server.listen({port: Number(port), host: '0.0.0.0'}, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server escuchando en ${address}`)
})
