function addition(a, b) {
  return a + b;
}

function substraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function sinus(b) {
  return Math.sin(b);
}

function cosine(b) {
  return Math.cos(b);
}

function tangent(b) {
  return Math.tan(b);
}

function radix(b) {
  return Math.sqrt(b);
}

function calculate() {
  setValueB();
  clearDisplay();
  switch (operation) {
    case "+":
      result = addition(a, b);
      break;
    case "-":
      result = substraction(a, b);
      break;
    case "*":
      result = multiplication(a, b);
      break;
    case "/":
      result = division(a, b);
      break;
    case "sin":
      result = sinus(b);
      break;
    case "cos":
      result = cosine(b);
      break;
    case "tan":
      result = tangent(b);
      break;
    case "rad":
      result = radix(b);
      break;
  }
  document.getElementById("inputDisplayId").value = result;
  setFocusOnDisplay();
}
