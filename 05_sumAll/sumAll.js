const sumAll = function(num1,num2) {
   if (num1 <0 || num2 <0 || 
    !Number.isInteger(num1) || !Number.isInteger(num2)){ 
        return 'ERROR'
    }

    let minNum = 0;
    let maxNum = 0;
    
    num1 > num2? 
    (maxNum = num1, minNum = num2) :
    (maxNum = num2, minNum = num1);

    let outcomeSum = 0;

    for (let i = minNum; i<= maxNum ; i++){
        outcomeSum += i;
    }

    return outcomeSum;

};

// Do not edit below this line
module.exports = sumAll;
