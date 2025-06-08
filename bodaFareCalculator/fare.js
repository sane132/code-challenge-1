//function to calculate boda boda fare based on distance
function calculateBodaFare(distanceInKm) {
    const baseFare = 50; //fixed base fare
    const chargePerKm = 15; //fare per kilomita
    const tripFare = distanceInKm * chargePerKm; //Total fare on distance covered
    const totalFare = baseFare + tripFare; // Total amount payable
//Show fare breakdown
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${tripFare}`);
    console.log(`Total: KES ${totalFare}`);
    console.log(`\nPanda Pikipiki!`);
}

// Prompt user for distance input
const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distance = (Number(input));
//validate the input
if (isNaN(distance) || distance <= 0) {
    console.log("Tafadhali weka nambari halali ya kilomita.");
} else {
    calculateBodaFare(distance);
}
