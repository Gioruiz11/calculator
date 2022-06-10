function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(a, operator, b){
switch(operator){
    case "+":
        return add(a,b);
    case "-":
        return subtract(a,b);
    case "*":
        return multiply(a,b);
    case "/":
        return divide(a,b);
}
}

// used to store inputs in calculator
let values = [];

// prints clicked button onto display screen
function showUp(clickedElement){
    const display = document.getElementsByClassName("display");
    display[0].textContent += clickedElement.textContent;

}

// clears display screen and pushes first input into values array
// also stores chosen operator into array
function operator(clickedElement){
    const display = document.getElementsByClassName("display")
    values.push(parseInt(display[0].textContent));

    // when this is called for a second time, evaluate
    // the 3 values, then save the result as the first value
    // in the next expression
    if(values.length === 3){
        let result = operate(values[0], values[1], values[2]);
        values = [];
        values.push(result);
        console.log("hello");
    }

    values.push(clickedElement.textContent);
    display[0].textContent = "";
    console.log(values);
}

// operates on the two numbers being input, saves the result,
// and shows the result on the screen
function equals(){
    const display = document.getElementsByClassName("display");

    values.push(parseInt(display[0].textContent));
    console.log(operate(values[0], values[1], values[2]));
    let result = operate(values[0], values[1], values[2]);

    // in order to round long decimals to 6 places
    let roundedResult = Math.round((result + Number.EPSILON) * 1000000) / 1000000;

    display[0].textContent = "";
    display[0].textContent += roundedResult;

}

// clears the memory and the screen
function clears(){
    values = [];
    const display = document.getElementsByClassName("display");
    display[0].textContent = "";
}