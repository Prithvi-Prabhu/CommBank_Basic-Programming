// ---- Basic Sorting (Ascending Alphabetical) ----
const tropicalFruits = ["Banana", "Orange", "Apple", "Mango"];
tropicalFruits.sort();  // Sorts the array alphabetically
console.log("Alphabetical Order:", tropicalFruits); 
// Output: [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// ---- Reversing an Array ----
const seasonalFruits = ["Banana", "Orange", "Apple", "Mango"];
seasonalFruits.reverse();  // Reverses the original array
console.log("Reversed:", seasonalFruits); 
// Output: [ 'Mango', 'Apple', 'Orange', 'Banana' ]

// ---- Descending Sort using sort + reverse ----
tropicalFruits.reverse();  // Reverses the already sorted array
console.log("Descending Order:", tropicalFruits); 
// Output: [ 'Orange', 'Mango', 'Banana', 'Apple' ]

// ---- Using toSorted() (non-destructive sort) ----
const calendarMonths = ["Jan", "Feb", "Mar", "Apr"];
const sortedMonths = calendarMonths.toSorted();  // Returns a new sorted array without modifying the original
console.log("Sorted Copy:", sortedMonths); 
// Output: [ 'Apr', 'Feb', 'Jan', 'Mar' ]
console.log("Original Months:", calendarMonths); 
// Output: [ 'Jan', 'Feb', 'Mar', 'Apr' ]