let button = document.getElementsByClassName("numbers");
let result = document.getElementsByClassName("calc-field");
let operator = document.getElementsByClassName("operand");
let specialBtn = document.getElementsByClassName("special-button");
let firstNumber = 0;
let secondNumber = 0;
let operand;
let outputCalc = 0;
let lastclick = null;

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function() {
        if (form1.output.value === '0' || lastclick === operand || lastclick === '=') {
            form1.output.value = button[i].value;
        } else {
            form1.output.value += button[i].value;
        }
        lastclick = button[i].value;
        console.log(lastclick);
    })
};


for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function() {
        firstNumber = form1.output.value;
        console.log(firstNumber);
        operand = operator[i].value;
        console.log(form1.output.value);
        lastclick = operand;
        console.log(lastclick);
})
};

function operandCalculate() {
    if (lastclick !== '='){
        secondNumber = form1.output.value;
        console.log(secondNumber);
    }
    if (lastclick !== operand && operand !== null){
            switch (operand) {
                case '+':
            outputCalc = parseInt(firstNumber) + parseInt(secondNumber);
            console.log(form1.output.value);
            break;

        case '-':
            outputCalc = firstNumber - secondNumber;
            console.log(outputCalc);
            break;

        case 'x':
            outputCalc = firstNumber * secondNumber;
            console.log(form1.output.value);
            break;

        case '÷':
            outputCalc = firstNumber / secondNumber;
            console.log(form1.output.value);
            break;
    }
    form1.output.value = outputCalc;;
    firstNumber = outputCalc;
    console.log(firstNumber);
}}

for (let i = 0; i < specialBtn.length; i++) {
    specialBtn[i].addEventListener('click', function specialAction() {
        if (specialBtn[i].value === 'C') {
            form1.output.value = 0;
            firstNumber = 0;
        } else if (specialBtn[i].value === '←') {
            if (form1.output.value.length > 1) {
                form1.output.value = form1.output.value.substring(0, form1.output.value.length - 1);
            } else {
                form1.output.value = 0;
                firstNumber = 0;
            }
        } else {
            if(firstNumber === null){
                form1.output.value = 0;
            }
            else if (secondNumber === null){
                form1.output.value = firstNumber;
            }
            operandCalculate();
            console.log(form1.output.value);
        }
        lastclick = specialBtn[i].value;
        console.log(lastclick);
    });
}