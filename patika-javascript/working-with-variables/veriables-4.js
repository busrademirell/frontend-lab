let username = "Busra";
const DOMAİN = "medium.com";

let email = username + "@" + DOMAİN;

// console.log ("Merhaba" , username, "sitemize hosgeldin", "mail adresin:", email)

let info = ` 
Merhaba ${username} sitemize hosgeldin..
mail adresin: ${email}
mail adresinin uzunlugu: ${email.length}
borcunuz: ${(2 + 3) * 10} TL 
gunun saat bilgisi : ${new Date().getHours()}

kisa isminiz: ${username[0]}
`; // Alt Gr + ,
console.log(info);
