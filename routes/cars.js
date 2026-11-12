var express = require('express');
var router = express.Router();
var createError = require('http-errors');
var Car = require('../models/car').Car;
var checkAuth = require('../middlewares/checkAuth.js');

router.get('/', function (req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с cars');
});

router.get('/:nick', checkAuth, async function (req, res, next) {
  try {
    var cars = await Car.find({ nick: req.params.nick });
    if (!cars.length) {
      return next(createError(404, 'Нет такой модели АвтоВАЗ'));
    }
    var car = cars[0];
    res.render('car', {
      title: car.title,
      tag: car.tag,
      picture: car.avatar,
      desc: car.desc
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
