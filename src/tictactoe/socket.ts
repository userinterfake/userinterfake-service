import { Server } from 'socket.io'

export function setupSocket(io: Server) {
  io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    socket.on('message', (data) => {
      console.log(data);
      io.emit('message', data);
    });
  });
}