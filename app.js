var createError = require('http-errors');
var express = require('express');
const { google } = require("googleapis");
const app = express();
var path = require('path');
// const keys = require('./keys.json')
const { resolve4 } = require('dns');

const port = process.env.PORT || 3030;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.use(require('./routes/submission'))


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// app.get('/' , (req ,res)=>{
//    res.send('abcdef')
// })

app.get('/', function (req, res) {
    res.render('pages/home.ejs');
});

app.get('/career', function (req, res) {
  res.render('pages/career-new.ejs');
});

app.get('/contact', function (req, res) {
  res.render('pages/contact.ejs');
});

app.get('/product', function (req, res) {
  res.render('pages/product.ejs');
});

  // app.get('/nav', function (req, res) {
  //   res.render('common/nav.ejs');
  // }); 

// app.listen(3030 , (req ,res)=>{
//    console.log('port is running at  3030');
// })

app.listen(port , (req ,res)=>{
  console.log('port is running at  ${port}');
})