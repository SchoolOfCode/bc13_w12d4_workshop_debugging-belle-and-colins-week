//Plan
// first of all look through the code to get an understanding of what is happening and expected
//Run code to see what functions or areas in the code isn't working 


//removed line 6 which converted numb1 into a string
//rectified the typo on line 0
function add(numb1, numb2) {
  return numb1 + numb2;
}

function multiply(num1, operator, num2) {
 return num1 * num2;
}

function hasPets(hasPet, firstName, lastName) {
  if (hasPet === true) {
    return firstName + " " + lastName + " really does have a nice pet";
  } else {
    return firstName + " " + lastName + " " + "has no pets";
  }
}

let myAccountNumbers = {
  account1: 220,
  account2: 144,
  account3: 12,
  account4: 1443,
};

function addsBalanceOfAccounts() {
  let firstAccount = myAccountNumbers['account2'];
  let secondAccount = myAccountNumbers["account3"];
  return firstAccount + secondAccount;
}

function calculator(firstNumber, operator, secondNumber) {
  if (operator === "+") {
    return firstNumber + secondNumber;
    
  }
  if (operator === "-") {
    return firstNumber - secondNumber;
    
  }
  if (operator === "*") {
    return  firstNumber * secondNumber;
    
  }
  if (operator === "/") {
    return firstNumber / secondNumber;
    
  } else {
    return "Invalid inputs. Try again!";
  }
}

//  Do not change this.
add(2, 5);
multiply(5, "*", 10);
hasPets(true, "henry", "ford");
hasPets(false, "henry", "ford");
calculator(2, "+", 2);
calculator(5, "-", 3);
calculator(3, "*", 4);
calculator(15, "/", 3);
addsBalanceOfAccounts();

module.exports = { add, multiply, hasPets, addsBalanceOfAccounts, calculator };
