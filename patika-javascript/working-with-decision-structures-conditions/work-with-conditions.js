// Koşullarla çalışmak

let username = prompt("kullanici adinizi giriniz : ");

// eğer kullanici bilgisi varsa ekrana ismini yazdir
// eğer (username.length > 0) {console.log(username)} değilse {console.log("bilgi yok")}
// if (username.length > 0) {console.log(username)} else {console.log("bilgi yok")}

if (username.length > 0) {
  // if kismi her zaman true ise calisir
  console.log(`kullanici bilginiz ${username}`);
} else {
  console.log("bilgi yok");
}
