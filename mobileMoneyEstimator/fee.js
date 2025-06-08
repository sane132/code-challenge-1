//function to estimate mobile money transaction fee
function estimateTransactionFee(amountToSend) {
   //calculate 1.5% of the amount to send
    let fee = amountToSend * 0.015;
   //fee range between KES(10-70)
    if (fee < 10) {
        fee = 10;
    } else if (fee > 70) {
        fee = 70;
    }
//calculate total amount to be debited
    const total = amountToSend + fee;
// Show the output
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${total}`);
    console.log("\nSend Money Securely!");
}
//prompt user to put amount to send
const input = prompt("Unatuma Ngapi? (KES):");
const amount = (Number(input));
//validate input
if (isNaN(amount) || amount <= 0) {
    console.log("Tafadhali weka kiasi halali.");
} else {
    estimateTransactionFee(amount);
}
