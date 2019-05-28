// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, 
 * 
 * loop forward over the Array
 * // For Loop
 * and print its values 
*  using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
 for (var i = 0; i < array.length; i++){
   console.log(array[i]);
 }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  for (var i = array.length -1; i > -1; i--){
    console.log(array[i]);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) { 
  // YOUR CODE BELOW HERE //
      return Object.keys(object);
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
    for (var key in object){
     console.log(key);
  } 
  
  // Input: Object
  // Output: Array
  // Cool, you are using object[key] to access the values in the object
  // Same as above, what can we do to have an array as an output? What array methods would we use?
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
   var myArr = [];
    for (var key in object){
        myArr.push(object[key]);
    } return myArr;

  // Input: Object
  // Output: Array
  // Great! You are creating an empty array and the push method to populate your array
  // How can we get ALL of the object values? 
  // Since we do not know the exact names of our keys, what should our syntax resemble?
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
    for (var key in object){
    console.log(object[key]);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
    let keysInObject = [];
    for (let key in object){
      keysInObject.push(key);
  }
    return keysInObject.length;
    
  //   Object.keys(object);
  // Object.values(object);
  // Object.values(object).length
    
  // Input: Object
  // Output: Number
  // Keep in mind that objects will not have a length property, this will only work for arrays. *hint-hint*
  // How can we count the number of key/value pairs in an object? How can an array and the .length property help us
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  let myArr = [];
   for(var key in object){
   myArr.unshift(object[key]);
   }
   for (var i = 0; i < myArr.length; i++){
    console.log(myArr[i]);
   } 
   
   // Input: Object
   // Output: Object values
   // This exercise will be similar to printObjectValues but we'll need to do a few extra steps
   // Once you've completed the above exercises, try and combine all of the teachings into this one problem
   // How can we access all of an object's values?
   // How can we store data?
   // How can we iterate over stored data?
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
