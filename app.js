const express = require('express');

const logger = require('morgan');
require('dotenv').config({ path: `${__dirname}/../.env` });

const indexRouter = require('./src/routes/index');
const usersRouter = require('./src/routes/users');
require('./src/db/db');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
