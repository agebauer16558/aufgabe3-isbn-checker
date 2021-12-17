const caluclateISBNChecksum = (isbn) => {
  // Throw error if length is 0
  if(isbn.length === 0) {
    return new Error("You didn't enter any value!");
  }

  // First nine digits can have any value between 0 and 9
  let sum = 0;
  for (let i = 0; i < isbn.length -1 ; i++) {
    let value = isbn[i] - "0";
    sum += value * (10 - i);
  }

  // ISBN-Calculation - Calculate the first number 10 times, the second 9 times ... and the last digit we multiply with 1.
  let lastValue = isbn[9];
  if (lastValue == "X") {
    sum += 10;
  } 

  return sum; 
}


const checkISBN = (checksum) => {
  if (checksum % 11 == 0) {
    return true;
  } else {
    return false;
  }
}



console.log(checkISBN(caluclateISBNChecksum("007462542X")));

module.exports = { caluclateISBNChecksum, checkISBN};