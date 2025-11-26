# Welcome Screen Project

---

## 🎯 Purpose

This project is a JavaScript Welcome Screen that allows users to enter their name and see a personalized greeting message. Its goal is to create a simple, interactive entry screen that demonstrates how user input can be captured and displayed dynamically on a webpage.

---

## 🛠 Technologies Used

**HTML5 –>** Provides the structure of the welcome screen and input form.

**CSS3 –>** Styles the interface to make the screen visually appealing.

**JavaScript (ES6) –>** Handles user input, generates a personalized greeting, and updates the webpage dynamically.

---

## 📚 What I Learned

1. **There are some differences in defining variables with Var, let, and const;**

- var (ES5) – Has function scope, can be redeclared within the same scope.

- let (ES6) – Has block scope, cannot be redeclared within the same scope.

- const (ES6) – Has block scope, cannot be redeclared, and its value cannot be changed (reassigned).

2. **Arithmetic Operators :**

- Addition: +

- Subtraction: -

- Multiplication: \*

- Exponentiation: \*\*

- Division: /

- Modulus (Remainder): %

- Increment: ++

- Decrement: --

3. **Why Do We Use Increment (++) and Decrement (--) Operators?**

- Increment (++) and decrement (--) operators are special unary operators used to increase or decrease the value of a variable by a single integer unit.

  - A unary operator is an operator that is applied to a single value or variable. This means it only uses one operand to perform an operation.

- They improve code readability: count++ is cleaner than count = count + 1.

- They offer performance benefits in loops because they are often optimized by JavaScript engines.

- They provide flexibility during use thanks to their Prefix/Postfix structures:

  - i++ → uses the value first, then increments it (Postfix)

  - ++i → increments the value first, then uses it (Prefix)

4. **In JavaScript, there are three main methods under the Math object for rounding numbers:**

- Math.floor() – Round Down

  - Rounds the number down to the nearest lower integer.

  > Math.floor(1.9); // → 1
  > Math.floor(5.7); // → 5

- Math.ceil() – Round Up

  - Rounds the number up to the nearest higher integer.
    > Math.ceil(1.9); // → 2
    > Math.ceil(5.1); // → 6

- Math.round() – Round to the Nearest Integer

  - Rounds the number to the closest integer.
    Decimal part is 0.5 and above → rounds up
    Below 0.5 → rounds down
    > Math.round(1.4); // → 1
    > Math.round(1.5); // → 2
    > Math.round(5.7); // → 6

5. **Data Types that Can be Checked with typeof**
   _Knowing the typeof operator and data types ensures that the code runs safely, clearly, and without errors._

- Primitive Data Types:

- number → Numbers

  > `let age = 25;`  
  > `let price = 19.99;`  
  > `console.log(typeof age); // → "number"`

- string → Text values

  > `let name = "Büşra";`  
  > `console.log(typeof name); // → "string"`

- boolean → True or false values

  > `let isActive = true;`  
  > `console.log(typeof isActive); // → "boolean"`

- undefined → Undefined variables

  > `let data;`  
  > `console.log(typeof data); // → "undefined"`

- symbol → Unique and immutable values (ES6+)

  > `let sym = Symbol("id");`  
  > `console.log(typeof sym); // → "symbol"`

- bigint → Arbitrarily large integers (ES2020+)

  > `let big = 123456789012345678901234567890n;`  
  > `console.log(typeof big); // → "bigint"`

- Non-Primitive Data Types:
- object → Objects, arrays, and null (exception)

  > `let user = { name: "Ali", age: 30 };`  
  > `let arr = [1, 2, 3];`  
  > `console.log(typeof user); // → "object"`  
  > `console.log(typeof arr); // → "object"`  
  > `console.log(typeof null); // → "object" (JS exception)`

- function → Functions

  > `function greet() { return "Hello"; }`  
  > `console.log(typeof greet); // → "function"`

6. **Changing Variable Types (Type Coercion)**

- _In JavaScript, variables can sometimes be converted to another data type, either automatically or manually._

  - Automatic Conversion (Implicit Coercion) : JavaScript automatically changes the type in certain operations.

    > `let a = "5";`  
    > `let b = 2;`  
    > `console.log(a + b); // → "52" (string + number → string)`  
    > `console.log(a * b); // → 10 (string * number → number)`

- Manual Conversion (Explicit Coercion)

  - _The developer explicitly changes the variable's type._

    > `let str = "123";`  
    > `let num = Number(str);  // string → number`  
    > `console.log(num);       // → 123`

    > `let text = String(456); // number → string`  
    > `console.log(text);      // → "456"`

