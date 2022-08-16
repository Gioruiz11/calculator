// Basic operations
function add(a , b){
    return a + b;
};
function subtract(a, b){
    return a - b;
};
function multiply(a,b){
    return a * b;
};
function divide(a,b){
    if (b == 0){
        return "Error";
    }
    return a / b;
};

function operate(a, char, b) {
    if (char == "*"){
        return +(multiply(a,b)).toFixed(6);
    }
    if (char == "+"){
        return +(add(a,b)).toFixed(6);
    }
    if (char == "-"){
        return +(subtract(a,b)).toFixed(6);
    }
    if (char == "/"){
        return +(divide(a,b)).toFixed(6);
    }
};

// Gather querySelectors to use in code
const screen = document.querySelector(".calc-screen");
const operands = document.querySelectorAll(".operands");
const equals = document.querySelector(".operate");
const operators = document.querySelectorAll(".operators");
const clear = document.querySelector(".clear");
const dot = document.querySelector(".dot");
const deleteLast = document.querySelector(".remove");

let num1;
let num2;
let character;
let numbers;

operands.forEach((button) => {
    screen.textContent = "";
    button.addEventListener("click", (e) => {
        if(screen.textContent == "Error") return;
        screen.textContent += e.target.value;
        storeInput();
})});
operators.forEach((button) => {
    button.addEventListener("click", (e) => {
        let myRegEx = /[^0-9.]/g;
        if (screen.textContent == ""){
            return;
        }
        if(screen.textContent == "Error") return;
        if (myRegEx.test(screen.textContent)) { 
            // checks whether the screen already has an operator
            //and evaluates the inputs before appending the operator
        
            screen.textContent = operate(num1, character, num2);
        }
        screen.textContent += e.target.value;
        storeInput();
})});
equals.addEventListener("click", function(){
    screen.textContent = operate(num1, character, num2);
});

clear.addEventListener("click", ()=> clearData());

dot.addEventListener("click", (e) =>{
    if (num2 == undefined){
        if(screen.textContent.includes(".")) return;
    } else if(num2.toString().includes(".")) {
        return;
    }
    screen.textContent += e.target.value;
});

deleteLast.addEventListener("click", ()=>{
    screen.textContent = screen.textContent.slice(0, -1);
})

function storeInput(){
    numbers = screen.textContent;
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] == "+" || numbers[i] == "-" || numbers[i] == "/" || numbers[i] == "*"){
            character = numbers[i];
            num1 = parseFloat(numbers.slice(0, i));
            num2 = parseFloat(numbers.slice( i + 1, numbers.length));
        }
    }
};

function clearData() {
    screen.textContent = "";
    num1 = undefined;
    num2 = undefined;
    character = undefined;
}