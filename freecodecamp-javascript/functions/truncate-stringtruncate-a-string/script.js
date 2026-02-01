/*
User Stories:

You should have a function truncateString that accepts two arguments, the first one a string, the second one a number.
If the length of the string is more than the given number, the string should be truncated to reduce the length so that it is equal the given number, and ... should be appended at the end of the truncated string.
If the length of the string is equal to or lower than the given number, the string should be returned unchanged.
*/
/*
Tests
Passed:1. truncateString("A-tisket a-tasket A green and yellow basket", 8) should return the string A-tisket....
Passed:2. truncateString("Peter Piper picked a peck of pickled peppers", 11) should return the string Peter Piper....
Passed:3. truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return the string A-tisket a-tasket A green and yellow basket.
Passed:4. truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return the string A-tisket a-tasket A green and yellow basket.
Passed:5. truncateString("A-", 1) should return the string A....
Passed:6. truncateString("Absolutely Longer", 2) should return the string Ab....
*/
function truncateString(str, num) {
  const value = str.slice(0, num);
  if (str.length > num) {
    return value + "...";
  } else if (str.length <= num) {
    return str;
  }
}
