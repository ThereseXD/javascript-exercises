const fibonacci = function(num) {
    const fibonacciArr = [0,1];
    let index = parseInt(num)
    if (index<0){
        return 'OOPS'
    } else if (fibonacciArr[index] === undefined){
        for(let i=2; i <= index ; i++){
            fibonacciArr[i] = fibonacciArr[i-1]+fibonacciArr[i-2];
        }
    } 
    
    return fibonacciArr[index];
};

console.log(fibonacci('1'))


// Do not edit below this line
module.exports = fibonacci;
