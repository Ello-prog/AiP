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
  },
  {
    href: '/vaz-2107',
    title: 'ВАЗ-2107',
    tag: 'Классика',
    picture: '/images/vaz-2107.jpg',
    card: '«Семёрка»: задний привод и кузов, знакомый с 1982 года.',
    desc: 'Классический седан АвтоВАЗа на базе ВАЗ-2105. Задний привод, простая конструкция и долгий выпуск сделали «семёрку» одной из самых массовых машин страны.'
  },
  {
    href: '/vaz-2170',
    title: 'ВАЗ-2170',
    tag: 'Приора',
    picture: '/images/vaz-2170.jpg',
    card: 'Седан Priora, который сменил «десятое» семейство.',
    desc: 'Седан Lada Priora, заводской индекс ВАЗ-2170. Пришёл на смену семейству ВАЗ-2110 и выпускался в Тольятти как городской автомобиль на каждый день.'
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
