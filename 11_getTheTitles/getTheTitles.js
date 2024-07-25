const getTheTitles = function(arr) {
  const arrOfTitles = [];
  arr.forEach(book => arrOfTitles.push(book.title));
  return arrOfTitles;
  
};

// Do not edit below this line
module.exports = getTheTitles;
