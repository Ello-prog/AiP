var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/az2024')
var session = require("express-session")
var MongoStore = require('connect-mongo');

var indexRouter = require('./routes/index');
var carsRouter = require('./routes/cars');

var app = express();

app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
 secret: "AvtoVAZ",
 cookie:{maxAge:60*1000},
 proxy: true,
 resave: true,
 saveUninitialized: true,
 store: MongoStore.create({mongoUrl: 'mongodb://127.0.0.1:27017/az2024'})
}))

app.use(function(req,res,next){
 req.session.counter = req.session.counter + 1 || 1
 next()
 })
app.use(require("./middlewares/createMenu.js"))
app.use(require("./middlewares/createUser.js"))

app.use('/', indexRouter);
app.use('/cars', carsRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error', { title: 'АвтоВАЗ' });
});

module.exports = app;
