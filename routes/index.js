var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'АвтоВАЗ' });
});

/* Страница Гранты */
router.get('/granta', function (req, res, next) {
  res.render('car', {
    title: 'Гранта',
    picture: '/images/granta.jpg',
    desc: 'Бюджетный автомобиль Lada. Выпускается в Тольятти как седан и лифтбек.'
  });
});

/* Страница Весты */
router.get('/vesta', function (req, res, next) {
  res.render('car', {
    title: 'Веста',
    picture: '/images/vesta.jpg',
    desc: 'Легковой автомобиль Lada. Седан и универсал для города и трассы.'
  });
});

/* Страница Нивы */
router.get('/niva', function (req, res, next) {
  res.render('car', {
    title: 'Нива',
    picture: '/images/niva.jpg',
    desc: 'Внедорожник Lada с постоянным полным приводом. Создан для плохих дорог.'
  });
});

module.exports = router;
