// 1. var, let, const
function testVarLetConst() {
  var a = 10;
  let b = 20;
  const c = 30;

  console.log("var a:", a);
  console.log("let b:", b);
  console.log("const c:", c);
}

// 2. Hoisting
function testHoisting() {
  console.log("Before declaration:", hoistedVar); // undefined
  var hoistedVar = "I was hoisted";
  console.log("After declaration:", hoistedVar);

  // let and const are not hoisted the same way
  try {
    console.log(notHoistedLet);
    let notHoistedLet = 100;
  } catch (e) {
    console.log("Error with let hoisting:", e.message);
  }
}

// 3. Block Scope
function testBlockScope() {
  {
    let x = 5;
    const y = 10;
    console.log("Inside block:", x, y);
  }

  try {
    console.log("Outside block x:", x);
  } catch (e) {
    console.log("x is not accessible outside block.");
  }
}

// 4. Variable Types
function showVariableTypes() {
  let number = 25;
  let float = 3.14;
  let string = "Hello";
  let isTrue = true;
  let empty = null;
  let notAssigned;
  let big = 123456789012345678901234567890n;
  let symbol = Symbol("id");

  let object = { name: "John", age: 30 };
  let array = [1, 2, 3];
  function greet(name) {
    return `Hi, ${name}`;
  }

  console.log("number:", typeof number);
  console.log("float:", typeof float);
  console.log("string:", typeof string);
  console.log("boolean:", typeof isTrue);
  console.log("null:", typeof empty); // object (quirk)
  console.log("undefined:", typeof notAssigned);
  console.log("bigint:", typeof big);
  console.log("symbol:", typeof symbol);

  console.log("object:", typeof object);
  console.log("array:", Array.isArray(array) ? "array" : typeof array);
  console.log("function:", typeof greet);
}
