// const removeFromArray = function(arr,...args) {
//     const outputArr = [];
//     for(let item of arr){
//         if (!args.includes(item)){
//             outputArr.push(item)
//         }
//     }
//     return outputArr;
// };

const removeFromArray = function(arr,...args) {
    const outputArr = arr.filter((item)=> !args.includes(item))
    return outputArr;
};

// Do not edit below this line
module.exports = removeFromArray;


