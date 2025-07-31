// Define a basic color array
let colorPalette = ["red", "blue", "green"];
console.log(colorPalette[0]); // Output: red

// Using Array constructor to create an array of fruits
const fruitList = new Array("apple", "banana");

// Declare an array of random items
let elements = ["a", "b", "c"];
console.log(elements); // Output: [ 'a', 'b', 'c' ]

// Add an element to the end of the array
elements.push("d");
console.log(elements); // Output: [ 'a', 'b', 'c', 'd' ]

// Remove the last element from the array
elements.pop();
console.log(elements); // Output: [ 'a', 'b', 'c' ]

// Insert an element at the start of the array
elements.unshift("z");
console.log(elements); // Output: [ 'z', 'a', 'b', 'c' ]

// Remove the first element from the array
elements.shift();
console.log(elements); // Output: [ 'a', 'b', 'c' ]

// Replace one element starting from index 1 with "x"
elements.splice(1, 1, "x");
console.log(elements); // Output: [ 'a', 'x', 'c' ]

// Extract a shallow copy from index 0 to 2 (not including 2)
console.log(elements.slice(0, 2)); // Output: [ 'a', 'x' ]

// --- Array from String ---
let alphabet = "ABCDEFG";
let alphabetArray = Array.from(alphabet);
console.log(alphabetArray); // Output: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]

// --- Array Spread Operator ---
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

// Merge both arrays into one using the spread operator
const merged = [...nums1, ...nums2];
console.log(merged); // Output: [1, 2, 3, 4, 5, 6]