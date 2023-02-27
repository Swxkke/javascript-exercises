const convertToCelsius = function(degreesC) {
  let convertC = ((degreesC - 32) * (5/9));
  let roundedC = convertC.toFixed(1);
  let numberC = Number(roundedC)

  return numberC;
};

const convertToFahrenheit = function(degreesF) {
  let convertF = (degreesF * (9/5) + 32);
  let roundedF = convertF.toFixed(1);
  let numberF = Number(roundedF)

  return numberF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
