// exercise 30 JS

function operate (a,b, callback) {
  return callback (a,b)
}


function add (a,b) {
  return a + b;
}

function subtract (a,b) {
  return a -b;
}

function multiply (a,b) {
  return a * b;
}

function division (a,b) {
  return a / b;
}

console.log("Addition", operate(20,25,add));

console.log("Subtraction", operate(55,16,subtract));

console.log("Multiplication", operate(40,3,multiply));

console.log("Division", operate(150,5,division));