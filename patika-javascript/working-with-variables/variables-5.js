let email = "busraademirel123@gmail.com";
let firstName = "busra";
let lastName = "DEMIREL";

// string karakter sayısı -> length
console.log(email.length);

// ilk karakleri bulmak -> [0]:
console.log(firstName[0]);
console.log(firstName.charAt(0)); // ayni işlem

// buyuk harf / kucuk harf :
firstName = firstName.toUpperCase();
console.log(firstName);

firstName = firstName.toLowerCase();
console.log(firstName);

// string içinde istedigimiz bilgiyi aramak ve yerini bulmak -> search:
console.log(email.search("@"));
console.log(email[15]);
email.search("olmayan"); // -1

// belli bir yere kadar al -> slice : (domain bilgisi)
let DOMAİN = email.slice(email.search("@") + 1);
console.log(DOMAİN);

console.log(
  DOMAİN.slice(0, DOMAİN.indexOf(".")) // sadece gmail kismini aldik
);

// bilgiyi degistir -> replace :
email = email.replace("gmail.com", "medium.com");
console.log(email);

// istedigim bilgi var mi ? -> includes :
email.includes("dfkcmkv"); // false
email.includes("@"); // true

// istedigim bilgiyle basladi mi ? bitti mi -> startsWidth, endsWidth :
console.log(email.endsWith("medium.com"));
