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

function operate (num1,operator,num2) {
    if (operator == "+"){
        return add(num1,num2);
    } if (operator == "-"){
        return minus(num1,num2);
    } if (operator == "*"){
        return multiply(num1,num2);
    } if (operator == "/"){
        return divide(num1,num2);
    };
};

// logic for display to function

const body = document.querySelector("body");
const displayText = body.querySelector(".displayText");

const numBtns = document.querySelectorAll('.num');

numBtns.forEach(button => {
  button.addEventListener('click', () => {
    displayText.textContent=button.textContent;
  });
});

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