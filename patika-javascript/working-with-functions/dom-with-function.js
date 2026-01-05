let greeting = document.querySelector("#greeting");
greeting.addEventListener("mouseover", domClick); // mouseover yerine click kullanılabilir

function domClick() {
  console.log("etkinlik denetlendi");
  this.style.color == "red"
    ? (this.style.color = "blue")
    : (this.style.color = "red");
}
