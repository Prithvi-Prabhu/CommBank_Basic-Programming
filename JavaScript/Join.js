// ---- Example: Using join() to convert array into a string ----
const fruitList = ["Banana", "Orange", "Apple", "Mango"];
let fruitString = fruitList.join();  // Default joins using a comma
console.log(typeof fruitString);     // Output: string
console.log("Comma-separated:", fruitString); // Output: Banana,Orange,Apple,Mango

// ---- Example: Using a custom separator in join() ----
const seasonalFruits = ["Banana", "Orange", "Apple", "Mango"];
let sentence = seasonalFruits.join(" and ");  // Joins with 'and' in between
console.log("Custom-separated:", sentence);  // Output: Banana and Orange and Apple and Mango