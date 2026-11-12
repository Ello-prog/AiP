var express = require('express');
var router = express.Router();
var Car = require('../models/car').Car;

router.get('/', async function (req, res, next) {
  try {
    var cars = await Car.find();
    res.render('index', { title: 'АвтоВАЗ', cars: cars });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
