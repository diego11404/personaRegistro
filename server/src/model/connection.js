const mysql = require('mysql'),
      conf = require('./config')

const pool = mysql.createPool(conf)

pool.on('connection', function (connection) {
  connection.query('connected')
});

module.exports= pool