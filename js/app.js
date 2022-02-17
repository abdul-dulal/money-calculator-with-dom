function incomeInput() {
  const incomeInput = document.getElementById("income");
  const incomeText = incomeInput.value;
  const incomeTotal = parseFloat(incomeText);
  return incomeTotal;
}

function expenseInput(expenseId) {
  const foodInput = document.getElementById(expenseId);
  const foodInputText = foodInput.value;
  const fooodTotal = parseFloat(foodInputText);
  return fooodTotal;
}
function allCostValue() {
  const fooodTotal = expenseInput("food");
  const rentTotal = expenseInput("rent");
  const clothTotal = expenseInput("cloth");
  const totalCost = fooodTotal + rentTotal + clothTotal;
  return totalCost;
}
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
  if (totalCost > 0) {
    const totalExpense = document.getElementById("total-expense");
    totalExpense.innerText = totalCost;
    balanceCalculate();
  } else {
    const falid = document.getElementById("notify-falid");
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
  }
});
