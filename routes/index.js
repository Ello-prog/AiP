var express = require('express');
var router = express.Router();

var cars = [
  {
    href: '/granta',
    title: 'Гранта',
    tag: 'Город',
    picture: '/images/granta.jpg',
    card: 'Седан и лифтбек для каждого дня. Самая массовая Lada.',
    desc: 'Бюджетный автомобиль АвтоВАЗа. Выпускается в Тольятти как седан и лифтбек и остаётся самой доступной моделью марки.'
  },
  {
    href: '/vesta',
    title: 'Веста',
    tag: 'Трасса',
    picture: '/images/vesta.jpg',
    card: 'Седан и универсал, на которых Lada выехала на трассу.',
    desc: 'Легковой автомобиль Lada для города и трассы. Седан и универсал с более собранным характером, чем у городских моделей.'
  },
  {
    href: '/niva',
    title: 'Нива',
    tag: 'Бездорожье',
    picture: '/images/niva.jpg',
    card: 'Постоянный полный привод и кузов, который не боится колеи.',
    desc: 'Внедорожник Lada с постоянным полным приводом. Создан для плохих дорог и остаётся самой узнаваемой моделью АвтоВАЗа.'
  }
];

router.get('/', function (req, res, next) {
  res.render('index', { title: 'АвтоВАЗ', cars: cars });
});

cars.forEach(function (car) {
  router.get(car.href, function (req, res, next) {
    res.render('car', {
      title: car.title,
      tag: car.tag,
      picture: car.picture,
      desc: car.desc
    });
  });
});

module.exports = router;
