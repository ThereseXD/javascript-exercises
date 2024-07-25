const palindromes = function (str) {
    let lowerStr = str.toLowerCase();
    console.log(lowerStr);

    const arr = lowerStr.split('');
    console.log(arr);

    const filteredArr = arr.filter((letter) => {
        let charCode = letter.charCodeAt(0)

        return (charCode >= 48 && charCode <= 57) || (charCode >= 97 && charCode <= 122)
    })

    console.log(filteredArr)

    let compare1 = filteredArr.join('');
    let compare2 = filteredArr.reverse().join('')
    

    return compare1 === compare2


};

palindromes('Animal loots foliated detail of stool lamina.')
palindromes('A car, a man, a maraca.')



// Do not edit below this line
module.exports = palindromes;
