// coklu kosul ile calismak
let userName = prompt("kullanici adinizi yaziniz :"); //console.log("...") şeklinde yazılabilir infoyu silersek
let age = prompt("yasinizi yaziniz :");
let info = document.querySelector("#info");

if (userName && age >= 18) {
  info.innerHTML = "ehliyet alabilirsiniz";
} else if (!userName) {
  info.innerHTML = "Kullanici adiniz yok";
} else if (!age) {
  info.innerHTML = "Yas bilginiz yok";
} else if (!(age >= 18)) {
  info.innerHTML = " 18 yaş altisiniz alamazsiniz";
}
// ya da else if (!(age >= 18) ) {
// console.log("Kullanici bilginiz bulunamamakta ya da 18 yas altisiniz.")
// } şeklinde de yazılabilir
