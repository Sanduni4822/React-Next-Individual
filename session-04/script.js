// PROMISE example
function promiseExample() {
  let promise = new Promise((resolve, reject) => {
    let success = true;
    success ? resolve("Promise Resolved!") : reject("Promise Rejected!");
  });

  promise
    .then((msg) => console.log(msg))
    .catch((err) => console.error(err));
}

// ASYNC/AWAIT example
async function runAsync() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await res.json();
    console.log("Data:", data);
  } catch (err) {
    console.error("Error:", err);
  }
}

// CALLBACK example
function runCallback() {
  function fetchData(callback) {
    setTimeout(() => {
      let data = { name: "John", age: 30 };
      callback(data);
    }, 1000);
  }

  fetchData((data) => {
    console.log("Callback Data:", data);
  });
}

// EVENT LOOP demo
function runEventLoop() {
  console.log("Start");
  setTimeout(() => {
    console.log("Timeout callback");
  }, 0);
  console.log("End");
}

// WEB STORAGE example
function runStorage() {
  localStorage.setItem("username", "john");
  sessionStorage.setItem("token", "abc123");

  console.log("localStorage:", localStorage.getItem("username"));
  console.log("sessionStorage:", sessionStorage.getItem("token"));

  localStorage.removeItem("username");
  sessionStorage.clear();
}

// MODULE IMPORT/EXPORT demo
import { add, subtract } from "./math.js";
import greet from "./greet.js";

function runModules() {
  console.log(" 5 + 3 =", add(5, 3));
  console.log(" 5 - 3 =", subtract(5, 3));
  console.log(greet("Alice"));
}
