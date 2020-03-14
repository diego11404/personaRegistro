const express = require('express'),
      path = require('path');
      cookieParser = require('cookie-parser');
      bodyParser = require('body-parser');

const indexController = require('./src/controller/index.controller'),
      persona = require('./src/controller/persona.controller.js'),
      app = express();

      
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, HEAD"); 
  res.header('Access-Control-Allow-Credentials', 'true'); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexController)
app.use('/personas', persona)

app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || 'Internal Server Error',
    },
  });
});

module.exports = app;
