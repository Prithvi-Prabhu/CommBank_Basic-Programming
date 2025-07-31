// ---- Using .at() and bracket notation ----
let username = "CodeMaster";
let firstChar = username.at(0);
let firstCharAlt = username[0];
console.log("First character:", firstChar);
console.log("Same using bracket notation:", firstCharAlt);

// ---- Using .concat() to merge strings ----
let firstPart = "front";
let secondPart = "end";
let fullWord = firstPart.concat("-", secondPart);
console.log("Concatenated string:", fullWord);

// ---- Checking string ending with .endsWith() ----
let filename = "report.pdf";
let isPDF = filename.endsWith(".pdf");
console.log("Is a PDF file?", isPDF);

// ---- Finding index using .indexOf() from a specific position ----
let logLine = "User clicked button on page";
let index = logLine.indexOf("button", 10);
console.log("Index of 'button' after position 10:", index);

// ---- Getting string length ----
console.log("Length of string:", username.length);

// ---- Padding string using padEnd() ----
let id = "42";
let paddedID = id.padEnd(6, "0");
console.log("Padded ID:", paddedID);

// ---- Replacing text using regex with replace() ----
let paragraph = "The sky is clear. The sky is vast.";
let updatedParagraph = paragraph.replace(/sky/g, "ocean");
console.log("Updated paragraph:", updatedParagraph);

// ---- Splitting string into an array ----
let taskList = "Write Test Review Submit";
let tasks = taskList.split(" ");
console.log("Tasks array:", tasks);

// ---- Extracting username from email using substr() and indexOf() ----
let email = "dev.chris1999@example.org";
let usernameOnly = email.substr(0, email.indexOf("@"));
console.log("Username extracted:", usernameOnly);