const socket = io() ;

socket.on('messageID' , message => {
    console.log(message) ;
})

