function calculateChaiIngredients(numberOfCups) {
    const milk = numberOfCups *50;
    const water = numberOfCups *200;
    const teaLeaves = numberOfCups *1;
    const sugar = numberOfCups *2;

    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need`);
    console.log(`milk: ${milk} ml`);
    console.log(`Water: ${water} ml`);
    console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
    console.log(`sugar (Sukari): ${sugar} teaspoons`);
    console.log("\nEnjoy your Chai Bora");

}
const input = prompt("Karibu How many cups of chai Bora would you like to make?");
calculateChaiIngredients(Number(input));