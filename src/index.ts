import fastify from 'fastify'
import { allRoutes } from './routes';

const server = fastify()

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

server.register((app, _, done) => {
  allRoutes.forEach((routes) => routes.forEach((route) => app.route(route)));
  done();
});

const port = process.env.PORT || 4000;

server.listen({port: Number(port)}, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})