- _It is crucial for obtaining correct results in calculations, processing user input with the right type, and preventing errors and unexpected outcomes._

7. **Template Literals & Interpolation**

- Template Literals are an ES6 feature that allows us to write strings in a more readable and flexible way. They are defined using the backtick () character, and variables or expressions can be embedded (interpolation) inside the string using the ${}` syntax.

> `let name = "Büşra";`  
> `let age = 25;`

> `// Traditional string concatenation`  
> `console.log("Merhaba " + name + ", yaşın " + age + "!");`

> `// Template Literal ile`  
> `console.log(\`Merhaba \${name}, yaşın \${age}!\`);`

- Template Literals make the code more readable and cleaner, simplify the process of writing multi-line strings, and allow for variables to be easily embedded (interpolated) into the string using the ${} syntax.

8. **DOM Manipulation (Core Methods)**

- `getElementById(id)` :Selects the HTML element with a specific ID value. Returns a single element.

- `querySelector(selector)` : Selects the first matching element based on CSS selector logic. It is a more flexible and powerful selection method.

- `classList` : Allows you to perform operations on an element's list of classes. Frequently used methods include:

  - `add(className)` → adds a class
  - `remove(className)` → removes a class
  - `toggle(className)` → removes the class if present, otherwise adds it
  - `contains(className)` → checks if the class exists

9. **Using prompt()**

- The prompt() method is an interactive window method that asks a question to the user and allows input to be received from the keyboard. The entered value can be assigned to a variable and used later.
  - First Parameter: The question to be displayed to the user.
  - Second Parameter (Optional): The default value or guide text that appears in the input box.
  - The result of prompt() is returned as a string and can be assigned to a variable.
  - If the user clicks the "OK" button, the input is captured; if they click the "Cancel" button, it returns null.
  - This allows for dynamic operations to be performed on the page using information obtained from the user.

10. **Comparison Operators**

Comparison operators check for equality and difference between variables or values and return either _true_ or _false_.

- `==` : : Returns true if two values are equal; type coercion (type conversion) may occur.
- `===` : Returns true if both the value AND the type are equal (Strict Equality).
- `!=` : Returns true if two values are not equal (allows type coercion).
- `!==` : Returns true if either the value OR the type is not equal (Strict Inequality).
- `<` : Returns true if the left value is less than the right value.
- `<=` : Returns true if the left value is less than or equal to the right value.
- `>` : Returns true if the left value is greater than the right value.
- `>=` : Returns true if the left value is greater than or equal to the right value.

---

11. **Logical Operators**

Logical operators are used to combine multiple conditions, and the result always returns either _true_ or _false_.

- `&&` : AND → Returns true if all conditions are true.
- `||` : OR → Returns true if at least one condition is true.
- `!` : Not → Reverses the boolean value.

12. **Using Conditional Structures (if / else)**

- In JavaScript, if, else if, and else structures are used to check the truthfulness of conditions and execute different blocks of code accordingly.

- _if:_ Runs if the condition is true.
- _else if:_ Used to add an alternative condition if the preceding conditions are not met.
- _else:_ Runs if none of the preceding conditions are met.

- This structure provides a fundamental control mechanism for many scenarios, such as making decisions, comparing values, validation, and performing actions based on user input. For single-line operations, the curly braces ({}) are optional.

13. **Using Multi-Conditional Structure (switch)**

- In JavaScript, in situations involving a large number of conditions, the `if/else if` structure can reduce code readability. In such cases, the switch structure, which provides a more organized approach, is preferred.

- The `switch` structure determines which block of code will run based on the value of a variable.

  - A value or variable is written in the `switch` expression.
  - `case` labels are used for each possible condition (value).
  - `break` is used to stop the flow of execution after a case has finished running.
  - If the value does not match any case, the default block runs.

- Comparisons in the switch structure are made using the === (Strict Equality) logic (checking both value and type); meaning, automatic type coercion (conversion) does not occur.

- This structure is used in scenarios like menu systems, user selections, multi-state control, and any time different operations need to be performed based on a specific value.

14. **Ternary Operator (The Conditional Operator)**

- The Ternary Operator is the only operator in JavaScript that takes 3 operands and offers a shorter syntax compared to the if/else structure.

The ternary structure works in the following order:

1. The Condition is written → `?`
2. The expression to run if the condition is true → `:`
3. The expression to run if the condition is false

General Usage:

- condition ? expression_if_true : expression_if_false
- The values that cause an expression to be considered false in JavaScript are:
  _false, null, NaN, 0, "" (empty string), undefined_
  When one of these values is used in the condition, the result is automatically counted as false (falsy).

