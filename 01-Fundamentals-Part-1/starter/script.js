let markMass, johnMass, markHeight, johnHeight;

markMass = 95;
johnMass = 85;
markHeight = 1.88;
johnHeight = 1.76;


let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

console.log('BMI of Mark is ' + markBMI.toFixed(2));
console.log('BMI of John is ' + johnBMI.toFixed(2));

if (markBMI > johnBMI) {
    console.log(`Mark's BMI - ${markBMI.toFixed(2)} is higher than John's ${johnBMI.toFixed(2)}`);
} else {
    console.log(`John's BMI - ${johnBMI.toFixed(2)} is higher than Marks' ${markBMI.toFixed(2)}`);
}

const minScore = 100;
const avgDolphinScore = (97 + 112 + 101) / 3;
const avgKoalasScore = (109 + 95 + 123) / 3;

let draw = avgDolphinScore == avgKoalasScore;

if (draw && draw >= minScore) {
    console.log('The match is drawn');
} else {
    if (avgDolphinScore >= minScore && avgDolphinScore > avgKoalasScore) {
        console.log(`The Dolphins win with avg score of ${avgDolphinScore}`);
    } else if (avgKoalasScore > avgDolphinScore && avgDolphinScore >= minScore) {
        console.log(`The Koalas win with avg score of ${avgKoalasScore}`);
    } else {
        console.log('No One wins Trophy');
    }
}

let tip;
let bill = 430;

tip = (bill >= 50 && bill <= 300) ? 0.15 * bill : 0.2 * bill;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
