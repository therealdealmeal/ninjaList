var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = (process.env.PORT || 8000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, '.')));


app.listen(port);
console.log('Server running on port:  ' + port);
