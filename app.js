var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var app = express();

require('dotenv').config()

app.set('view engine', 'html');
app.set('views', __dirname + '/views')

var routes = require('./routes/index');
app.user('/', routes);

const mongoose = require('mongoose');
