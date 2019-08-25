function randomIntInc(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low)
}

function sortNumber(a, b) {
  return a - b;
}

function generateAndPrintNthNumber(nthPosition){
  var numArray = new Array(500)

  for (var i = 0; i < numArray.length; i++) {
    numArray[i] = randomIntInc(1, 500)
  }
  numArray.sort(sortNumber);
  console.log(numArray[nthPosition]);
}
// generateAndPrintNthNumber(0);
// generateAndPrintNthNumber(499);
generateAndPrintNthNumber(200);

