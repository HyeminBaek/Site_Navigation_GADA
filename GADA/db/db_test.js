var mysql = require('mysql');

var connection = mysql.createConnection({ // db 연결하기
    host: '192.168.0.9',
    user: 'newuser',
    password: 'ljh9915!',
    database: 'fintech'
  });
  connection.connect();

  connection.query('SELECT * FROM user', function (error, results, fields) {
    if (error) throw error;
    console.log(results[0]);
  });
  
  connection.end();