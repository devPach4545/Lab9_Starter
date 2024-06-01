let form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  let output = document.querySelector('output');
  let firstNum = document.querySelector('#first-num').value;
  let secondNum = document.querySelector('#second-num').value;
  let operator = document.querySelector('#operator').value;
  try {
    // Try to evaluate the expression
    let result = eval(`${firstNum} ${operator} ${secondNum}`);
    output.innerHTML = result;
  } catch (error) {
    // Catch any errors that occur during evaluation
    console.log("error happened");
    console.error('ERROR:', error);
  } finally {
    console.log('Evaluation attempt completed.');
  }
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// Start your code here
// You may move this JS to another file if you wish
let tableData = [
  {name:"SWE", num:"110"},
  {name:"Embedded", num:"111"},
  {name:"DevOps", num:"112"}
]

errorBtns[0].addEventListener("click", function(){
  console.log("Console Log Demo");
});

errorBtns[1].addEventListener('click', () => {
  console.error("Console Error Demo");
});

errorBtns[2].addEventListener("click", function(){
  console.count("Count Button: ")
});

errorBtns[3].addEventListener('click', () => {
  console.warn("Console Warn Demo");
});

errorBtns[4].addEventListener("click", function(){
  let a = 69
  let b = 96
  console.assert(a > b, "a is not greater than b", {a,b});
});

errorBtns[5].addEventListener('click', () => {
  console.clear();
});

errorBtns[6].addEventListener("click", function(){
  console.dir(errorBtns[6])
});

errorBtns[7].addEventListener('click', () => {
  console.dirxml(errorBtns[7]);
});

errorBtns[8].addEventListener("click", function(){
  console.group('console.group');
});

errorBtns[9].addEventListener('click', () => {
  console.groupEnd();
});

errorBtns[10].addEventListener("click", function(){
  console.table(tableData);
});

errorBtns[11].addEventListener('click', () => {
  console.time("Timer Button");
});

errorBtns[12].addEventListener("click", () =>{
  console.timeEnd("Timer Button");
});

errorBtns[13].addEventListener('click', function handleBtnClick() {
  function deep() {
    function deeper() {
      function deepest() {
        console.trace();
      }
      deepest();
    }
    deeper()
  }
  deep();
});

class CustomError extends Error {
  constructor(message, code) {
    super(message);
    this.name = 'CustomError';
    this.code = code;
  }
}

errorBtns[14].addEventListener("click", function(){
  console.log("Sadly an error happened bro");
  try {
    throw new CustomError("This is a custom global error!", 123);
  } catch (error) {
    console.error("Error:", error);
    console.error("Error Name:", error.name);
    console.error("Error Message:", error.message);
    console.error("Error Code:", error.code);
  }
});