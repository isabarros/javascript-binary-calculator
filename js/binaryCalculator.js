function setValue(value) {
  const previousValue = document.getElementById("res").innerHTML;
  document.getElementById("res").innerHTML = previousValue + value;
}

function clearScreen() {
  document.getElementById("res").innerHTML = "";
}

function calculateResult() {
  const operationString = document.getElementById("res").innerHTML;
  const binaryNumbersRegex = /[01]+/g;
  const operatorRegex = /[\+\-\*\/]/;
  const operands = operationString.match(binaryNumbersRegex);
  const operator = operationString.match(operatorRegex);
  
  if (operands.length >= 2 && operator.length >=1) {
    let result = 0;
    const op1 = +("0b" + operands[0]);
    const op2 = +("0b" + operands[1]);
    switch (operator[0]) {
      case '+':
        result = op1 + op2;
        break;
      case '-':
        result = op1 - op2;
        break;
      case '*':
        result = op1 * op2;
        break;
      case '/':
        result = op1 / op2;
        break;
    }

    document.getElementById("res").innerHTML = result.toString(2);
  }
}