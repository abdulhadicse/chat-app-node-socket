const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);

app.use(express.static(path.join(__dirname,'public')));

const io= require('socket.io')(server);
io.on('connection', socket =>{
    console.log('connection ready');

    socket.on('sendMessgae', msg=>{
        socket.broadcast.emit('sendToAll', msg);
    })
})


const PORT = process.env.PORT || 4000;
server.listen(PORT, (req,res)=>{
    console.log('Server is running');
})