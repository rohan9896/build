var notesArray = [2000, 500, 100, 20, 10, 5, 1];

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
        });
    }
}

greatestNoteSmallerThanAmount(500, 200);
