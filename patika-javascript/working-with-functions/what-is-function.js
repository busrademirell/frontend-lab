// ilk fonksiyonumuzu tanımlamak

function helloWorld() {
  console.log("Merhaba dünya");
}

function hello() {
  console.log("Merhabaa");
  helloWorld();
}
// hata alabiliriz
// function userCheck() {
//   if (userName && age >= 18) {
//     info.innerHTML = "ehliyet alabilirsiniz";
//   } else if (!userName) {
//     info.innerHTML = "Kullanici adiniz yok";
//   } else if (!age) {
//     info.innerHTML = "Yas bilginiz yok";
//   } else if (!(age >= 18)) {
//     info.innerHTML = " 18 yaş altisiniz alamazsiniz";
//   }
// }

hello(); // Çağır
hello(); // Çağır
