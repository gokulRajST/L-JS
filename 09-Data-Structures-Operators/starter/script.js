'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Udupi Upahara',
  location: '5th cross Vijayanagar Bengaluru, Karnataka, India',
  categories: ['North', 'South', 'Vegetarian', 'Snacks'],
  starterMenu: ['Goli Bajji', 'Buns', 'Uddina vade', 'Kesari Bath'],
  mainMenu: ['Masala Dose', 'Palav', 'Veg Biryani'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDellivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '22:00',
    address,
  }) {
    console.log(
      `Order received at ${address} at ${time} for ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(
      `Here is your delicious pizza with ${mainIngredient} ${otherIngredients}`
    );
  },
};

const rest1 = {
  name: 'Park In',
  //numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'Hotel Guru',
  owner: 'Siddappa',
};

// logical OR assignment operator (when value is falsy then the value is set to 10)
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish coalescing assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= 'Rudrappa';
// rest2.owner &&= 'Rudrappa';

// console.log(rest1);
// console.log(rest2);

/*
restaurant.numguests = 0;
const guest2 = restaurant.numguests || 10;
console.log(guest2);

// Nullish : null or undefined
const guestCorrect = restaurant.numguests ?? 10;
console.log(guestCorrect);

/*
//use any data-typ, return any data type, short-circuting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numguests = 20;
const guest1 = restaurant.numguests ? restaurant.numguests : 10;
console.log(guest1);

const guest2 = restaurant.numguests || 10;
console.log(guest2);

//////////////////////////////////////////
/*
// SPREAD is on the right side of the = operator
const arr = [1, 2, ...[3, 4]];

// Rest is on the left side of the = operator
const [pizza, , garlicBread, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, garlicBread, otherFood);

//Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);

//Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 5, 6);

const x = [3, 5, 8, 9, 10];
add(...x);

restaurant.orderPizza('Cheese', 'Jalepeno', 'Corn');
restaurant.orderPizza('Cheese');

////////////////////////////////////////////////
/*
// Spread Operator '...'
const arr = [5, 6, 7];
const newArr = [3, 4, ...arr];
console.log(newArr);
console.log(...arr);

const newmenu = [...restaurant.mainMenu, 'Onion Dose'];
console.log(newmenu);

//copy array
const mainMenyCopy = [...restaurant.mainMenu];

// Join 2 array
const arr1 = [1, 2];
const arr2 = [3, 4];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

// Iterables : arrays, strings, maps, sets. NOT Objects
const str = 'Gokul';
const letters = [...str, ' ', 'R', 'a', 'j'];
console.log(letters);

//Real world example
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];

console.log(ingredients);
restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { foundedIn: 2005, ...restaurant, founder: 'Gokul' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Gokul Veg';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/////////////////////////////////////////////

/*
// Destructuring Objects
restaurant.orderDellivery({
  time: '21:30',
  address: '10th main Rajajinagar',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDellivery({ address: '10th main Rajajinagar' });

//Destructuring Objects
const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, tags, hours);

//Assigning default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 10;
let b = 20;
const obj = { a: 1, b: 2, c: 3 };
({ a, b } = obj);
console.log(a, b);

//Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/////////////////////////////////////////////

/*
// Destructuring Arrays 
let [main, secondary] = restaurant.categories;
console.log(main, secondary);

//switching using traditional way
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

//switching using destructuring array
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(1, 1);
console.log(starter, mainCourse);

//nested destructuring
const nested = [2, 4, [6, 8]];

const [i, j, [k, l]] = nested;
console.log(i, j, k, l);

//default values
const [p = 1, q = 1, r = 1] = [8, 9]; //When you do not know the size just assign  it to a value, if we do not assign it would just be undefined.
console.log(p, q, r);
*/

// Coding Challenge #1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;

//2.The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;

//3.Create an array 'allPlayers' containing all players of both teams (22 players)
const allPayers = [...players1, ...players2];

//4.During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

//5.Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6.Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//7.The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

team1 < team2 && console.log('team 1 wins');
team2 < team1 && console.log('team 2 wins');
