var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.end('Hell yes Kitty! Raahwr!');
});

console.log('Server started!');
app.listen(1337);