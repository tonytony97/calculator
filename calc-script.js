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
  }

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

        else if(symbol == '='){
            return result;
        }

}

const fillScreen = function(e){

    /*const numBtn = document.querySelector(`button[id="${e.numCode}"]`)*/
    calcScreen.textContent += e;

}

let calcScreen = document.querySelector('screen');
const numBtns = document.querySelectorAll('button');
numBtns.forEach((button) =>{
    button.addEventListener('click',function(){

        fillScreen(button.value);
    })
});

window.addEventListener('keypress',function(){


});