let scrTop = document.querySelector(".screen-top");
let scrBottom = document.querySelector(".screen-bottom");
let previousOperand = "";
let currentOperand = "";
let operation = "";
let result = "";

let numbers = document.querySelectorAll(".num");
let buttons = document.querySelectorAll(".other");

numbers.forEach((num) => {
  num.addEventListener("click", getOperand);
});
buttons.forEach((btn) => {
  btn.addEventListener("click", calculate);
});

function getOperand(event) {
  //   previousOperand += event.target.innerText;
  //   console.log(previousOperand);
  // scrBottom.textContent += event.target.innerText;
  if (event.target.innerText == "." && scrBottom.textContent.includes(".")) {
    return;
  } else {
    if (event.target.innerText == "0" && scrBottom.textContent[0] == "0") {
      return;
    }

    if (event.target.innerText != "0" && scrBottom.textContent[0] == "0") {
      previousOperand = " ";
      scrBottom.textContent = "";
    }
    scrBottom.textContent += event.target.innerText;
    previousOperand = scrBottom.textContent;
  }
}

function calculate(event) {
  if (
    event.target.innerText == "+" ||
    event.target.innerText == "-" ||
    event.target.innerText == "*" ||
    event.target.innerText == "÷"
  ) {
    if (scrBottom.textContent == "") {
      return;
    }
    operation = event.target.innerText;
    scrTop.textContent = scrBottom.textContent + operation;
    scrBottom.textContent = null;
    return;
    // console.log(previousOperand);
    // previousOperand = "";
  }
  if (event.target.innerText == "=") {
    if (scrBottom.textContent == "" || scrTop.textContent == "") {
      return;
    }
    if (operation == "+") {
      // currentOperand = scrBottom.textContent;
      result =
        parseFloat(scrBottom.textContent) + parseFloat(scrTop.textContent);
      console.log(result);
      scrBottom.textContent = result;
      scrTop.textContent = "";
    } else if (operation == "-") {
      result =
        parseFloat(scrTop.textContent) - parseFloat(scrBottom.textContent);
      console.log(result);
      scrBottom.textContent = result;
      scrTop.textContent = "";
    } else if (operation == "*") {
      result =
        parseFloat(scrTop.textContent) * parseFloat(scrBottom.textContent);
      console.log(result);
      scrBottom.textContent = result;
      scrTop.textContent = "";
    } else if (operation == "÷") {
      result =
        parseFloat(scrTop.textContent) / parseFloat(scrBottom.textContent);
      console.log(result);
      scrBottom.textContent = result;
      scrTop.textContent = "";
    }
  }

  if (event.target.innerText == "AC") {
    scrBottom.textContent = "";
    scrTop.textContent = "";
    previousOperand = "";
  }

  if (event.target.innerText == "Del") {
    scrBottom.textContent = scrBottom.textContent.slice(0, -1);
    previousOperand = previousOperand.slice(0, -1);
  }
}
console.log(previousOperand);
console.log(scrBottom.textContent);
console.log(scrTop.textContent);
