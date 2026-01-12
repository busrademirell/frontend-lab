/*
User Stories:

You should initialize the five variables fortune1, fortune2, fortune3, fortune4, and fortune5 with a string value of your choice. You can use the below options if you like:

"Your cat will look very cuddly today."
"The weather will be nice tomorrow."
"Be cautious of your new neighbors."
"You will find a new hobby soon."
"It would be wise to avoid the color red today."
You should select a random number between 1 and 5, inclusive, and assign it to the variable randomNumber.

You should create a selectedFortune variable and assign the appropriate fortune based on these rules:

If randomNumber is 1, assign the value of fortune1 to selectedFortune.
If randomNumber is 2, assign the value of fortune2 to selectedFortune.
If randomNumber is 3, assign the value of fortune3 to selectedFortune.
If randomNumber is 4, assign the value of fortune4 to selectedFortune.
If randomNumber is 5, assign the value of fortune5 to selectedFortune.
You should log the selectedFortune to the console.
*/
/*
Tests 
1. You should initialize fortune1 with a string value.
Passed:2. You should initialize fortune2 with a string value.
Passed:3. You should initialize fortune3 with a string value.
Passed:4. You should initialize fortune4 with a string value.
Passed:5. You should initialize fortune5 with a string value.
Passed:6. You should use the Math.random() method to generate a random number.
Passed:7. You should generate a random number between 1 and 5, inclusive, and assign it to the variable randomNumber.
Passed:8. You should have a selectedFortune variable that is assigned a value based on the value of randomNumber.
Passed:9. The randomNumber should correspond to its fortune. For example, if randomNumber is 1, the selectedFortune should be equal to fortune1 and so on.
Passed:10. You should output the selectedFortune to the console.
*/

const fortune1 = "Your cat will look very cuddly today.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "Be cautious of your new neighbors.";
const fortune4 = "You will find a new hobby soon.";
const fortune5 = "It would be wise to avoid the color red today.";

const randomNumber = Math.floor(Math.random() * 5) + 1;
let selectedFortune;

if (randomNumber === 1) {
  selectedFortune = fortune1;
} else if (randomNumber === 2) {
  selectedFortune = fortune2;
} else if (randomNumber === 3) {
  selectedFortune = fortune3;
} else if (randomNumber === 4) {
  selectedFortune = fortune4;
} else if (randomNumber === 5) {
  selectedFortune = fortune5;
}
console.log(selectedFortune);
