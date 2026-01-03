// Ternary Operatör ile çalışmak
let userName = prompt("Kullanici adinizi giriniz:");
let info = document.querySelector("#info");

// Ternary kullanimi :
// kosul ? dogruysa : yanlissa

// userName.length > 0 ? userName : "kullanici bilginiz bulunamadi :("

info.innerHTML = `${userName ? userName : "kullanici bilginiz bulunamadi :( "}`;
