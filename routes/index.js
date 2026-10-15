var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'АвтоВАЗ' });
});

/* Страница Гранты */
router.get('/granta', function (req, res, next) {
  res.send('<h1>Страница Гранты</h1>');
});

/* Страница Весты */
router.get('/vesta', function (req, res, next) {
  res.send('<h1>Страница Весты</h1>');
});

/* Страница Нивы */
router.get('/niva', function (req, res, next) {
  res.send('<h1>Страница Нивы</h1>');
});

module.exports = router;
