var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var dogsRouter = require('./routes/dogs');
var bookingsRouter = require('./routes/bookings');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/bookings', bookingsRouter);
app.use('/api/dogs', dogsRouter);

module.exports = app;
