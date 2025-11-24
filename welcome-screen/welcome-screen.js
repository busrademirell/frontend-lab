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
function showTime() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Convert single digit numbers to 2 digits (like 09)
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("clock").innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(showTime, 1000);

showTime(); // Run as soon as the page opens

function showDate() {
  const now = new Date();

  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  document.getElementById("date").innerHTML = `${day}.${month}.${year}`;
}
setInterval(showDate, 1000);
showDate();
