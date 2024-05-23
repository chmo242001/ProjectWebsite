let operation;
let buttonNumpadAction;
let buttonMathAction;
let buttonTriganometryAction;
let inputDisplay;

buttonNumpadAction = document.querySelectorAll("#numpadButtonId .buttonNum");
for (let buttonNumpadValue of buttonNumpadAction) {
  buttonNumpadValue.addEventListener("click", function () {
    inputDisplay = document.getElementById("inputDisplayId");
    inputDisplay.value += buttonNumpadValue.textContent;
    setFocusOnDisplay();
  });
}

buttonMathAction = document.querySelectorAll("#operationButtonId .buttonMathOperation");
for (let buttonMathValue of buttonMathAction) {
  buttonMathValue.addEventListener("click", function () {
    operation = buttonMathValue.textContent;
    setValueA();
    clearDisplay();
    setFocusOnDisplay();
  });
}

buttonTriganometryAction = document.querySelectorAll( "#operationButtonId .buttonTrigonometryOperation");
for (let buttonTriganometryValue of buttonTriganometryAction) {
  buttonTriganometryValue.addEventListener("click", function () {
    operation = buttonTriganometryValue.textContent;
    calculate();
    setFocusOnDisplay();
  });
}
