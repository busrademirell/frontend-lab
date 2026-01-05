// Temel kurallar
// 1: Bir fonksiyon bir veya birden fazla parametre alabilir veya hic almayabilir
// 2: Bir fonksiyon disari bilgi gonderebilir (return) veya gonderemeyebilir
// 3: Mumkunse fonksiyonun bagimliliklarini azaltmak gerekir

let firstName = "lorem";

function greetings(firstName = "", lastName = "") {
  // default parametre aliyor..
  //   console.log(`Merhaba ${firstName ? firstName : ""}`);
  console.log(`Merhaba ${firstName}`);
  console.log(`Merhaba ${firstName} ${lastName}`);
}

console.log(firstName); // değişken
greetings(); // Fonksiyona parametre göndermedik
greetings("parametre");

function greetings2(firstName, lastName) {
  let info = `Merhaba ${firstName} ${lastName}`;
  return info;
}

let greetingsInfo = greetings2("Ad", "Soyad");
// let info = "deneme"
console.log(greetingsInfo);

function domIdWriteInfo(id, info) {
  let domObject = document.querySelector(`#${id}`);
  domObject.innerHTML = info;
}

let htmlInfo = `<span style="color:red">Color redd</span>`;

domIdWriteInfo("greeting", htmlInfo);
// domIdWriteInfo("info", greeting2("Lorem", "Ipsum"));
