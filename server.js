const http = require('http')
const express = require('express');


const app = express()
app.use(express.static('public'))

app.set('port', '3000')

const server = http.createServer(app)
server.on('listening', () => {
  console.log('Listening on 3000')
})

const io = require('socket.io')(server, {
  allowEIO3: true,
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.sockets.on('connection', (socket) => {
  console.log(socket.conn.protocol)
  console.log('Client connected: ' + socket.id)
  socket.on('die', (data) => socket.broadcast.emit('die', data))
  socket.on('disconnect', () => console.log('Client disconnected'))
})

server.listen('3000')