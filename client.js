var messageContainer = document.querySelector('#messageContainer');
var input = document.querySelector('#message');
var button = document.querySelector('#sendMessage');

button.addEventListener('click', function () {
	var text = input.value;

	if (text) {
		sendMessage(text);
		input.value = '';
	}
});

function addText(text) {
	var p = document.createElement('p');
	p.innerHTML = text;
	messageContainer.appendChild(p);
}

var socket = io('localhost:3000');

function sendMessage(text) {
	socket.emit('chatMessage', text);
}

socket.on('newUser', function () {
	addText('A new user joined!');
});

socket.on('chatMessage', function (msg) {
	addText(msg);
});
