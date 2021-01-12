const express = require('express');
const app = express();
const path = require("path");
const request = require('request');
var mysql = require('mysql');

var connection = mysql.createConnection({ // db 연결하기
    host: '192.168.0.26',
    user: 'newuser',
    password: 'ljh9915!',
    database: 'gada'
});
connection.connect();

  
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // urlencoded 타입의 데이터를 받기 위한 설정

//app.use(express.static(path.join(__dirname, "public")));

app.get('/', function (req, res) {
    res.send('Hello World')
  });

app.get("/join", function(req,res){
    res.render("join");
});

app.post('/join', function(req,res){
    var userId = req.body.userId;
    var userPassword = req.body.userPassword;
    console.log(userId, userPassword);
    connection.query("INSERT INTO `userinfo`(`userId`,`userPw`) VALUES(?,?);",
    [
      userId,
      userPassword,
    ],
    function (error, results, fields) {
      if (error) throw error;
      else {
        res.json(1);
      }
    });
});
app.listen(3000)