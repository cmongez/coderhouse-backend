const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static('public'));

const messages = [
  { author: 'Alejandro', text: 'Hola, que tal' },
  { author: 'Jean', text: 'Muy bien' },
  { author: 'Facundo', text: 'Genial' },
];

io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado');
  //carga el historico de mensajes a cada cliente que se conecta
  socket.emit('messages', messages);

  socket.on('new-message', (data) => {
    messages.push(data);

    //Este evento envia un nuevo mensaje a todos los clientes que esten conectados en ese momento
    io.sockets.emit('messages', messages);
  });
});

httpServer.listen(8080, () => {
  console.log('Server is running');
});
