const app = require('http').createServer();

app.listen(3000, () => {
	console.log('Server is up and running!');
});

const io = require('socket.io')(app);

io.on('connection', socket => {
	socket.broadcast.emit('newUser');

	socket.on('chatMessage', function (msg) {
		io.emit('chatMessage', msg);
	});
});