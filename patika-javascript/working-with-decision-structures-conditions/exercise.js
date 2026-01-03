// Kosullarla calismak bolum sonu egzersizleri :

/*
1- Prompt ile aldiğin bilgiye gore asagidaki yapiyi kullanarak notun bilgisini #info'ya yazdir
AA 90-100
BA 85-89
BB 80-84
CB 75-79
CC 70-74
DC 65-69
DD 60-64
FD 50-59
FF 0-49

2- kullanicinin girdigi verinin istedigimiz aralikta olup olmadigini kontrol et 
3- ff bilgisinde uzgun surat ikonu cikart, digerlerinde ise gulucuk olsun :) 
4- ff class bilgisi text-denger, digerlerinin ise text-primary olsun 
*/

const SMİLE = ` 
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
</svg>
`;
const SAD = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
</svg>
`;

let examGrade = prompt("Puan giriniz :");
let textİnfo;
let info = document.querySelector("#info");

if (examGrade >= 0 && examGrade <= 100) {
  // tum if yapısı burada olmalı
  textİnfo = SMİLE;
  info.classList.add("text-primary");
  if (examGrade >= 90) {
    textİnfo += " AA";
  } else if (examGrade >= 85) {
    textİnfo += " BA";
  } else if (examGrade >= 80) {
    textİnfo += " BB";
  } else if (examGrade >= 75) {
    textİnfo += " CB";
  } else if (examGrade >= 70) {
    textİnfo += " CC";
  } else if (examGrade >= 65) {
    textİnfo += " DC";
  } else if (examGrade >= 60) {
    textİnfo += " DD";
  } else if (examGrade >= 50) {
    textİnfo += " FD";
  } else if (examGrade < 50) {
    textİnfo = `${SAD} FF`;
    info.classList.remove("text-primary");
    info.classList.add("text-danger"); // classlar sadece 0 dan büyükse ekleniyor.
  }
} else {
  textİnfo = "Bilgiler dogru değil";
}

info.innerHTML = `${textİnfo} -> ${examGrade}`;
