const checkISBN = (isbn) => {
  // ISBN-Input-Array should have a length of 10 maximum
  let isbnInput = isbn.length;
  if (isbnInput != 10) {
    return false;
  }

  // First nine digits can have any value between 0 and 9
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    let value = isbn[i] - "0";

    if (value < 0 || value > 9) {
      return false;
    }

    sum += value * (10 - i);
  }

  // If last digit equals X it should represent '10'
  let lastValue = isbn[9];

  if (lastValue != "X" && (lastValue < 0 || lastValue > 9)) {
    return false;
  }

  // ISBN-Calculation - Calculate the first number 10 times, the second 9 times ... and the last digit we multiply with 1.
  if (lastValue == "X") {
    sum += 10;
  } else {
    lastValue - "0";
  }

  if (sum % 11 == 0) {
    return true;
  }
};
