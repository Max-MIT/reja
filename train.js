// console. log("Jack Ma maslahatlari"); 
// const list = [
// "yahshi talaba boling", // 0-20 
// "togri boshliq tanlang va koprog hato qiling", // 20-30 
// "uzingizga ishlashingizni boshlang", // 30-40 
// "siz kuchli bolgan narsalarni qiling", // 40-50
// "yoshlarga investitsiya qiling", // 50-66 
// "endi dam oling, foydasi yoq endi", // 60
// ];

// // CALLBACK FUNCTION
// function maslahatBering(a, callback) {
//  if (typeof a !== "number") callback("insert a number", null);
//  else if (a <= 20) callback(null, list[0]);
//  else if (a > 20 && a <= 30) callback(null, list[1]);
//  else if (a > 30 && a <= 40) callback(null, list[2]); 
//  else if (a > 40 && a <= 50) callback(null, list[3]);
//  else if (a > 50 && a <= 60) callback(null, list[4]);
//  else {
//     setInterval(function () { 
//      callback(null, list[5]);    
//     }, 1000);
// }
// }

// console.log("passed here 0");
// maslahatBering(70, (err, data) => {
//    if (err) console.log("ERROR:", err);
//     else{
// console.log(data);
//     }
// });
// console.log("passed here 1");

// ASYNC fonction 
// async function maslahatBering(a) { 
//  if (typeof a !== "number") throw new Error("insert a number");
//  else if (a <= 20) return list[0];
//  else if (a > 20 && a <= 30) return list[1];
//  else if (a > 30 && a <= 40) return list[2]; 
//  else if (a > 40 && a <= 50) return list[3];
//  else if (a > 50 && a <= 60) return list[4];
//  else {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(list[5]);
//         }
//         })
//     })
    // setTimeout(function() {
    //  callback(null, list[5]);    
    // }, 5000);
//    }
//}

// console.log("passed here 0");
// maslahatBering(20)
// .then((data) => {
//     console.log("javob:", data);
// })
// .catch((err) => {
//     console.log("ERROR:", err);node
//     });
// console.log("passed here 1");


// maslahatBering(65, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else {
//     console.log("javob:", data);
//     }

// });
// console.log("passed here 1");

// call via asyn/await
// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();


// function countLetter(letter, word) {
//     return word.split("").reduce((count, char) => {
//       return char === letter ? count + 1 : count;
//     }, 0);
//   }
  
//   function countLetter(letter, word) {
//     let count = 0;
//     for (let i = 0; i < word.length; i++) {
//       if (word[i] === letter) {
//         count++;
//       }
//     }
//     return count;
//   }
  
//   let result = countLetter("e", "engineer"); // 3
//   console.log(result);
//   result = countLetter("o", "Hello world"); // 2
//   console.log(result);

// DEFINE
// function qoldiqBolish(a, b, callback) {
//     if (a === 0) {
//       callback("Mahraj nolga teng bolmasin!", null);
//     } else {
//       const c = a % b;
//       callback(null, c);
//     }
//   }
  
  // CALL
  // qoldiqBolish(7, 3, (err, data) => {
  //   if (err) {
  //     console.log("ERROR:", err);
  //   } else {
  //     console.log("data:", data);
  //     console.log("ANY LOGIC");
  //   }
  // });
// Функция для подсчёта цифр в строке
// function countDigits(s) {
//   let count = 0; // Переменная для подсчёта цифр
//   for (let char of s) { // Перебираем каждый символ строки
//       if (!isNaN(char) && char.trim() !== '') { // Проверяем, является ли символ цифрой
//           count++;
//       }
//   }
//   return count; // Возвращаем количество цифр
// }
  // Новый маршрут для подсчёта цифр
// app.get("/count-digits", (req, res) => {
//   const inputString = req.query.input || ""; // Получаем строку из параметра запроса
//   console.log(`Полученная строка: "${inputString}"`); // Лог строки
//   const digitCount = countDigits(inputString); // Считаем количество цифр
//   console.log(`Количество цифр: ${digitCount}`); // Лог результата
//   res.send(`Количество цифр в строке "${inputString}": ${digitCount}`);
// });

/*****************************************************************/
/*
C-TASK: 

Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;
*/

// Жавоб:
// Хакимов 🇰🇷 Корея 🇺🇿🇷🇺🇪🇺🇪🇸🇹🇷🇫🇮🇸🇪🇪🇪🇸🇦🇰🇷, [01.12.2024 18:38]
D-TASK: 

Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

Хакимов 🇰🇷 Корея 🇺🇿🇷🇺🇪🇺🇪🇸🇹🇷🇫🇮🇸🇪🇪🇪🇸🇦🇰🇷, [01.12.2024 18:38]
class Shop {
    constructor(non, lagmon, cola) {
        this.products = {
            non,
            lagmon,
            cola,
        };
    }

    // Hozirgi vaqtni olish
    _getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString("uz-UZ", { hour: '2-digit', minute: '2-digit' });
    }

    // Qoldiqni ko'rsatish
    qoldiq() {
        const time = this._getCurrentTime();
        console.log(Hozir ${time}da ${this.products.non}ta non, ${this.products.lagmon}ta lagmon va ${this.products.cola}ta cola mavjud!);
    }

    // Mahsulot sotish
    sotish(product, quantity) {
        if (this.products[product] === undefined) {
            console.log(Mahsulot "${product}" topilmadi!);
            return;
        }

        if (this.products[product] < quantity) {
            console.log(Hozirgi zaxirada yetarli ${product} yo'q!);
            return;
        }

        this.products[product] -= quantity;
        const time = this._getCurrentTime();
        console.log(Hozir ${time}da ${quantity}ta ${product} sotildi!);
    }

    // Mahsulot qabul qilish
    qabul(product, quantity) {
        if (this.products[product] === undefined) {
            console.log(Mahsulot "${product}" mavjud emas, yangi mahsulot sifatida qo'shiladi!);
            this.products[product] = 0;
        }

        this.products[product] += quantity;
        const time = this._getCurrentTime();
        console.log(Hozir ${time}da ${quantity}ta ${product} qabul qilindi!);
    }
}

// Sinfni test qilish
const shop = new Shop(4, 5, 2);

shop.qoldiq(); // Hozir vaqt: 4ta non, 5ta lagmon va 2ta cola mavjud!
shop.sotish("non", 3); // 3ta non sotildi
shop.qabul("cola", 4); // 4ta cola qabul qilindi
shop.qoldiq(); // Yangilangan qoldiq ko'rsatiladi
