// --- Basic Callback Example ---
function welcome() {
  console.log("Welcome aboard!");
}

function intro(callbackFn) {
  console.log("Initializing...");
  callbackFn(); // Executing the passed-in function
}

intro(welcome);

// --- Asynchronous Callback using setTimeout ---
setTimeout(() => {
  console.log("Executed after a 2-second delay ⏱️");
}, 2000);