/* lExercises

As a bonus assignment, modify your range function to take an optional third
argument that indicates the “step” value used when building the array. If no
step is given, the elements go up by increments of one, corresponding to the
old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7,
9]. Make sure it also works with negative step values so that range(5, 2, -1)
produces [5, 4, 3, 2].


////////////////////////////////////////////////////////////////////////////////
// range //
/*
The sum of a range
The introduction of this book alluded to the following as a nice way to compute
the sum of a range of numbers:
console.log(sum(range(1, 10)));

//edge case - if there is a 3rd parameter,
Write a range function that takes two arguments, start and end, and returns
an array containing all the numbers from start up to (and including) end.
*/ 
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, incrementor) {
  //this function takes 2 parameters and an optional 3rd
  incrementor = incrementor || 1;
  //icnrementor equals either itself or 1
  let newArr = [];
  //declare a new array in which to store values
  if(incrementor < 0){
    //first condition. if incrementor is a negative number
    return newArr;
    //return an empty array
  }
  for (let i = start; i <= end; i += incrementor){
    //for loop to iterate over array, including start AND stop, during this loop
    //variable i is equal to start which is itself plus the incrementor
    if(start === end){
      //during loop, if start and end are the same, return an empty array
      return newArr;
    } 
    //otherwise, push the elements from the array into a new array
    newArr.push(i);
  }
return newArr;
//return the new array with new values added to it
}
//
////////////////////////////////////////////////////////////////////////////////

/*
Next, write a sum function that takes an array of numbers and returns the
sum of these numbers. Run the example program and see whether it does
indeed return 55.
*/
/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  let num = 0;
  //we want to return a number so here is the variable for it
  if (array.length === 0 || array.elements === 0){
    //for this loop, if the array is empty or array element is 0, return 0
    return 0;
  } 
  for (let i = 0; i < array.length; i++) {
    //during this loop
  num = num + array[i];
  //number is equal itself plus the array iteration value
}
return num;
//return the number which is now equivalent to the sum of every value in the array
}


////////////////////////////////////////////////////////////////////////////////
// reverseArray /
/*

Reversing an array
Arrays have a reverse method that changes the array by inverting the order in
which its elements appear. 

1. For this exercise, write two functions, reverseArray
and reverseArrayInPlace. 

2. The first, reverseArray, takes an array as argument
and produces a new array that has the same elements in the inverse order. 

3. The second, reverseArrayInPlace, does what the reverse method does: it modifies
the array given as argument by reversing its elements. 

4. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the
previous chapter, which variant do you expect to be useful in more situations?
Which one runs faster?
*//////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
let newArr = [];
//declare a new array to store values in
  for (let i = array.length - 1; i >= 0; i--){
    //for the iteration over the array, loop FORWARD, collecting the values in order
    newArr.push(array[i]);
    //'pull' the values from the old array and PUSH them (to the end) into the new array 
  }
return newArr;
}// return the new array with the values reversed

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  for (let i = 0; i < array.length; i++) {
    //iterate over the array 
 array.splice(i, 0, array.pop());
 //splice values from the iteration, removing 0 items, then pop them out, 
 //and return them in reverse order in the same array
}
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*Write a function arrayToList that builds up a list structure like the one
shown when given [1, 2, 3] as argument*/

function arrayToList(array) {
  var list = null;
    for (var i = array.length - 1; i >= 0; i--){
      list = {value: array[i], rest: list};
    }
    return list;
    }
 

////////////////////////////////////////////////////////////////////////////////
// listToArray ////
/*
A list
Objects, as generic blobs of values, can be used to build all sorts of data structures. 
A common data structure is the list (not to be confused with array).
A list is a nested set of objects,
with the first object holding a reference to the second, the second to the third, and so on.


eg. 
let list = {
value: 1,
rest: {
value: 2,
rest: {
value: 3,
rest: null
}
}
};
The resulting objects form a chain, like this:
value: 1
rest: value: 2
rest: value: 3
rest: null


A nice thing about lists is that they can share parts of their structure. For
example, if I create two new values {value: 0, rest: list} and {value: -1,
rest: list} (with list referring to the binding defined earlier), 
they are both
independent lists, 
but they share the structure that makes up their last three
elements. The original list is also still a valid three-element list.
. 


*/
///////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*1. Also write a listToArray function that produces an array from a list. 
2. Then add a helper function 'prepend', which takes an element and a list and 
creates a new list that adds the element to the front of the input list,
*/


function listToArray(list) {
 var newArr = [];
 
 for (let node = list; node; node = node.rest){
// for (let i = 0; i < list; i++){
 //  newArr[i] = list[i]
 newArr.push(node.value);
 }
   //I want to access the values in the list object, and return each of them in a new array
//   ?? newArr.push(list[key]);
//   console.log(key);
// }
return newArr;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//add element to the front of the list
function prepend(value, list) {
 return {value, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


/*
3. and 'nth', which takes a list and a number and returns
the element at the given position in the list 


(with zero referring to the first
element)

or undefined when there is no such element.


If you haven’t already, also write a recursive version of 'nth'.
*/

//these instructions are pretty unclear^

function nth(list, element) {
  if (!list){
    //if it is NOT a list
  return undefined;
  //return undefined
  }
  else if (element === 0){
    //if the element is equal to 0
  return list.value;
  //return the list value at that position
  }
  else {
  return nth(list.rest, element - 1);
  //if the element is NOT strictly equal to 0, recursively call the function to repeat the loop
  }
}
 
// if(list && element === 0){
//   return element;
// }
//   else if (!element){
//     return undefined;
//   }
//   else {
//     return nth(list.rest, element - 1)
//   }


////////////////////////////////////////////////////////////////////////////////
// deepEqual ////////
/*
Deep comparison
The == operator compares objects by identity. But sometimes you’d prefer to
compare the values of their actual properties.


Write a function deepEqual that takes two values and returns true only if they
are the same value or are objects with the same properties,

where the values of the properties are equal when compared with a recursive call 
to deepEqual.

To find out whether values should be compared directly (use the === operator
for that) or have their properties compared, you can use the typeof operator.

If it produces "object" for both values, you should do a deep comparison.

But you have to take one silly exception into account: because of a historical
accident, typeof null also produces "object".
The Object.keys function will be useful when you need to go over the properties
of objects to compare them.*/

/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//two empty objects, two numbers, two falseys
function deepEqual(val1, val2) {
  if (val1 === val2){
    return true;
      }
      if (val1 == null || typeof val1 != "object" ||
      val2 == null || typeof val2 != "object"){
         return false;
          }
          
  let keysA = Object.keys(val1); 
  let keysB = Object.keys(val2);

  if (keysA.length != keysB.length){ 
    return false;
      }
        for (let key of keysA) {
          if (!keysB.includes(key) || !deepEqual(val1[key], val2[key])){
            return false;
            }
          }
        return true;
      }


// let keys1 = Object.keys(val1);
//   let keys2 = Object.keys(val2);
//   if (val1 === val2){
//       return true;
//   }
//   else if (val1 == null || typeof val1 != "object")
//     ( val2 == null || typeof val2 != "object")
//     (keys1.length != keys2.length)
//       return false;
// }

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
