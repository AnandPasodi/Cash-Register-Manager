// const billAmount = document.getElementById("bill-amount");
// const cashGiven = document.getElementById("cash-given");
// const checkButton = document.getElementById("check_button");
// const message = document.getElementById("error-message");
// const noOfNotes = document.querySelectorAll(".no-of-notes");
// const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1];
// checkButton.addEventListener("click", validateBillAndCashAmount);

// function validateBillAndCashAmount() {
//   hideMessage();
//   if (billAmount.value > 0) {
//     if (cashGiven.value >= billAmount.value) {
//       const amountToBeReturned = cashGiven.value - billAmount.value;
//       calculateTheChange(amountToBeReturned);
//     } else {
//       showMessage("The cash provided should atleast be equal to bill amount");
//     }
//   } else {
//     showMessage("Invalid Bill Amount");
//   }
// }

// function calculateTheChange(amountToBeReturned) {
//   for (var i = 0; i < availableNotes.length; i++) {
//     const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
//     amountToBeReturned = amountToBeReturned % availableNotes[i];
//     noOfNotes[i].innerText = numberOfNotes;
//   }
// }

// function hideMessage() {
//   message.style.display = "none";
// }
// function showErrorMessage(msg) {
//   message.style.display = "block";
//   message.innerText = msg;
// }

const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check_button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCheckAmount() {
  hideMessage();
  if (billAmount.value > 0) {
    if (Number(cashGiven.value) >= Number(billAmount.value)) {
      const returnAmount = cashGiven.value - billAmount.value;
      calculateChange(returnAmount);
    } else {
      showErrorMessage("Cash Given Should Be Greater Than Bill Amount");
      showColorRed();
    }
  } else {
    showErrorMessage("Invalid Bill Amount");
    showColorRed();
  }
});

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned = amountToBeReturned % availableNotes[i];
    noOfNotes[i].innerText = numOfNotes;
  }
}

function showErrorMessage(msg) {
  message.innerText = msg;
  message.style.display = "block";
}

function hideMessage() {
  message.style.display = "none";
}
function showColorRed() {
  message.style.color = "red";
}