- Ternary Operator Chaining

  - The ternary operator can also be used in a chaining method when we want to check multiple conditions. This makes it possible to evaluate different possibilities and return the appropriate result in a single line. This method keeps the code clean and understandable, especially for short checks.

- The Ternary Operator is a shorter and more practical alternative to if/else structures.
- The structure works in the order of condition → true result → false result.
- Multiple conditions can be handled in a single line using chaining.
- The default expression runs in cases where the value is missing or invalid (falsy).

15. **What is a Function? Why Do We Use Them?**

- Functions in JavaScript are reusable blocks of code written to perform a specific task. We define an operation once, and then we can execute the same operation repeatedly just by calling the function's name when needed.

The main reasons we use functions are:

- _Preventing Repetition (DRY - Don't Repeat Yourself):_ Instead of writing the same code multiple times, we can create a function and reuse it.
- _Code Organization:_ In large projects, functions allow the code to be managed in manageable, structured pieces.
- _Readability:_ Function names clearly describe what the code does, improving overall readability.
- _Ease of Maintenance:_ If we want to change a behavior, we only need to modify the code inside the function.
- _Flexibility with Parameters:_ Functions can take different values as input and produce different results.

In short, functions are one of the fundamental building blocks for creating a clean, organized, and efficient code structure in software development.

16. **Adding Parameters (Params) and Return Values to a Function**

- JavaScript functions can receive values from the outside (parameters) and return the result of an operation (return). This makes functions more flexible and reusable.

- _Parameter:_ These are the values sent from the outside into the function. The function can use these values to perform its operation.
  Example: `function add(a, b)` → `a` and `b` are the parameters.

- _Return:_ Used to pass the result of the function's operation back to the outside. When a return statement is used, the function produces a value that can be assigned to variables or used in other operations.
  Example: `return a + b;` → Returns the sum value to the outside.

_Advantages:_

- It allows the function to produce a single value and enables its use in other parts of the code.

- It reduces code repetition and makes functions more flexible.
- The combination of parameters and return makes functions modular and independent.

In short, parameters control the function's input values, while the return controls its output, making functions a powerful tool.

17. **Using the Fat Arrow (=>) Function:**

- Fat Arrow Functions are a syntax introduced in JavaScript with ES6 that makes function writing shorter, more modern, and more readable. They allow us to define functions with less code compared to the traditional function structure.Additionally, because they inherit the this context from their surrounding scope, they behave more consistently, especially in callback structures. For single-line operations, the result can be returned directly without the need for curly braces ({}) and the return keyword. In short, Fat Arrow functions are a method of function definition that is cleaner, faster to write, and frequently preferred in modern JavaScript projects.

18. **Differences in Usage: If/Else, Switch Case, and Functions:**

- _If/Else:_ Used to check small and independent conditions. It determines which code blocks will run when the condition is true or false. It's ideal for simple and short decision structures.

- _Switch Case:_ Used to check a variable against multiple fixed values. In situations with a large number of conditions, it offers a more readable and manageable structure compared to an if/else chain. Non-matching situations can also be easily handled with the default block.

- _Fonksiyon:_ Used to convert repeated operations, calculations, or specific tasks into an independent block. Functions can receive parameters and return a value. They reduce code repetition, increase modularity, and make maintenance easier in large projects.

---

In summary, if/else and switch case are primarily chosen for conditional control, whereas functions are preferred for the reusable and modular implementation of those conditions or operations.

19. **Adding Events and Accessing Their Properties**

- In JavaScript, an event is an action that is triggered by the user or the browser. Examples include a click, typing, mouse movement, or the page loading.

- We define the code we want to run when an event occurs by adding an event listener. This allows the page to respond dynamically to user interaction.

- Every event generates an event object at the moment it occurs. This object contains information about which element the event happened on, what the user did, and controls for the default behaviors.

- In short, using events is the fundamental way to make a web page interactive, dynamic, and responsive to the user.

20. **Working with Event Listeners**

- An Event Listener "listens" for a specific event occurring on an element and triggers a function to run when that event takes place. This structure allows us to control the interactions on the page and create dynamic actions based on user behavior.

- Advantages of Using Event Listeners:

  - It enables us to add multiple events to a single element.

  - It is managed cleanly on the JavaScript side, without mixing into the HTML.

  - It gives us control by activating the moment the event occurs.

  - Added events can be removed when necessary, offering a flexible structure.

- In short, the event listener is the most modern method used to make the behaviors on a web page modular, organized, and manageable.
