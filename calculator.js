let display = "";

function updateDisplay(input){
    if (!input){
        display = "";
    }
    else if (input === '-'){
        display = '-' + display;
    }
    else {
        display += input;
    }
    document.getElementById('display').innerHTML = display;
}



const digits = document.querySelectorAll('.digit');
let digitInput = function() {
    updateDisplay(this.value);
};

digits.forEach(digit => {
    digit.addEventListener('click', digitInput, false);
});



const operators = document.querySelectorAll('.operator');
let clearInput = function() {
    updateDisplay();
};
let divide = function() {

}
let multiply = function() {

}
let subtract = function() {

}
let add = function() {

}
let evaluate = function() {

}
let decimal = function() {

}
let changeSign = function() {
    updateDisplay('-');
}
let percentage = function() {

}
operators.forEach(operator => {
    switch (operator.value){
        case 'clear':
            operator.addEventListener('click', clearInput, false);
            break;
        case 'sign':
            operator.addEventListener('click', changeSign, false);
            break;
        case '%':
            operator.addEventListener('click', percentage, false);
            break;
        case '/':
            operator.addEventListener('click', divide, false);
            break;
        case '*':
            operator.addEventListener('click', multiply, false);
            break;
        case '-':
            operator.addEventListener('click', subtract, false);
            break;
        case '+':
            operator.addEventListener('click', add, false);
            break;
        case '=':
            operator.addEventListener('click', evaluate, false);
            break;
        case '.':
            operator.addEventListener('click', decimal, false);
            break;
        default: console.log("Operator error");
    }
});


function operate(num1, num2, operator) {

}