function incomeInput() {
  const incomeInput = document.getElementById("income");
  const incomeText = incomeInput.value;
  const incomeTotal = parseFloat(incomeText);
  return incomeTotal;
}

function allCostValue() {
  const foodInput = document.getElementById("food");
  const foodInputText = foodInput.value;
  const rentInput = document.getElementById("rent");
  const rentInputText = rentInput.value;
  const clothInput = document.getElementById("cloth");
  const clothInputText = clothInput.value;

  const totalCost =
    parseFloat(foodInputText) +
    parseFloat(rentInputText) +
    parseFloat(clothInputText);
  return totalCost;
}
function balanceCalculate() {
  const incomeTotal = incomeInput();
  const totalCost = allCostValue();
  if (incomeTotal > 0 && totalCost > 0) {
    const balance = document.getElementById("balance");
    const balanceTotal = incomeTotal - totalCost;
    balance.innerText = balanceTotal;
    return balanceTotal;
  }
}

document.getElementById("calculate").addEventListener("click", function () {
  //   const incomeInput = document.getElementById("income");
  //   const incomeText = incomeInput.value;
  //   const incomeTotal = parseFloat(incomeText);
  const incomeTotal = incomeInput();

  //Expense
  //   const foodInput = document.getElementById("food");
  //   const foodInputText = foodInput.value;
  //   const rentInput = document.getElementById("rent");
  //   const rentInputText = rentInput.value;
  //   const clothInput = document.getElementById("cloth");
  //   const clothInputText = clothInput.value;
  //   const totalCost =
  //     parseFloat(foodInputText) +
  //     parseFloat(rentInputText) +
  //     parseFloat(clothInputText);
  const totalCost = allCostValue();
  // set Total Expense
  const totalExpense = document.getElementById("total-expense");
  totalExpense.innerText = totalCost;
  // total balance without Expense
  //   const balance = document.getElementById("balance");
  //   const balanceTotal = incomeTotal - totalCost;
  //   balance.innerText = balanceTotal;
  balanceCalculate();
});

document.getElementById("save-button").addEventListener("click", function () {
  //   const incomeInput = document.getElementById("income");
  //   const incomeText = incomeInput.value;
  //   const incomeTotal = parseFloat(incomeText);

  const incomeTotal = incomeInput();

  const balanceTotal = balanceCalculate();
  //   const balance = document.getElementById("balance");
  //   const balanceTotal = incomeTotal - totalCost;
  //   balance.innerText = balanceTotal;
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
});
