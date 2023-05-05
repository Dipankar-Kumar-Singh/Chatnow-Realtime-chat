const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');
const formateMesssage = require('./utils/messages');

//
const app = express();
const server = http.createServer(app);
const PORT = 3000 || process.env.PORT;
const io = socketio(server);

const botName = 'Chatnow Bot';

app.use(express.static(path.join(__dirname, 'public')));

// Runs when client connects
io.on('connection', (socket) => {
	console.log('New Connection Register.... ');

	// wlecome current user
	socket.emit(
		'message',
		formateMesssage(botName, 'Welcome to Chat Room.....')
	);

	// Broadbase when a user disconect
	socket.broadcast.emit(
		'message',
		formateMesssage(botName, 'A user has joined the Chat')
	);

	// Runs when client Disconneccts
	socket.on('disconnect', () => {
		io.emit(
			'message',
			formateMesssage(botName, 'A user has Left the Chat')
		);
	});

	// Listen for chatMessage
	socket.on('chatMessage', (message) => {
		// console.log(message) ;
		io.emit('message', formateMesssage('USER', message));
	});
});

server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
