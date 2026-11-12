var Car = require('../models/car').Car;

module.exports = async function (req, res, next) {
  res.locals.nav = [];
  try {
    var menu = await Car.find({}, { _id: 0, title: 1, nick: 1 });
    if (menu.length) {
      res.locals.nav = menu;
    }
  } catch (err) {
    return next(err);
  }
  next();
};
