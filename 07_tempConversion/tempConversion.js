const convertToCelsius = function(tempInFah) {
   let tempInCel = (tempInFah - 32) / (9/5);
   tempInCel = Math.round(tempInCel*10)/10;
   return tempInCel;
};

const convertToFahrenheit = function(tempInCel) {
  let tempInFah = tempInCel * (9/5) + 32;
  tempInFah = Math.round(tempInFah*10)/10
  return tempInFah;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
