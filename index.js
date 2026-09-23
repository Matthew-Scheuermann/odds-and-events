// Number Bank App

// containers
let bankArray = [];
let oddsArray = [];
let evensArray = [];

// Take user input for number bank
function addToBank(number) {
  bankArray.push(number);
  //   render();
}

// Sort1 number
function sortOne() {
  const number = bankArray.shift();
  if (number % 2 === 0) {
    evensArray.push(number);
  } else {
    oddsArray.push(number);
  }
  // render();
}

function sortAll() {
  while (bankArray.length > 0) {
    sortOne();
  }
}

// testing
// addToBank(8);
// addToBank(5);
// addToBank(2);
// sortAll();
// console.log(oddsArray, evensArray);
