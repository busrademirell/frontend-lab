let firstName = prompt("Please enter your name : ");
let greeting = document.querySelector("#greeting");
greeting.innerHTML = `${greeting.innerHTML} <small>${firstName}!</small>`;
