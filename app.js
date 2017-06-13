'use strict';

// Redo the "max and min (without sort or Math.max/min)" drill but this time use a while loop instead of a for loop

function max(numbers) {
    let currentMax = numbers[0];  // setting currentMax to the value of the 1st item

    var i = 0;
    while (i < numbers.length) { // while loop
        if(numbers[i]> currentMax) { // if the item is greater than the currentMax
            currentMax = numbers[i]; // sets number as the currentMax
        }
    i++;
    }
    return currentMax;
}

// max([0, 1, 2, 3, 4]) // => 4

function min(numbers) {
  let currentMin = numbers[0];

  let i = 0;
  while (i < numbers.length) {
    if (currentMin > numbers[i]) {
      currentMin = numbers[i];
    }

    i++;
  }

  return currentMin;
}

// console.log(min([4,5,16,1]));

function average(numbers) {
  let i = 1;
  let result = numbers[0];
  while (i < numbers.length) {
    result = result + numbers[i];
    i++;
  }

  return result / numbers.length;
}

// console.log(average([1,2,3]));

// Higher-order function drills

// Functions as arguments (1)

function repeat(fn, n) {
  for (let i=0; i<n; i++) {
    fn();
  }
}

function hello() {
  console.log("hello world");
}

function goodbye() {
  console.log("goodbye world");
}

repeat(hello, 5);
repeat(goodbye, 5);
