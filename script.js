const inputs = document.querySelectorAll("input");
const reset = document.querySelector("button");
const amounts = document.querySelectorAll(".d");
const tipPercent = [
  ...document.querySelectorAll(".up div"),
  ...document.querySelectorAll(".down div"),
];

let percentSelected = 0;

const calculate = () => {
  const bill = parseFloat(inputs[0].value);
  const noOfPeople = parseInt(inputs[2].value);
  const percent =
    inputs[1].value != "" ? parseFloat(inputs[1].value) : percentSelected;

  const total = bill / noOfPeople;
  const tip = ((percent / 100) * bill) / noOfPeople;

  amounts[0].textContent = `$${tip.toFixed(2)}`;
  amounts[1].textContent = `$${(tip + total).toFixed(2)}`;
};

const setPercentSelected = () => {
  tipPercent.forEach((percent) => {
    percent.style.background = "hsl(183, 100%, 15%)";
    percent.style.color = "white";
  });
};

tipPercent.forEach((percent) => {
  percent.addEventListener("click", () => {
    setPercentSelected();
    percentSelected = parseInt(percent.textContent.split("%")[0]);
    percent.style.background = "hsl(172, 67%, 45%)";
    percent.style.color = "hsl(183, 100%, 15%)";
    inputs[1].value = "";
  });
});

inputs[1].addEventListener("input", setPercentSelected);

reset.addEventListener("click", () => {
  inputs.forEach((input) => {
    input.value = "";
  });
  tipPercent.forEach((percent) => {
    percent.style.color = "white";
    percent.style.background = "hsl(183, 100%, 15%)";
  });
  amounts.forEach((amount) => {
    amount.textContent = `$0.00`;
  });
});

inputs[2].addEventListener("input", () => {
  if (
    inputs[2].value == "" ||
    inputs[2].value == "0" ||
    inputs[0].value == "" ||
    inputs[0].value == "0"
  ) {
  } else {
    calculate();
  }
});
