'use strict';

// // Function declarations
// function calcAge(birthYear) {
//     return 2022 - birthYear;
// }

// const age = calcAge(1997);
// console.log(age);

// const calcAge1 = function (birthYear) {
//     return 2022 - birthYear;
// }

// console.log(calcAge1(1997));

// Arrow functions

// const age = birthYear => 2022 - birthYear;
// console.log(age(1997));

// const yearsUntilRetirement = (birthYear, firstName) => {
//     let age1 = 2022 - birthYear;
//     let retirement = 65 - age1;
//     return `Retirement of ${firstName} is in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1997, 'Gokul'));

// const calcAverage = average => average / 3;

// const avgDolphins = calcAverage(85 + 54 + 41);
// const avgKoalas = calcAverage(23 + 34 + 27);

// console.log(avgDolphins);
// console.log(avgKoalas);

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins === avgKoalas) {
//         console.log(`The match is draw with Dolphins and Koalas scoring average ${avgDolphins}`);
//     } else {
//         if (avgDolphins >= avgKoalas * 2) {
//             console.log(`The winner is Dolphins ${avgDolphins} vs ${avgKoalas}`);
//         } else if (avgKoalas >= avgDolphins) {
//             console.log(`The winner is Koalas ${avgKoalas} vs ${avgDolphins}`);
//         } else {
//             console.log(`No team wins`);
//         }
//     }
// }

// checkWinner(avgDolphins, avgKoalas);


// const bills = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86);
// let tips = new Array();
// let total = new Array();

// const calcTip = bill => (bill >= 50 && bill <= 300) ? 0.15 * bill : 0.2 * bill;

// for (let i = 0; i < bills.length; i++) {
//     let tip = calcTip(bills[i]);
//     tips.push(tip);
//     total.push(tip + bills[i]);
// }

// console.log(`The tips [${tips}] are given for bills [${bills}] and the total values are [${total}] correspondingly`);

// let sum = 0;
// function calcAverage(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum / arr.length;
// }

// let avg = calcAverage(total);
// console.log(`average is ${avg.toFixed(0)}`)


// const gokul = {
//     firstName: 'Gokul',
//     lastName: 'Raj',
//     birthYear: 1997,
//     job: 'Software Test Engineer',
//     friends: ['Akhil', 'Pruthvi', 'Rohit'],
//     hasDrivingLicense: true,

//     calcAge: function () {
//         this.age = 2022 - this.birthYear;
//         return this.age;
//     }
// };


// console.log(`${gokul.firstName} has ${gokul.friends.length} friends and his best friend is ${gokul.friends[0]}`);

// gokul.calcAge();

// console.log(`${gokul.firstName} is a ${gokul.age} year old ${gokul.job}, and ${gokul.hasDrivingLicense ? 'has a driving license' : 'does not have a driving license'}`);

// const mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     weight: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.BMI = this.weight / this.height ** 2;
//     }
// }

// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     weight: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.BMI = this.weight / this.height ** 2;
//     }
// }

// mark.calcBMI();
// john.calcBMI();

// if (mark.BMI === john.BMI) {
//     console.log(`Both ${mark.firstName} and ${mark.firstName} have same BMI - ${mark.BMI}`);
// } else if (mark.BMI > john.BMI) {
//     console.log(`${mark.firstName}'s BMI (${mark.BMI.toFixed(2)}) is higher than ${john.firstName}'s (${john.BMI.toFixed(2)})!`)
// } else {
//     console.log(`${john.firstName}'s BMI (${john.BMI.toFixed(2)}) is higher than ${mark.firstName}'s (${mark.BMI.toFixed(2)})!`)
// }

