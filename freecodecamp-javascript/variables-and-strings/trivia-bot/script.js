/* User Stories:

1- You should log "Hello! I'm your coding fun fact guide!" to the console as a greeting message to the user.
2- You should create three variables: botName, botLocation, and favoriteLanguage, that store the bot's name, where it's from, and its favorite coding language, respectively.
3- You should log "My name is (botName) and I live on (botLocation)." to the console.
4- You should log "My favorite programming language is (favoriteLanguage)." to the console.
5- You should use let to create a codingFact variable and assign it a string that is a fun fact about your bot's favorite coding language and include the use of the favoriteLanguage variable.
6- You should log the codingFact to the console.
7- You should reassign the codingFact variable to a new fact about the bot's favorite language using the favoriteLanguage variable again.
8- You should log the codingFact to the console again.
9- You should reassign the codingFact variable again to another new fact about the bot's favorite language using the favoriteLanguage variable.
10- You should log the codingFact to the console a third time.
11- You should log "It was fun sharing these facts with you. Goodbye! - (botName) from (botLocation)." to the console as a farewell statement from the bot. 
-- 
Tests
1. You should log "Hello! I'm your coding fun fact guide!" to the console.
Passed:2. You should declare a botName variable. Double check for any spelling or casing errors.
Passed:3. Your botName variable should be a string.
Passed:4. You should declare a botLocation variable. Double check for any spelling or casing errors.
Passed:5. Your botLocation variable should be a string.
Passed:6. You should declare a favoriteLanguage variable. Double check for any spelling or casing errors.
Passed:7. Your favoriteLanguage variable should be a string.
Passed:8. You should log to the console "My name is (botName) and I live on (botLocation)." and add the variables to the string.
Passed:9. You should log to the console "My favorite programming language is (favoriteLanguage)." and add the variable to the string.
Passed:10. You should use let to declare a new variable codingFact.
Passed:11. You should give codingFact a value that includes favoriteLanguage.
Passed:12. You should log codingFact to the console.
Passed:13. You should assign a new value to codingFact that also contains favoriteLanguage, and log it to the console.
Passed:14. You should assign a value to codingFact for the third time that also contains favoriteLanguage, and log it to the console.
Passed:15. You should log to the console "It was fun sharing these facts with you. Goodbye! - (botName) from (botLocation)." and add the values of the variables.

*/

let greeting = "Hello! I'm your coding fun fact guide!";
console.log(greeting);
let botName = "Busra";
let botLocation = "Turkiye";
let favoriteLanguage = "javaScript";
console.log("My name is " + botName + " and I live on " + botLocation + ".");
console.log("My favorite programming language is " + favoriteLanguage + ".");

let codingFact = favoriteLanguage + " is a language used in many fields.";
console.log(codingFact);

codingFact =
  "Most modern websites use " + favoriteLanguage + " for interactivity.";
console.log(codingFact);

codingFact = favoriteLanguage + " is easy to learn.";
console.log(codingFact);

let final =
  "It was fun sharing these facts with you. Goodbye! - " +
  botName +
  " from " +
  botLocation +
  ".";
console.log(final);
