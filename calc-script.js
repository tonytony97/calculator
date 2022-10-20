const add = function(num1,num2) {
	let result = num1 + num2;
  return result;
};

const subtract = function(num1,num2) {
	let result = num1 - num2;
  return result;
};

const multiply = function(nums) {
    let result = 1;
    for(let i=0;i<nums.length;i++){
  
      result*=nums[i]
  
    }
  
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