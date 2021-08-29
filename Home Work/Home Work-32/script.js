let btnPlus = document.getElementById('btn-plus');
let btnMinus = document.getElementById('btn-minus');
let btnMultiply = document.getElementById('btn-multiply');
let btnDivision = document.getElementById('btn-devision');
let result = document.getElementById('result');
let out;

function checkNum(operationChild){
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;

    switch(operationChild){
        case '+': out = Number(number1) + Number(number2);
            break;
        case '-': out = Number(number1) - Number(number2);
            break;
        case '*': out = Number(number1) * Number(number2);
            break;
        case '/': out = Number(number1) / Number(number2);
            break;
        default: out = 'Такого значення немає';
    }
    console.log(out);
    result.innerHTML = out;
}

function clickOnPlus(){
    checkNum('+')
}
function clickOnMinus(){
    checkNum('-')
}
function clickOnMultiply(){
    checkNum('*')
}
function clickOnDivision(){
    checkNum('/')
}

btnPlus.addEventListener('click', clickOnPlus);
btnMinus.addEventListener('click', clickOnMinus);
btnMultiply.addEventListener('click', clickOnMultiply);
btnDivision.addEventListener ('click', clickOnDivision);






