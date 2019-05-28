// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, 
 * // base vs. value
 * 
 * which could be a String or Number, 
 * 
 * 
 // return function()
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function(value) {
        return base < value;
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function(value) {
            return base > value;
        };
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character,
 * //indexed value
 * return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 * str === startswith
 */
 
 //startsWith is a single character
 // using return function() 
 //test IF the given 'String' starts with the "startsWith" character
 
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
        return function (string) {
            var str = startsWith.toUpperCase();
            var j = string[0].toUpperCase();
         if (j === str){
            return true;
         } else { 
            return false;
        }
        }
    // YOUR CODE ABOVE HERE //
    
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
   return function (string) {
            var str = endsWith.toUpperCase();
            var j = string[string.length-1].toUpperCase();
         if (j === str){
            return true;
         } else { 
            return false;
        }
        }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 //Input: ['str1', 'str2', 'str3'] ->An array of Strings called "strings"
 //Input: function modify() -> a function  called modify
 
 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
 /*lets make an array to collect the results and loop over using
 *FOR since we have a start and stop point*/

function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
        var myArr = [];
        for (var i = 0; i < strings.length; i++){
            myArr.push(modify(strings[i]));
        }
        return myArr;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function 
 * 
 * [str1, str2, str 3] & function()
 * Designed to test the String in some  way and
 * 
 * return a Boolean on whether it passed, 
 * 
 * return true if ALL Strings pass the test.
 * 
 * 
 * //Conditional Statement
 * 
 * Input: Array of Strings, Function that tests strings
 * Output: Boolean value
 * Default - return true if all strings pass
 * 
 *
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
 //strings = [];
 //test = function();
function allStringsPass(strings, test) {
    for (let i = 0; i < strings.length; i++){
        let word = strings[i];
        if (test(word) === false){
         return false;
        }
    } return true; 
    // YOUR CODE ABOVE HERE //
} 
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}