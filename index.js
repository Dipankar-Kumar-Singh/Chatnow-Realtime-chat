const express = require('express');
const path = require('path') ;
const http = require('http') ;
const socketio = require('socket.io') ;

// 
const app = express() ;
const server = http.createServer(app)
const PORT = 3000 || process.env.PORT ;
const io = socketio(server) ;

app.use(express.static(path.join(__dirname ,  'public'))) ;

io.on('connection' , socket => {
    console.log("New Connection .... ") ;
    socket.emit("messageID" , "fgdfdf") ;

    // Broadbase when a user disconect 

})


server.listen(PORT , ()=>{
    console.log(`Server running on port ${PORT}`) 
})