//Function to calculate chai ingredients based on number of cups required
function calculateChaiIngredients(numberOfCups) {
   //calculate quantities
    const milk = numberOfCups *50; //50ml of milk per cup
    const water = numberOfCups *200; //200ml of water per cup
    const teaLeaves = numberOfCups *1; //1 tablespoon tea leaves per cup
    const sugar = numberOfCups *2; // 2 teaspoons sugar per cup
// display the breakdown of ingredients
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need`);
    console.log(`milk: ${milk} ml`);
    console.log(`Water: ${water} ml`);
    console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
    console.log(`sugar (Sukari): ${sugar} teaspoons`);
    console.log("\nEnjoy your Chai Bora");

}
//promt user to enter number of cups
const input = prompt("Karibu How many cups of chai Bora would you like to make?");
calculateChaiIngredients(Number(input));