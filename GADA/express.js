const express = require('express');
const app = express();
const path = require("path");
const request = require('request');
const expressSession = require('express-session');
var mysql = require('mysql');
var jwt = require('jsonwebtoken');

app.use(expressSession({
  secret :'happy',
  resave : true,
  saveUninitialized : true
}));
var connection = mysql.createConnection({ // db 연결하기
  host: 'localhost',
  user: 'root',
  password: 'ljh9915!',
  database: 'gada'
});
connection.connect();


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // urlencoded 타입의 데이터를 받기 위한 설정
app.use(express.static(path.join(__dirname, "views")));

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get("/join", function (req, res) {
  res.render("join");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/admin", function (req, res) {
  res.render("admin");
});
app.get("/user", function (req, res) {
  res.render("user");
});
app.get("/request", function(req,res){
  res.render("request");
})

app.post('/join', function (req, res) {
  var userId = req.body.userId;
  var userPassword = req.body.userPassword;
  var checkPassword = req.body.checkPassword;
  console.log(userId, userPassword);
  if (userPassword == checkPassword) {
    connection.query("INSERT INTO `userinfo`(`userId`,`userPw`) VALUES(?,?);",
      [
        userId,
        userPassword,
      ],
      function (error, results, fields) {
        if (error) throw error;
        else {
          res.json("성공");
        }
      });
  }
  else {
    res.json("실패");
  }
});

app.post("/request", function(req,res){
  var functions  = req.body.functions;
  var reason = req.body.reason;
  console.log(functions, reason);
  connection.query("INSERT INTO `urluser`(`functions`,`reason`) VALUES(?,?);",
  [
    functions,
    reason,
  ],
  function(error, results, fields){
    if(error) throw error;
    else{
      res.json("성공");
    }
  });
});




app.post('/login', function (req, res) {
  var userId = req.body.userId;
  var userPassword = req.body.userPassword;
  console.log(userId, userPassword);
  connection.query("SELECT * FROM userinfo WHERE userId = ?", [userId], function (
    error,
    results,
    fields
  ) {
    if (error) throw error;
    else {
      if (results.length == 0) {
        res.json(2); // 아이디 존재하지 않음
      } else {
        var storedPassword = results[0].userPw;
        if (results[0].userId == "root" && storedPassword == "root") {
          res.json("사용자 계정 로그인");
        }
        else if (storedPassword == userPassword) {
          console.log("로그인 성공");
          res.json("로그인 성공");
        } else {
          console.log("로그인 실패");
          res.json("로그인 실패");
        }
      }
    }
  });
});
app.listen(3002)