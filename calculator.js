let display = "0";
let val1 = NaN;
let val2 = NaN;
let lengthLimit = 9;
let operation = '';

function resetVals(){
    val1 = NaN;
    val2 = NaN;
    operation = '';
}

function updateDisplay(input){
    if (display.indexOf('-') != -1){
        lengthLimit = 10;
    }
    else {
        lengthLimit = 9;
    }
    //clear display
    if (!input){
        display = "0";
    }

    //handle negative
    else if (input === '-'){
        display = '-' + display;
    }
    else if (input === 'e'){
        display = display.slice(1);
    }

    //max length of display
    else if (display.length >= lengthLimit){
        return;
    }

    else if (input === '.'){
        if (display.indexOf('.') === -1){
            if (display[0] === '0'){
                display = display + '.';
                document.getElementById('display').innerText = display;
                return;
            }
            else if (display[0] === '-' && display[1] === '0'){
                display = '-0.';
                document.getElementById('display').innerText = display;
                return;
            }   
            else {
                display += '.';
                document.getElementById('display').innerText = display;
            }
        }
        return;
    }

    //proper dislay if first digit is 0 when called
    else if (display[0] === '0' && (display[1] != '.' && display[2] != '.')){
        display = input;
    }

    //remove leading 0 when display is negative
    else if (display[0] === '-' && display[1] === '0' && display[2] != '.'){
        display += input;
        display = display.slice(2);
        updateDisplay('-');
    }

    else if (display[0] === '0' || display[1] === '.'){
        display += input;
    }

    else {
        display += input;
    }
    document.getElementById('display').innerText = display;
}



const digits = document.querySelectorAll('.digit');
let digitInput = function() {
    updateDisplay(this.value);
};

digits.forEach(digit => {
    digit.addEventListener('click', digitInput, false);
});

function additionOperation(num1, num2){
    let sum = num1 + num2;
    return sum.toString();
}

function substractionOperation(num1, num2){
    let diff = num1 - num2;
    return diff.toString();
}

function multiplicationOperation(num1, num2){
    let prod = num1 * num2;
    return prod.toString();
}

function exponentOperation(num1, num2){
    let exp = Math.pow(num1, num2);
    return exp.toString();
}

function divisionOperation(num1, num2){
    if (num2 === 0){
        return 'divide by 0';
    }
    let quotient = num1 / num2;
    return quotient.toString();
}

const operators = document.querySelectorAll('.operator');
let clearInput = function() {
    updateDisplay();
};
let divide = function() {
    val1 = parseFloat(display);
    operation = '/';
    updateDisplay();
}
let multiply = function() {
    val1 = parseFloat(display);
    operation = '*';
    updateDisplay();
}
let subtract = function() {
    val1 = parseFloat(display);
    operation = '-';
    updateDisplay();
}
let add = function() {
    val1 = parseFloat(display);
    operation = '+';
    updateDisplay();
}
let evaluate = function() {
    let returnVal = 'error';
    console.log(val1);
    val2 = parseFloat(display);
    console.log(val2);
    console.log(operation);

    switch (operation){
        case '+':
            returnVal = additionOperation(val1, val2);
            break;
        case '-':
            returnVal = substractionOperation(val1, val2);
            break;
        case '*':
            returnVal = multiplicationOperation(val1, val2);
            break;
        case '^':
            returnVal = exponentOperation(val1, val2);
            break;
        case '/':
            returnVal = divisionOperation(val1,val2);
            break;
        default:
            returnVal = 'default case reached'
    }
    display = returnVal;
    document.getElementById('display').innerText = returnVal;

}
let decimal = function() {
    updateDisplay('.');
}
let changeSign = function() {
    if (display[0] != '-'){
        updateDisplay('-');
    }
    else {
        updateDisplay('e');
    }
}
let exponent = function() {
    val1 = parseFloat(display);
    operation = '^';
    updateDisplay();
}
operators.forEach(operator => {
    switch (operator.value){
        case 'clear':
            operator.addEventListener('click', clearInput, false);
            break;
        case 'sign':
            operator.addEventListener('click', changeSign, false);
            break;
        case '^':
            operator.addEventListener('click', exponent, false);
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