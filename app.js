var express = require("express")
var app = express()

app.get("/", function (req, res) {
    var page = '<!doctype html>' +
        '<html lang="ru">' +
        '<head>' +
        '<meta charset="UTF-8">' +
        '<title>АвтоВАЗ</title>' +
        '</head>' +
        '<body>' +
        '<h1>АвтоВАЗ</h1>' +
        '<p>Российский автопроизводитель. Марка автомобилей — Lada.</p>' +
        '<p>Город: Тольятти.</p>' +
        '</body>' +
        '</html>'
    res.send(page)
})

app.listen(3000, function () {
    console.log("Сервер АвтоВАЗ запущен: http://localhost:3000")
})
