var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hola Mundo docker Mini!');
});

app.listen(3000, function () {
  console.log('App de ejemplo escuchando puerto 3000!');
});
