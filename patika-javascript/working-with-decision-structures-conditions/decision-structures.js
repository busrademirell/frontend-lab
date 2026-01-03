// karsilastirma-operatorleri-ve-mantiksal-operatorler

let price = "100";
let user = "busra";

// == Eşitse

console.log("== :", price == 1);
console.log("== :", price == 100);

// === Hem değeri hem de türü eşitse
console.log("=== :", price === 1);
console.log("=== :", price === 100);

// != Eşit değilse
console.log(user != "guest");

// < Kücükse
console.log("price < 100", price < 100);

// <= Kücük veya eşitse
console.log("price <= 100", price <= 100);

// > Büyükse
console.log("price > 200", price > 200);

// >= Büyük veya eşitse
console.log("price >= 100", price >= 100);

// && ve
price = 0;
console.log(price > 0 && user != "guest");

// || veya
console.log(price > 0 || user != "guest");

// ! değil (tersi)
user = "guest";
price = 1;
console.log(price > 0 && !user == "guest");
