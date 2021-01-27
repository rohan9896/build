var notesArray = [2000, 500, 100, 20, 10, 5, 1];
var notesToBeReturned = [];

var greatestNoteSmallerThanAmount = (amountRecieved, billAmount) => {

    if(amountRecieved < billAmount){
        console.log("Customer needs to give "+(billAmount-amountRecieved)+"more!");
    }
    else if(amountRecieved === billAmount){
        console.log("Customer has given exactly same amount!")
    }
    else{
        let balanceAmount = amountRecieved - billAmount;
        notesArray.forEach((note) => {
            if (balance !== 0) {
                let numberOfNotes = Math.floor(balanceAmount / note);
                balanceAmount = balanceAmount - numberOfNotes * note;
            }
        });
    }
}

greatestNoteSmallerThanAmount(3000, 700);
