const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
   cors: '*'
});
const PORT = 4500;
const cors = require('cors');

// const proxy = require('express-http-proxy');
// app.use('/', proxy('localhost:4200'));
app.use(cors());

io.on('connection', (socket) => {
   console.log('a user connected');
});

setTimeout(() => io.emit('rand', Math.floor(Math.random() * 1000)), 1 * 1000);


server.listen(PORT, () => {
   console.log(`listening on *:${PORT}`);
});