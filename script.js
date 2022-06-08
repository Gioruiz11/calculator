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


// to do: evenlistener on every number
// then i add a textcontent of what the eventlistener variable is?
function showUp(){
    const display = document.getElementsByClassName("display")
    const btn = document.querySelector('button[type="digit"]')
    console.log(btn);
    btn.addEventListener("click", () => {
        display.insertAdjacentText("beforeend", "1")
    });

}