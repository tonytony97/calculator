
let calcResult = 0;
let num1 = 0;
let num2 = 0;
let opSymbol = "";
let opCount = 0;
let opLast = "";
let calcArray = "";

const add = function(num1,num2) {
    let result = num1 + num2;
    return result;
};

const subtract = function(num1,num2) {
	let result = num1 - num2;
    return result;
};

const multiply = function(num1,num2) {
    let result = num1*num2
    return result;
};

const divide = function(num1,num2){
    if(num2 == 0){
        alert("You can't divide by 0!!")
        return;
    }
    let result = num1/num2;
    return result;
};

const operator = function(num1,symbol,num2){
    let result = 0;
        if(symbol == '+'){
            result = add(num1,num2);
            return result;
        }

        else if(symbol == '-'){
            result = subtract(num1,num2);
            return result;
        }

        else if(symbol == '*'){
            result = multiply(num1,num2);
            return result;
        }

        else if(symbol == '/'){
            result = divide(num1,num2);
            return result;
        }
        alert('Invalid operation!')
        return;
};



function removePress(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('pressed');
}

function makeMatharray(string){

    if(string.includes("+")){
        opSymbol = "+";
        calcArray = string.split("+")
    }
    else if(string.includes("-")){
        opSymbol = "-";
        calcArray = string.split("-")
    }
    else if(string.includes("*")){
        opSymbol = "*";
        calcArray = string.split("*")
    }
    else if(string.includes("/")){
        opSymbol = "/";
        calcArray = string.split("/")
    }

    num1 = calcArray[0];
    num2 = calcArray[1];
    
    calcResult = operator(Number(num1),opSymbol,Number(num2));

    if(isNaN(calcResult)){
        string = '';
        calcResult= 0;
        alert("Input 2 numbers and an operator!")
        return;
    }

    string = calcResult;

    if(string.toString().includes(".") && string.length >10){
        string = calcResult.toFixed(3);
    }
    
    return string;
}

const fillScreenbtn = function(e){

    if(e == 'del'){

        if(calcScreen.textContent.slice(-1) == '+'|| calcScreen.textContent.slice(-1) == '-'||
         calcScreen.textContent.slice(-1) == '*'||
        calcScreen.textContent.slice(-1) == '/'){
            opCount -= 1;
        }

        calcScreen.textContent = calcScreen.textContent.slice(0,calcScreen.textContent.length-1);
        calcResult = calcScreen.textContent;
        return;

    }

    calcScreen.textContent += e;

    if(e == '+'|| e == '-'|| e == '*' || e == '/'){
        opCount += 1;
    }

    if(e == 'clear'){

        calcResult = 0;
        calcScreen.textContent = ""
        num1 = 0;
        num2 = 0;
        opSymbol = "";
        opCount = 0;

    }

    if(e == '='){
        
        calcScreen.textContent = calcScreen.textContent.slice(0,calcScreen.textContent.length-1);   
        calcScreen.textContent = makeMatharray(calcScreen.textContent)
        opCount = 0;

    }

    if(opCount == 2){
        
        opLast= calcScreen.textContent.slice(-1);
        calcScreen.textContent = calcScreen.textContent.slice(0,calcScreen.textContent.length-1);
        calcScreen.textContent= makeMatharray(calcScreen.textContent);
        calcScreen.textContent += opLast;
        opCount = 1;

    }

};

const fillScreenkey = function(e){
    
    const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if(!key)return;

    key.classList.add('pressed');

    if(e.key == 'Backspace'){
        
        if(calcScreen.textContent.slice(-1) == '+'|| calcScreen.textContent.slice(-1) == '-'||
         calcScreen.textContent.slice(-1) == '*'||
        calcScreen.textContent.slice(-1) == '/'){
            opCount -= 1;
        }

        calcScreen.textContent = calcScreen.textContent.slice(0,calcScreen.textContent.length-1);
        return;
        
    }
    

    calcScreen.textContent += e.key;

    if(e.key == '+'|| e.key == '-'|| e.key == '*' || e.key == '/'){
        opCount += 1;
    }
    
    if(e.key == 'Escape'){

        calcResult = 0;
        calcScreen.textContent = ""
        num1 = 0;
        num2 = 0;
        opSymbol = "";
        opCount = 0;

    }

    else if(e.key == 'Enter'){

        calcScreen.textContent = calcScreen.textContent.slice(0,calcScreen.textContent.length-5);
        calcScreen.textContent = makeMatharray(calcScreen.textContent)
        opCount = 0;

    }
        
    if(opCount == 2){
        
        opLast= calcScreen.textContent.slice(-1);
        calcScreen.textContent = calcScreen.textContent.slice(0,calcScreen.textContent.length-1);
        calcScreen.textContent= makeMatharray(calcScreen.textContent);
        calcScreen.textContent += opLast;
        opCount = 1;

    }

};

let calcScreen = document.querySelector('#screen');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>{

    button.addEventListener('click',function(){
        button.classList.add('pressed');
        fillScreenbtn(button.value);

    });
});
  
buttons.forEach(button => button.addEventListener('transitionend', removePress));
window.addEventListener('keydown',fillScreenkey);