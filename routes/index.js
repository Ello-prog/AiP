var express = require('express');
var router = express.Router();

/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
 res.render('logreg',{title: 'Вход'});
 });

/* GET home page. */
router.get('/', function (req, res, next) {
  req.session.greeting = "Hi!!!";
  res.render('index', { title: 'АвтоВАЗ', counter: req.session.counter });
});


module.exports = router;
