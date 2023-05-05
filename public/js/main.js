const chatForm = document.getElementById('chat-form');

const socket = io();
const chatMessages = document.querySelector('.chat-messages');

// Message from server
socket.on('message', (message) => {
	console.log(message);
	displayMessage(message);

	// scroll down
	chatMessages.scrollTop = chatMessages.scrollHeight;
});

chatForm.addEventListener('submit', (e) => {
	e.preventDefault();

	// get message text
	const msg = e.target.elements.msg.value;

	// Emit message to server
	socket.emit('chatMessage', msg);

	// Clear input
	e.target.elements.msg.value = '';
	e.target.elements.msg.focus();
});

// Output message to DOM
function displayMessage(message) {
	const div = document.createElement('div');
	div.classList.add('message');
	div.innerHTML = `
        <p class="meta"> ${message.username} <span>${message.time}</span></p>
        <p class="text">
            ${message.text}
        </p>
    `;

	document.querySelector('.chat-messages').appendChild(div);
}
