let firstName = prompt("Please enter your name : ");
let greeting = document.querySelector("#greeting");
greeting.innerHTML = `${greeting.innerHTML} <small>${firstName}!</small>`;

let currentHour = new Date().getHours();
let info = document.querySelector("#info");

if (currentHour < 12) {
  info.innerHTML = "Good morning";
} else if (currentHour < 18) {
  info.innerHTML = "Good Afternoon";
} else if (currentHour < 23) {
  info.innerHTML = "Good Evening";
} else {
  info.innerHTML = "Good Night";
}
