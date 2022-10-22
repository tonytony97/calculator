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

        else if(symbol == '='){
            return result;
        }

};

function removePress(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('pressed');
}

const fillScreen = function(e){

    calcScreen.textContent += e;

};

const fillScreenkey = function(e){

    const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
    key.classList.add('pressed');
    calcScreen.textContent += e.key;

};



let calcScreen = document.querySelector('screen');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>{

    button.addEventListener('click',function(){
        button.classList.add('pressed');
        fillScreen(button.value);

    })
});
  
buttons.forEach(button => button.addEventListener('transitionend', removePress));


window.addEventListener('keydown',fillScreenkey);