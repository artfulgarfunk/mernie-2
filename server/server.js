// server packages //
var path = require('path');
var fs = require('fs');
var express = require('express');

// Imports //
var IndexRoutes = require('./routes/index');

// app creation... calling the variable returned by the express package, as a function //
var app = express();

// View Engine //
app.set('view engine', 'html');
app.engine('html', function (path, options, callbacks) {
  fs.readFile(path, 'utf-8', callback);
});

// MiddleWare //
app.use(express.static(path.join(__dirname, '../client')));

// Routes //
app.use('/', IndexRoutes);

// Error Handler //
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
});

// Server App //
module.exports = app;
