function fetchUserData() {
  return new Promise((resolve, reject) => {
    const dataAvailable = true;

    if (dataAvailable) {
      resolve({ name: "John Doe", age: 28 });
    } else {
      reject("User data not found.");
    }
  });
}

fetchUserData()
  .then((user) => {
    console.log("User Profile:", user);
  })
  .catch((err) => {
    console.log("Fetch Error:", err);
  });