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


// Redo "Compute the average" exercise but this use a while loop instead of a for loop

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


// Redo the "Fizz Buzz" drill" if you used if/else last time, then try switch statement this time.

function fizzBuzz(countTo) {
    let arr = [];
    for (let i = 1; i <= countTo; i++) {
        switch(true) {
            case (i % 15 === 0) : arr.push('fizzbuzz');
            break;
            case (i % 5 === 0) : arr.push('buzz');
            break;
            case (i % 3 === 0) : arr.push('fizz');
            break;            
            default: arr.push(i);
        }
    }
    return arr;
}

fizzBuzz(20);