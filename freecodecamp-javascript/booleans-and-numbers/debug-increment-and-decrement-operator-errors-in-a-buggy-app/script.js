/*
User Stories:

You should have a variable named updatedCounter that correctly produces the value 11 by using the increment operator. Update the expression to use the correct prefix or postfix notation instead of hardcoding the value.
You should have a variable named finalScore that correctly produces the value 8 by using the increment operator. Update the expression to use the correct prefix or postfix notation instead of hardcoding the value.
You should have a variable named updatedCoins that correctly produces the value 2 by using the decrement operator. Update the expression to use the correct prefix or postfix notation instead of hardcoding the value.
You should have a variable named newHealth that correctly produces the value 7 by using the decrement operator. Update the expression to use the correct prefix or postfix notation instead of hardcoding the value.
*/
/*
Tests
1. You should have a variable named updatedCounter that uses prefix increment notation (++counter).
Passed:2. updatedCounter should equal to 11.
Passed:3. You should have a variable named finalScore that uses postfix increment notation (score++).
Passed:4. finalScore should equal to 8.
Passed:5. You should have a variable named updatedCoins that uses prefix decrement notation (--coins).
Passed:6. updatedCoins should equal to 2.
Passed:7. You should have a variable named newHealth that uses postfix decrement notation (health--).
Passed:8. newHealth should equal to 7.
*/

let counter = 10;
console.log(`Counter is currently ${counter}`);

let updatedCounter = ++counter;
console.log(`Counter is now ${updatedCounter}`);

let score = 8;
console.log(`Score is currently ${score}`);

let finalScore = score++;
console.log(`Score is still ${finalScore}`);

let coins = 3;
console.log(`Coins is currently ${coins}`);

let updatedCoins = --coins;
console.log(`Coins is now ${updatedCoins}`);

let health = 7;
console.log(`Health is currently ${health}`);

let newHealth = health--;
console.log(`Health is still ${newHealth}`);
