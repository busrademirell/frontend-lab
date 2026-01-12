const number = 6;
const number2 = 5;
const number3 = 7;

// Addition Operator

const result1 = number + number2 + number3;
console.log(result1); // result = 18

const number4 = `32`;
const number5 = 6;
const result2 = number4 + number5;
console.log(result2); // result = 326

// subtraction
const number6 = 4;
const number7 = 5;
const result3 = number7 - number6;
console.log(result3); // result = 1

// Multiplication Operator:
const number8 = 4;
const number9 = 5;
const result4 = number9 * number8;
console.log(result4); // result = 20

// Division Operator:
const number10 = 4;
const number11 = 16;
const result5 = number11 / number10;
console.log(result5); // result = 4

// Division By Zero:
const number12 = 10;
const number13 = 0;
const result6 = number12 / number13;
console.log(result6); // result = Infinity

// Remainder Operator:
const num14 = 10;
const num15 = 4;
const remainder = num14 % num15;
console.log(remainder); // result = 2

// Exponentiation Operator:
const num16 = 2;
const num17 = 3;
const result7 = num16 ** (num17 ** num16);
console.log(result7); // result = 512

// Increment Operator:
let num18 = 6;
let num19 = 5;
let result8 = num18 + ++num19;
console.log(result8); // result = 12

let result9 = num18++ + num19;
console.log(result9); // result = 12
console.log(num18); // result = 7

// Booleans and Equality
console.log(7 == "7"); // true
console.log(7 === "7"); // false

// Unary Operators

const num = 8;
console.log(-num); // -8

// void
const result = void (2 + 2);
console.log(result); // result = undefined
// <a href="javascript:void(0);">Click Me</a>

// typeof
const value = "Hello world";

console.log(typeof value); // string

// Bitwise Operators - AND (&)
const num20 = 5; // Binary: 101
const num21 = 3; // Binary: 011
console.log(num20 & num21); // 1 (Binary: 001)

// Bitwise Operators - OR (|)
const num22 = 5; // Binary: 101
const num23 = 3; // Binary: 011
console.log(num22 | num23); // 7 (Binary: 111)

// Bitwise Operators - XOR (^)
const num24 = 5; // Binary: 101
const num25 = 3; // Binary: 011
console.log(num24 ^ num25); // 6 (Binary: 110)

// Bitwise Operators - NOT (~)
const num26 = 5; // Binary: 101
console.log(~num26); // -6

// Bitwise Operators - left shift (<<)
const num27 = 5; // Binary: 101
console.log(num27 << 1); // 10 (Binary: 1010)

// Bitwise Operators - right shift (>>)
const num28 = 5; // Binary: 101
console.log(num28 >> 1); // 2 (Binary: 10)

// If/Else If/Else

const age = 15;

if (age >= 18) {
  console.log("You're eligible to vote");
} else {
  console.log("You're not eligible to vote"); // You're not eligible to vote
}

// Ternary Operator
const temperature = 30;
const weather = temperature > 25 ? "sunny" : "cool";

console.log(`It's a ${weather} day!`); // It's a sunny day!

// Math.random()
const randomNum = Math.floor(Math.random() * 5) + 1;
// Math.max()-Math.min()
const smallest = Math.min(1, 5, 3, 9);
console.log(smallest); // 1

const largest = Math.max(1, 5, 3, 9);
console.log(largest); // 9

// Math.ceil()
console.log(Math.ceil(4.3)); // 5
// Math.floor()
console.log(Math.floor(4.7)); // 4
// Math.round()
console.log(Math.round(4.5)); // 5

// Math.trunc()
console.log(Math.trunc(2.9)); // 2

// Math.sqrt()
console.log(Math.sqrt(81)); // 9

// Math.cbrt()
console.log(Math.cbrt(27)); // 3

// Math.abs()
console.log(Math.abs(-5)); // 5

// Math.pow()
console.log(Math.pow(2, 3)); // 8

let sayi = Math.random() * 1;
console.log(sayi);

// parseFloat()
console.log(parseFloat("3.14 abc")); // 3.14

// parseInt()
console.log(parseInt("3.14")); // 3

// .toFixed()
console.log((3.14449).toFixed(3)); // "3.144"

// undefined vs null

let kullaniciIsmi1 = undefined;
let kullaniciIsmi2 = null;

if (kullaniciIsmi1 == kullaniciIsmi2) {
  console.log("İsim alanı boş, lütfen doldurun."); // According to JavaScript rules, these two are considered equivalent to "empty values".
}

let veri = null;

if (veri === undefined) {
  console.log("Bu veri henüz hiç tanımlanmadı.");
} else if (veri === null) {
  console.log("Bu veri kasten boş bırakıldı."); // Their types are different.
}

let sicaklik; // undefined

if (sicaklik < 0) {
  console.log("Hava donuyor!");
} else {
  console.log("Hava donmuyor veya veri hatalı."); // `undefined` cannot pass any numerical comparisons (<, >, <=) because it is converted to `NaN`.
}
