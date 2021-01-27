var billAmount = document.getElementById("bill-amount");
var amountReceived = document.getElementById("amount-received");
var btn = document.getElementById("cal-btn");
var message = document.getElementById("message");

var notesArray = [2000, 500, 100, 20, 10, 5, 1];
var notesFreqMap = new Map();

var calculate = (balance, notesArray) => {
  for (let i = 0; i < notesArray.length; i++) {
    let freqOfThisNote = Math.floor(balance / notesArray[i]);
    notesFreqMap.set(notesArray[i], freqOfThisNote);
    balance -= notesArray[i] * freqOfThisNote;

    if (balance == 0) break;
  }
};

var billAmountVal = billAmount.value;
var amountReceivedVal = amountReceived.value;

var clickHandler = () => {
  var balance = amountReceived - billAmountVal;

  if (balance === 0) {
    message.innerText = "The customer has given exact amount!!";
  } else if (balance < 0) {
    message.innerText =
      "User has given " + -1 * balance + " less than bill amount!";
  } else {
    calculate(balance, notesArray);
    var messageString = "";
    for (let entry of notesFreqMap) {
      if (entry[1] > 0) {
        console.log(entry[0]+": "+entry[1]);
        messageString.append(entry[0] + ": " + entry[1]);
      }
    }
    // message.innerText = messageString;
  }
};

btn.addEventListener("click", clickHandler);
