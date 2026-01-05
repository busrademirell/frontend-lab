// **************** number ******************

// Aritmetik Operatörler

// Toplama: +
// Çıkarma: -
// Çarpma: *
// Üs Alma: **
// Bölme: /
// Mod Alma: %
// Arttırma: ++
// Eksiltme: --

//  number veri turu tanimlamak:
let price = 100;
let tax = 0.18;
let priceTax = price * tax;
let total = price + priceTax;
console.log(
  "Fiyat:",
  price,
  "KDV Orani:",
  tax,
  "KDV Tutari:",
  priceTax,
  "Fiyat: ",
  total
);

let stringNumber = "11";
console.log(stringNumber);
let newNumber = Number(stringNumber);
console.log(newNumber);
console.log("Number Constructor icine bilgi gönderildi:", Number("111"));

//  arttirma ve azaltma işlemleri:
let counter = 320;
counter = counter + 1; // uzun yontem
counter += 1;
counter++;
console.log(counter);

counter--;
counter -= 1;
console.log(counter);

counter *= 10;
console.log(counter);

counter /= 2;
console.log(counter);

// işlem önceliği:
console.log(2 + 3 * 10); // 50 ??
console.log((2 + 3) * 10); // 50 ??

//mod(kalan) alma %:
// sayı tek mi çift mi ??
console.log(14 % 2);

// 8 urun alan koliye tum urunler sigiyor mu ?
console.log("Koli kalan urun orneği:", 18 % 8);

// us alma **:
console.log(2 * 2 * 2);
console.log(2 ** 4);

// asagi yuvarlama islemi -> Math.floor:
console.log("asagi yuvarlama:", Math.floor(1.9)); // -> 1

// yukari yuvarlama islemi -> Math ceil:
console.log("yukari yuvarlama:", Math.ceil(1.9)); // -> 2

// yakina yuvarlama işlemi -> Math.round:
console.log("Yakina yuvarlama:", Math.round(1.5)); // 1.4 ->1, 1.5->2
