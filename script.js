const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotalDiv = document.getElementById("perPersonTotal");

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateTotal = () => {
  const bill = Number(billInput.value);
  const tipPercent = Number(tipInput.value) / 100;
  const tipAmount = bill * tipPercent;
  const total = tipAmount + bill;
  const perPersonTotal = total / numberOfPeople;
  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`;
};

const increasePeople = () => {
  numberOfPeople += 1;
  numberOfPeopleDiv.innerText = numberOfPeople;
  calculateTotal();
};

const decreasePeople = () => {
  if (numberOfPeople <= 1) {
    return;
  }

  numberOfPeople -= 1;

  numberOfPeopleDiv.innerText = numberOfPeople;

  calculateTotal();
};

function inputReset() {
  billInput.value = "";
  tipInput.value = "";
  numberOfPeopleDiv.innerText = "1";
  perPersonTotalDiv.innerText = "$0.00";
}
