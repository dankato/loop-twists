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
    
}



