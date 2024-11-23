// console.log("Web Serverni boshlash");
// const express = require("express");
// const res = require("express/lib/response");
// const app = express();

// // MangooDB choqirish
// const db = require("./server").db();

// // 1 Kirish code
// app.use(express.static("public"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // 2 Session code
// // 3 Views code
// app.set("views", "views");
// app.set("view engine", "ejs");

// // 4 Routing code
// app.post("/create-item", (req, res) => {
//     console.log('user entered /create-item');
//     const new_reja = req.body.reja;
//     db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
//         if (err) {
//             console.log(err);
//             res.end("something went wrong");
//         } else {
//             res.end("successfully added");
//         }
//     });
// });

// app.get("/", function (req, res) {
//     console.log('user entered /');
//    db.collection("plans")
//    .find()
//    .toArray((err, data) => {
//     if (err) {
//         console.log(err);
//         res.end("something went wrong");
//     } else {
//         res.render("reja", { items: data });
//     }
//    });
// });

// module.exports = app;
console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

// MangooDB choqirish
const db = require("./server").db();

// Функция для подсчёта цифр в строке
function countDigits(s) {
    let count = 0; // Переменная для подсчёта цифр
    for (let char of s) { // Перебираем каждый символ строки
        if (!isNaN(char) && char.trim() !== '') { // Проверяем, является ли символ цифрой
            count++;
        }
    }
    return count; // Возвращаем количество цифр
}

// 1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 Session code
// 3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
app.post("/create-item", (req, res) => {
    console.log('user entered /create-item');
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        if (err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            res.end("successfully added");
        }
    });
});

app.get("/", function (req, res) {
    console.log('user entered /');
   db.collection("plans")
   .find()
   .toArray((err, data) => {
    if (err) {
        console.log(err);
        res.end("something went wrong");
    } else {
        res.render("reja", { items: data });
    }
   });
});

// Новый маршрут для подсчёта цифр
app.get("/count-digits", (req, res) => {
    const inputString = req.query.input || ""; // Получаем строку из параметра запроса
    console.log(`Полученная строка: "${inputString}"`); // Лог строки
    const digitCount = countDigits(inputString); // Считаем количество цифр
    console.log(`Количество цифр: ${digitCount}`); // Лог результата
    res.send(`Количество цифр в строке "${inputString}": ${digitCount}`);
});

module.exports = app;

