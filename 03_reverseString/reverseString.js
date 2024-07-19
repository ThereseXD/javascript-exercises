const reverseString = function(string) {
    let outputString = '';
    for(let i=1 ; i<= string.length; i++){
        outputString += string[string.length - i ];
    }
    return outputString;
};

// Do not edit below this line
module.exports = reverseString;
