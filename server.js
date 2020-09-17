// const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const request = require('request');
const ejs = require('ejs');
const app = express();
const port = 3000;
const router = express.Router();
// const session = require('express-session');


app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/'));
app.set(__dirname + '/');  
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

var mainRouter = require('./routes/main');
var pcRouter = require('./routes/pcview');
var androidRouter = require('./routes/android');
var iosRouter = require('./routes/ios');
var freeRouter = require('./routes/freeware');
// const { options } = require('request');

// app.use(cookieParser());

//for body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', mainRouter);
app.use('/pc', pcRouter);
app.use('/android', androidRouter);
app.use('/ios', iosRouter);
app.use('/freeware', freeRouter);

app.listen(app.get('port'), function() {
  
});
