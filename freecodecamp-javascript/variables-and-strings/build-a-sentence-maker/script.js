/* User Stories:

You should declare the following variables using let:

adjective
noun
verb
place
adjective2
noun2
You should assign the above variables some string values of your choice.

You should declare a firstStory variable.

You should use the following story template to create the first story and assign it to the firstStory variable: "Once upon a time, there was a(n) [adjective] [noun] who loved to eat [noun2]. The [noun] lived in a [place] and had [adjective2] nostrils that blew fire when it was [verb].";

You should output your first story to the console using the message "First story: [firstStory]".

You should assign new values to your adjective, noun, verb, place, adjective2, and noun2 variables.

You should declare a secondStory variable.

Create another story using the same template and assign it to the secondStory variable.

You should output your second story to the console using the message "Second story: [secondStory]".
-- 
1. You should declare an adjective variable.
Passed:2. You should declare a noun variable.
Passed:3. You should declare a verb variable.
Passed:4. You should declare a place variable.
Passed:5. You should declare an adjective2 variable.
Passed:6. You should declare a noun2 variable.
Passed:7. You should assign a string value to the adjective variable.
Passed:8. You should assign a string value to the noun variable.
Passed:9. You should assign a string value to the verb variable.
Passed:10. You should assign a string value to the place variable.
Passed:11. You should assign a string value to the adjective2 variable.
Passed:12. You should assign a string value to the noun2 variable.
Passed:13. You should declare a firstStory variable.
Passed:14. You should use the correct story format for the first story: "Once upon a time, there was a(n) [adjective] [noun] who loved to eat [noun2]. The [noun] lived in a [place] and had [adjective2] nostrils that blew fire when it was [verb].". Pay attention to spaces.
Passed:15. You should assemble your first story using the variables you declared in the correct order.
Passed:16. You should log your first story using the message "First story: [firstStory]".
Passed:17. You should declare a secondStory variable.
Passed:18. You should reassign the adjective variable for the second story.
Passed:19. You should reassign the noun variable for the second story.
Passed:20. You should reassign the verb variable for the second story.
Passed:21. You should reassign the place variable for the second story.
Passed:22. You should reassign the adjective2 variable for the second story.
Passed:23. You should reassign the noun2 variable for the second story.
Passed:24. You should use the correct story format for the second story: "Once upon a time, there was a(n) [adjective] [noun] who loved to eat [noun2]. The [noun] lived in a [place] and had [adjective2] nostrils that blew fire when it was [verb].". Pay attention to spaces.
Passed:25. You should assemble your second story using the variables you declared in the correct order.
Passed:26. You should log your second story using the format "Second story: [secondStory]".
Passed:27. The firstStory should not be the same as the secondStory.
*/

let adjective = "giant";

let noun = "dragon";

let noun2 = "marshmallows";

let place = "volcano";

let adjective2 = "smoky";

let verb = "sneezing";

let firstStory =
  "Once upon a time, there was a(n) " +
  adjective +
  " " +
  noun +
  " who loved to eat " +
  noun2 +
  ". The " +
  noun +
  " lived in a " +
  place +
  " and had " +
  adjective2 +
  " nostrils that blew fire when it was " +
  verb +
  ".";
console.log("First story: " + firstStory);

adjective = "frozen";
noun = "mammoth";
noun2 = "blueberries";
place = "giant igloo";
adjective2 = "fuzzy";
verb = "shivering";

let secondStory =
  "Once upon a time, there was a(n) " +
  adjective +
  " " +
  noun +
  " who loved to eat " +
  noun2 +
  ". The " +
  noun +
  " lived in a " +
  place +
  " and had " +
  adjective2 +
  " nostrils that blew fire when it was " +
  verb +
  ".";
console.log("Second story: " + secondStory);
