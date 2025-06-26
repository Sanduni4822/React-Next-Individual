// This function runs when the button is clicked
function greet() {
  const name = "Student";
  alert(`Hello, ${name}! Welcome to JavaScript.`);

  console.log("Start of function");

  // A small delay using setTimeout
  setTimeout(() => {
    console.log("This runs after other code (asynchronous)");
  }, 0);

  console.log("End of function");

  showVariableTypes();
}

// This function displays different types of variables in JS
function showVariableTypes() {
  let number = 10;
  let text = "Hello";
  let isTrue = true;
  let nothing = null;
  let notDefined;
  let bigNumber = BigInt(12345678901234567890);
  let uniqueSymbol = Symbol("id");
  let person = { name: "Alex" };
  let list = [1, 2, 3];

  const output = `
    <strong>Number:</strong> ${typeof number} <br>
    <strong>Text (String):</strong> ${typeof text} <br>
    <strong>Boolean:</strong> ${typeof isTrue} <br>
    <strong>Null:</strong> ${typeof nothing} (Note: returns "object")<br>
    <strong>Undefined:</strong> ${typeof notDefined} <br>
    <strong>BigInt:</strong> ${typeof bigNumber} <br>
    <strong>Symbol:</strong> ${typeof uniqueSymbol} <br>
    <strong>Object:</strong> ${typeof person} <br>
    <strong>Array:</strong> ${
      Array.isArray(list) ? "array (special object)" : typeof list
    }
  `;

  document.getElementById("variables-output").innerHTML = output;
}
