// dom-2.js içeriği

let lastChild = document.querySelector("ul#list>li:last-child");
lastChild.innerHTML = "son oge degisti..."; // Çalışır, çünkü artık HTML'de var

let firstChild = document.querySelector("ul#list>li:first-child");
firstChild.innerHTML = "ilk oge degisti..."; // Çalışır

let ulDom = document.querySelector("ul#list");
let liDom = document.createElement("li");

liDom.innerHTML = "Kendi olusturdugumuz oge";

// ulDom.append(liDom) // en sona ekler

ulDom.prepend(liDom); // Yeni öğe listeye eklendi

// ORTADAKİ ÖĞEYİ DEĞİŞTİRME (Sadece bir kez ve doğru şekilde)
let listItems = document.querySelectorAll("ul#list > li");
let midIndex = Math.floor(listItems.length / 2);

if (listItems.length > 0) {
  let midChild = listItems[midIndex];
  midChild.innerHTML = "Ortadaki oge degisti (DUZELTILDI)...";
} else {
  console.log("Liste boş, orta öğeye erişilemiyor.");
}

// Doma css class bilgisi eklemek veya çıkarmak

let greeting = document.querySelector("#greeting");

greeting.classList.add("text-primary");
greeting.classList.add("title");
greeting.classList.add("new-info", "second-class", "third-class");

greeting.classList.remove("title", "second-class");

console.log(greeting.classList);
