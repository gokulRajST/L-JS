'use strict';

//primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//Reference types
const monica = {
  firstName: 'Monica',
  lastName: 'Williams',
  age: 27,
};

const marriedMonica = monica;
marriedMonica.lastName = 'Bing';
console.log('Before marriage: ', monica);
console.log('After marriage: ', marriedMonica);

// marriedMonica = {};

//Copying objects
const monica2 = {
  firstName: 'Monica',
  lastName: 'Williams',
  age: 27,
};

const monicaCopy = Object.assign({}, monica2);
monicaCopy.lastName = 'Tribbiani';

console.log('Monica last name before copying: ', monica2);
console.log('Monica last name after copying: ', monicaCopy);
