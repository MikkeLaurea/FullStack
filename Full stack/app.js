console.log("Hello, Node.js!");

// app.js
const math = require('./math');
const stringUtils = require('./stringUtils');
const dateUtils = require('./dateUtils');

console.log("Math Operations:");
console.log("5 + 3 =", math.add(5, 3));
console.log("10 - 4 =", math.subtract(10, 4));

console.log("\nString Manipulations:");
console.log("Uppercase:", stringUtils.toUpperCase("hello"));
console.log("Reversed:", stringUtils.reverseString("hello"));

console.log("\nDate Operations:");
console.log("Current Date:", dateUtils.getCurrentDate());
console.log("Formatted Date:", dateUtils.formatDate(new Date()));
