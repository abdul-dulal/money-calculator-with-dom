function incomeInput() {
  const incomeInput = document.getElementById("income");
  const incomeText = incomeInput.value;
  const incomeTotal = parseFloat(incomeText);
  return incomeTotal;
}

// all expense input value here
function expenseInput(expenseId) {
  const expenseInputField = document.getElementById(expenseId);
  const expenseInputFieldText = expenseInputField.value;
  const expenseInputTotal = parseFloat(expenseInputFieldText);
  return expenseInputTotal;
}
document.getElementById("income").addEventListener("keyup", function (e) {
  const result = e.target.value;
  console.log(result);
});

// Total Expence
function allCostValue() {
  const fooodTotal = expenseInput("food");
  const rentTotal = expenseInput("rent");
  const clothTotal = expenseInput("cloth");
  const totalCost = fooodTotal + rentTotal + clothTotal;
  return totalCost;
}

// total balance calculate
function balanceCalculate() {
  const incomeTotal = incomeInput();
  const totalCost = allCostValue();
  const balance = document.getElementById("balance");
  const balanceTotal = incomeTotal - totalCost;
  balance.innerText = balanceTotal;
  return balanceTotal;
}

document.getElementById("calculate").addEventListener("click", function () {
  const totalCost = allCostValue();
  const incomeTotal = incomeInput();

  // set Total Expense
  if (totalCost > 0 && totalCost < incomeTotal) {
    const totalExpense = document.getElementById("total-expense");
    totalExpense.innerText = totalCost;
    balanceCalculate();
  } else {
    // error message show
    const falid = document.getElementById("error");
    falid.style.display = "block";
  }
});

document.getElementById("save-button").addEventListener("click", function () {
  const incomeTotal = incomeInput();

  if (incomeTotal > 0) {
    const balanceTotal = balanceCalculate();
    // save input
    const saveInput = document.getElementById("save-input");
    const saveInputText = saveInput.value;
    const save = parseFloat(saveInputText);

    //saving amaount
    const savingAmaount = document.getElementById("saving-amaount");
    const savingAmaountTotal = (incomeTotal * save) / 100;
    savingAmaount.innerText = savingAmaountTotal;

    // remaining balance
    const remaining = document.getElementById("remaining");
    remaining.innerText = balanceTotal - savingAmaountTotal;
  } else {
    document.getElementById("save-error").style.display = "block ";
  }
});
