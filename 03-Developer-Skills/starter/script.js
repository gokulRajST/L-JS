// Remember, we're gonna use strict mode in all scripts now!
'use strict';

let temperatures = [17, 21, 23];

function printForeCast(arr) {
  let print = temperatures;
  for (let i = 0; i < arr.length; i++) {
    let temp = ` ... ${arr[i]}℃ in ${i + 1} days`;
    print = print + temp;
  }
  return print;
}

console.log(printForeCast(temperatures));
