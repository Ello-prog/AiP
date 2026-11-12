const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

var Car = require('./models/car.js').Car

var car = new Car({
   title: "Гранта",
   nick: "granta",
})

car.save();
