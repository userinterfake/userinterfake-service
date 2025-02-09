import fastify from 'fastify'
import { allRoutes } from './routes';
import cors from '@fastify/cors'
import { Server } from 'socket.io'

const server = fastify()

const app = server.server

const io = new Server(app, {
	cors: {
		origin: '*',
		methods: ['GET']
	}
})

server.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
})

server.get('/ping', async (request, reply) => {
  return 'ponddg\n'
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
	io.on('connection', (socket) => {{
		console.log('a user connected');
		socket.on('disconnect', () => {
			console.log('user disconnected');
		})
		socket.on('message', (data) => {
			console.log(data)
			io.emit('message', data)
		})
	}})
})

server.listen({port: Number(port), host: '0.0.0.0'}, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server escuchando en ${address}`)
})