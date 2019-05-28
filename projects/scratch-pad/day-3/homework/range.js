// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters 
 * // function range (int1, int2)
 * 
 * and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 * // we want this function to return an array 
 * 
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 * 
 * // print from the end to the beginning
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 * // create a new array
 * 
 *  b. you'll need a loop, which one is best?
 * 
 * //since I know my start and stop point and this is an array, I'll use a "For"
 * //loop
 *  c. you'll wanna make use of the push() method of Array.
 * 
 * // push the return values in array that we can loop forwards and backwards over
 * 
 * 
 * 
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    let myArr = [];
        if (start < end){
            for (let i = start; i <= end; i++)
        myArr.push(i);
        } else if (start > end){
            for (let i = start; i >= end; i--)
            myArr.push(i);
        } 
        return myArr;
        }
    range();
    
    // YOUR CODE GOES ABOVE HERE //





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}