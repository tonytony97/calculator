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

        else if(symbol == '*' || symbol.toLowerCase() == 'x'){
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


const fillScreenbtn = function(e){
    
    if(e == 'del'){
        calcScreen.textContent = calcScreen.textContent.slice(0,calcScreen.textContent.length-1);
        return;
    }

    calcScreen.textContent += e;
    
    if(e == 'clear'){

        calcResult = 0;
        calcScreen.textContent = ""

    }

    else if(e == '='){
        calcScreen.textContent = calcScreen.textContent.slice(0,calcScreen.textContent.length-1);
        
        let calcArray;

        if(calcScreen.textContent.includes("+")){
            opSymbol = "+";
            calcArray = calcScreen.textContent.split("+")
        }
        else if(calcScreen.textContent.includes("-")){
            opSymbol = "-";
            calcArray = calcScreen.textContent.split("-")
        }
        else if(calcScreen.textContent.includes("*")){
            opSymbol = "*";
            calcArray = calcScreen.textContent.split("*")
        }
        else if(calcScreen.textContent.includes("/")){
            opSymbol = "/";
            calcArray = calcScreen.textContent.split("/")
        }

        num1 = calcArray[0];
        num2 = calcArray[1];
        
        calcResult = operator(Number(num1),opSymbol,Number(num2));
        calcScreen.textContent = calcResult;
        console.log(num1);
        console.log(opSymbol);
        console.log(num2);

    }

};

const fillScreenkey = function(e){

    const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if(!key)return;

    key.classList.add('pressed');

    if(e.key == 'Backspace'){
        calcScreen.textContent = calcScreen.textContent.slice(0,calcScreen.textContent.length-1);
        return;
    }
    calcScreen.textContent += e.key;
    
    if(e.key == 'Escape'){

        calcResult = 0;
        calcScreen.textContent = ""

    }

    else if(e.key == 'Enter'){


        calcResult = operator(num1,symbol,num2);
        calcScreen.textContent = calcResult;

    }

};

let calcScreen = document.querySelector('#screen');
let calcResult = 0;
let num1 = 0;
let num2 = 0;
let opSymbol = "";

const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>{

    button.addEventListener('click',function(){
        button.classList.add('pressed');
        fillScreenbtn(button.value);

    });
});
  
buttons.forEach(button => button.addEventListener('transitionend', removePress));

window.addEventListener('keydown',fillScreenkey);