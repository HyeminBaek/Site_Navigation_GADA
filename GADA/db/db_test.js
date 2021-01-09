/* 
어려운 점
1. 타 DB에 접속할 때 같은 네트워크 안에선 접속이 가능하다.
2. 허나 네트워크가 다르면은 접속이 안되고 connect Timedout error가 뜬다.
3. 알아보니 방화벽에 막힌 포트를 열어주어야 하고, mysql user 의 IP 접근 가능 범위를 넓혀 주어야 한다.
4. 3306번 포트를 열고, newuser1의 접근 IP범위를 넓혀주었으나, 여전히 접근이 되지 않는다.
5. 공유기의 DMZ와 포트포워딩 설정을 해주었는데도, 접근이 되지 않는다.
6. 이유가 무었일까...
*/
var mysql = require('mysql');

var connection = mysql.createConnection({ // db 연결하기
    host: '192.168.0.9',
    user: 'newuser1',
    password: 'ljh9915!',
    database: 'fintech'
  });
  connection.connect();

  connection.query('SELECT * FROM user', function (error, results, fields) {
    if (error) throw error;
    console.log(results[0]);
  });
  
  connection.end();