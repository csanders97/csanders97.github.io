var express = require('express'),
    pug = require('pug'),
    route = require('./routes/route'),
    path = require('path');

var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname + '/javascript')));

require('./routes/authRoutes')(app);

var PORT = process.env.PORT || 3000;
app.listen(PORT);