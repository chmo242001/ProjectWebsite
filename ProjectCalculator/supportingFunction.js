let a;
let b;
let display;

function setValueA() {
  a = document.getElementById("inputDisplayId").value;
  a = Number(a);
}

function setValueB() {
  b = document.getElementById("inputDisplayId").value;
  b = Number(b);
}

function setFocusOnDisplay() {
  document.getElementById("inputDisplayId").focus();
}

function clearDisplay() {
  display = document.getElementById("inputDisplayId");
  display.value = "";
}

