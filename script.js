// functions for basic math //

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return (a / b);
}

let num1;
let operator;
let num2;
let result;

function operate (num1,operator,num2) {
    if (operator == "+"){
        return add(Number(num1),Number(num2));
    } if (operator == "-"){
        return subtract(Number(num1),Number(num2));
    } if (operator == "x"){
        return multiply(Number(num1),Number(num2));
    } if (operator == "/"){
        return divide(Number(num1),Number(num2));
    };
};

// logic for display to function and assign num1 and num2

const body = document.querySelector("body");
const displayText = body.querySelector(".displayText");

const numBtns = document.querySelectorAll('.num');

numBtns.forEach(button => {
  button.addEventListener('click', () => {
    displayText.textContent=button.textContent;
    if (num1 === undefined) {
        num1 = button.textContent;
    } else {
        num2 = button.textContent;
    };
  });
});

// logic for operator buttons to assign to operator variable

const operatorBtns = document.querySelectorAll(".operator");

operatorBtns.forEach(button => {
    button.addEventListener("click", () => {
        operator = button.textContent;
        console.log(operator);

        
    });
});

   
//clear button - click clears the display and num1,operator,and num2 
const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener("click", ()=> {
    displayText.textContent="";
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
})

//logic for buttons to appear lighter when hoved over
const allBtns = document.querySelectorAll('button');
allBtns.forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.opacity="0.9";
    });
  });
  allBtns.forEach(button => {
    button.addEventListener("mouseout", () => {
        button.style.opacity="1";
    });
});

// logic to make calculator work - equal button logic

const equalsBtn = document.querySelector(".equals");
equalsBtn.addEventListener("click", ()=> {
    displayText.textContent = operate (num1,operator,num2);
    num1 = operate (num1,operator,num2);
    operator = undefined;
    num2 = undefined;
});