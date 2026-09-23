// Number Bank App

// containers
let bankArray = [];
let oddsArray = [];
let evensArray = [];

// Take user input for number bank
function addToBank(number) {
  bankArray.push(number);
  render();
}

// Sort1 number
function sortOne() {
  const number = bankArray.shift();
  if (number % 2 === 0) {
    evensArray.push(number);
  } else {
    oddsArray.push(number);
  }
  render();
}

function sortAll() {
  while (bankArray.length > 0) {
    sortOne();
  }
}

// UI

// input form
function inputForm() {
  const inputFromUser = document.createElement("form");
  inputFromUser.innerHTML = `
  <input id = "input" type = "number">
  <button id = "addNumber">Add Number</button>
  <button id = "sort1">Sort 1</button>
  <button id = "sortAll">Sort All</button>
  `;
  const inputHolder = inputFromUser.querySelector("#input");
  const addButton = inputFromUser.querySelector("#addNumber");
  addButton.addEventListener("click", () => {
    const enteredNumber = Number(inputHolder.value);
    addToBank(enteredNumber);
  });
  const sortOneButton = inputFromUser.querySelector("#sort1");
  sortOneButton.addEventListener("click", () => {
    sortOne();
  });
  const sortAllButton = inputFromUser.querySelector("#sortAll");
  sortAllButton.addEventListener("click", () => {
    sortAll();
  });

  return inputFromUser;
}

// display
function dataDisplay(label, numbersArray) {
  const container = document.createElement("section");
  const header = document.createElement("h2");
  header.innerText = label;
  container.append(header);
  numbersArray.forEach((number) => {
    const eachNumber = document.createElement("span");
    eachNumber.innerText = number + " ";
    container.append(eachNumber);
  });
  return container;
}

// render
function render() {
  const app = document.querySelector("#app");
  app.innerHTML = `
  <h1>Odds and Events</h1>
  <div id = "formPlaceholder"></div>
  <div id = "bankPlaceholder"></div>
  <div id = "oddsPlaceholder"></div>
  <div id = "evensPlaceholder"></div>
  
  `;
  app.querySelector("#formPlaceholder").replaceWith(inputForm());

  app
    .querySelector("#bankPlaceholder")
    .replaceWith(dataDisplay("Bank", bankArray));

  app
    .querySelector("#oddsPlaceholder")
    .replaceWith(dataDisplay("Odds", oddsArray));

  app
    .querySelector("#evensPlaceholder")
    .replaceWith(dataDisplay("Evens", evensArray));
}

render();

// testing
// addToBank(8);
// addToBank(5);
// addToBank(2);
// sortAll();
// console.log(oddsArray, evensArray);
// console.log(dataDisplay("bank", [8, 6, 7]));
