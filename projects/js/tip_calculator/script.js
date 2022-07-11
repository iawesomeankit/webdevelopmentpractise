console.log("hello world");
let billAmount = document.getElementById("bill");
let tipAmount = document.getElementById("tip");
let countPeople = document.getElementById("count-people");
let totalAmount = document.getElementById("total-amount");
let count = 1;
const calculateBill = () => {
  let billAmountValue = Number(billAmount.value);
  let tipAmountValue = Number(tipAmount.value);
  let finalAmount = (billAmountValue + tipAmountValue) / count;
  totalAmount.innerText = finalAmount.toFixed(2);
};

// increase people
const increasePeople = () => {
  count = Number(countPeople.innerText);
  count = count + 1;
  countPeople.innerText = count;
  calculateBill();
};

// decreasePeople
const decreasePeople = () => {
  count = Number(countPeople.innerText);
  count = count - 1;
  if (count < 1) {
    countPeople.innerText = 1;
  } else {
    countPeople.innerText = count;
  }
  calculateBill();
};
