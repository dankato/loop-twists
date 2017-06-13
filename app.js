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

// Higher-order function drills -- Functions as arguments (1)

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


// Functions as arguments (2)

// Return only names that begin with 'R'
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];
//
// const filteredNames = filter(myNames, function(name) {
//     return name[0] === 'R';
// });
//
// console.log(filteredNames) // => ['Rich', 'Ray']

// TASK -- DEFINE YOUR FILTER FUNCTION BELOW:
// function filter(arr, fn) {
//     let newArray = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(fn(arr[i]) === true) {
//             console.log(arr[i]);
//             newArray.push(arr[i]);
//         }
//     }
//     return newArray;
// }
//
// filter(myNames);

// Functions as return values

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;

  return function(location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}`)

    if (warningCounter === 1) {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`)
    }

    if (warningCounter === 0 || warningCounter >= 2) {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`)
    }
  }
}

const rocksWarning = hazardWarningCreator('Rocks on the road');
const oilWarning = hazardWarningCreator('Oil slick on the road');
const roadkillWarning = hazardWarningCreator('Roadkill all over the road');

rocksWarning('corner of 5th and 33rd');
rocksWarning('corner of 5th and 33rd');
rocksWarning('corner of 5th and 33rd');


// forEach, filter and map

let turtleMoves = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
let turtleFilter = turtleMoves.filter(function(arg) {
    return arg[0] >= 0 && arg[1] >= 0;
});

// console.log(turtleFilter);

function addMoves(arg) {
    return arg[0] + arg[1];
}

let totalSteps = turtleFilter.map(addMoves);

totalSteps.forEach(function(barn) {
    console.log(barn); // 5
});