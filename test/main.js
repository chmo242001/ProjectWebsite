let arr = ["Петя", "Гречка", "Круизный Лайнер"];
let arrOne;
function FunctionTest() {
  arr.splice  (0, 1, "Непетя")
  inputDisplay = document.getElementById("input_1");
  inputDisplay.value = arr;
}
/*
delete arr[2]
arr.splice(1,- номер элемента массива с которого начать 
    2,- сколько элементов удалить)
    let arrOne = arr.splice(1, 1); - вывод удаленных элементов массива
    arr.splice  (0, 1, "Непетя") - замена 
*/
