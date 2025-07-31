// ------- Basic for loop -------
let digits = [1, 2, 3];

// Traditional index-based loop
for (let i = 0; i < digits.length; i++) {
    console.log(digits[i]);
}

// ------- forEach Method -------
digits.forEach(function (n) {
    console.log("Processing number: " + n);
});

// ------- Using map() to transform elements -------
const originalScores = [45, 4, 9, 16, 25];
const doubledScores = originalScores.map(function(score) {
    return score * 2;
});
console.log(doubledScores);  // [90, 8, 18, 32, 50]

// ------- Using flatMap() to duplicate and multiply -------
const baseArray = [1, 2, 3, 4, 5, 6];
const multipliedArray = baseArray.flatMap(item => [item, item * 10]);
console.log(multipliedArray);  
// [1, 10, 2, 20, 3, 30, 4, 40, 5, 50, 6, 60]

// ------- indexOf to find all occurrences -------
const fruitBasket = ["Apple", "Orange", "Apple", "Mango", "Apple", "Cherry", "Apple"];
let searchTerm = "Apple";
let startFrom = 0;

while (true) {
    let foundAt = fruitBasket.indexOf(searchTerm, startFrom);
    if (foundAt === -1) break; // indexOf returns -1 when not found
    console.log(`'${searchTerm}' found at index: ${foundAt}`);
    startFrom = foundAt + 1;
}