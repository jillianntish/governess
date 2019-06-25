// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments: 
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/


//_. identity takes a single value
    _.identity = function(value){
    return value;
    //return value unchanged
};


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

// _.typeOf = function(value){
//     //takes a single value
//         //deal with arrays
//         if(Array.isArray(value)){
//         return 'array';
//         //return 'array' as a string
//         } else if (value === null){ 
//             return 'null';
//     } return typeof value;
// };
    //typeof unary operator
    
                                 
                    // _.typeOf = function(value){
                    //     //takes a single value, currently we dont know what kind
                    //         if(Array.isArray(value)){
                    //             //check to see if value is an array, if so:
                    //         return 'array';
                    //         //return 'array' as a string
                    //         } else if (value === null){
                    //             // checks if value is absent of any value
                    //             return 'null';
                    //                 //return null 
                    //         } return typeof value;
                    //                 // returns value's data type
                    //                     };
                    

_.typeOf = function(value){
    if (Array.isArray(value)){
        return 'array';
    } if (value === null){
        return 'null';
    }
    return typeof _.identity(value);
};


/* _.first = function(array, number){
* Arguments:
*   1) An array
*   2) A number
*   //two parameters, one is a number, the other is an array
* Objectives:
*   1) If <array> is not an array, return []
*   // !Array.isArray then return []
*   2) If <number> is not given or not a number, 
*   return just the first element in <array>.
*   3) Otherwise,
*   return the first <number> item of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/


             _.first = function(array, number){
                 //declare a function that takes an array and a number
                if(!Array.isArray(array) || number < 0){
                    //if the array is not an array or if the number is less than zero
                    return []; 
                        //return a a new array
                } else if (typeof number !== 'number') {
                        // if the data type of number is not strictly equal to a number
                    return array[0];
                        //return the original array at it's index position
                    }
                    return array.slice(0, number);
                } //return the original array from the index to the given number
 
 

/** _.last
* Arguments:
*   1) An array
*   2) A number
* //accepts two parameters
* Objectives:
*   1) If <array> is not an array, return []
*   //check (Array.isArray), return empty array
* 
*   2) If <number> is not given or not a number, 
*   return just the last element in <array>.
*   // if number is undefinded or NaN, return array.length -1
*   3) Otherwise, return the last <number> itemsof <array>
* 
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/


_.last = function(array, number){
    //declare a function that takes an array and a number as a parameter
    if(!Array.isArray(array) || number < 0){
    //Checks if 'array' is NOT an array, or if number is less than zero 
        return []; 
        //return an empty array
            } else if (typeof number !== 'number') {
            //if the data type of number is not strictly equal to a number
                return array[array.length - 1];
                //return the value at the at the array's final position
                   }
                return array.slice(-number);
                //return the array with 
    }          
    
/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function (array, value) {
    //Declared a function that takes an array and a value,
    for(var i = 0; i < array.length; i++){
        //during the iteration of this loop, 
        if(array[i] === value){
            //if the iteration index value is the same as value
            return i; 
            //return the iteration index position
        }
    }
    return -1; 
}//if not, return negativate 1

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/


_.contains = function(array, value){
    let result = false;
    //declare a variable with a boolean value
    for( var i = 0; i < array.length; i++){
     // the iteration over the array
            result = value === array[i] ? true : result;
            //while iterating, check if result(which is false) is the same as the iteration's current index position
            // if they are the same, return true, if it is the opposite, return result(false)
        }
        return result;
}       //return the result outside of the iteration
/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, action){
    if (Array.isArray(collection)){
         //if collection is an array, 
        for (let i = 0; i < collection.length; i++){
        action(collection[i], i, collection);
    } //iterate through the array and call the action function once on the specified values 
    } else {
        for (var key in collection){
            //if collection is an object, 
            action(collection[key], key, collection);
        } /*iterate through the object then, call the function for the iteration index position, 
         the keys in the object, and the object itself */
    }
    
}



/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function (array) {
    // let myArr = [];
    // return _.indexOf(array, function(index, element, array) {
    //     myArr.push(index)}
    // );
    
    // }
    
    //declared a function that takes an array as the parameter
    var newArr = [];
    //declared a new array literal in which to copy into with duplicate values removed
        for (var i = 0; i < array.length; i++){
        //iterating through the array to check elements
            if(newArr.includes(array[i])){
             /*conditional statement : if the new array already includes the 
             element at the current iteration index position, continue in the iteration*/
                 } else {
                newArr.push(array[i]);
            } /* if the new array does NOT include an element that is the same as the iteration
            index position, push the element at the index position into the new array*/
         } return newArr;
    }; //Finally, return the new array with no duplicate elements


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* 
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* 
* 
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function (array,action){
  let newArr = [];
    //Declare a new array in which to print the values from the function call on the array
    if (Array.isArray(array)){
        //Tests in the array is an array, if so:
        for (let i = 0; i < array.length; i++){
        // during the iteration of the array:
        if (action(array[i], i, array) === true){ 
            //test the function on the array in the specified elements, if the return value is a truthy
        newArr.push(array[i]);
        }// push the iteration index postion into the new array
        }
        return newArr;
    }// return the new array outside of the iteration

}
   
   //     return _.each(array, function(element, index, array){
//         return action(element, index, array);
//     });
// };



/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

//takes an array and a function
//call function for each element in the array and pass all the arguments (array[i], index,  )

// _.reject = function(array,action){
//     let newArr = [];
    
//     if (Array.isArray(array)){
//         for (let i = 0; i < array.length; i++){
//         if (!action(array[i], i, array) === true){ 
//         newArr.push(array[i]);
//         }
//         }
//         return newArr;
//     }
// };


_.reject = function(array,action){
  return  _.filter(array, function(element, index, array){
                // return elements that fail action
            return !action(element, index, array)
  });
  };

        
//     }
// }

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, action){
    let myArr = [[], []];
     //an array split into sub arrays
    _.each(array, function(element, key, array){
         //each function loops through the array, then loops through the function which:
        if (action(element, key, array)){
            //checks the values in both arrays
                myArr[0].push(element);
        } else {        
            myArr[1].push(element);
        }
     });
     return myArr;
}




/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
* 
*   2) save the return value of each <function> call in a new array
* 
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/


_.map = function(collection, action){
    let myArr = [];
    _.each(collection, function(element, index, collection){
       myArr.push(action(element, index, collection))
    });
return myArr;
}
    
    
//     //declare an empty array
//      if (Array.isArray(collection)){
//          //if its true that collection is an array
//      for (let i = 0; i < collection.length; i++){
//          //then loop through the collection array to the end 
//         myArr.push(action(collection[i], i, collection));
//         // while looping, push the action tested array's iterator, index, and array into the new array
//      }
//         } else {
//             //if collection is not an array but it is an object
//         for (var key in collection){
//             //then loop through the object properties(key/value pairs)
//             myArr.push(action(collection[key], key, collection));
//             //and push the action tested object's iterator, keys, and the object itself into the new array
//         }
//      }
//       return myArr;
// };//return the array with the new array elements or object properties in it


/** _.pluck
* Arguments:
*   1) An array of objects //collection
*   2) A property
* Objectives:
*   1) Return an array containing the value
*  of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/


//takes an array and a prop
//create result array
//loop over array
//return result
// _.pluck = function(array, prop){
//     let myArr = [];
//      for (let i = 0; i < array.length; i++){
//          array.push(array[i][prop]);
//              }
//          return myArr;
// };


_.pluck = function(array, prop){
return _.map(array, function(element, index, collection){
    return element[prop];
});
}


/* _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
* 
* 
*      if <collection> is an object:
*          current value, current key, <collection>
* 
*   2) If the return value of calling <function> for every element is true,
return true
* 
* 
*   3) If even one of them returns false, return false
* 
* 
*   4) If <function> is not provided, return true if every element is truthy, 
otherwise return false
* 
* 
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
// takes a collection and a function
//call a function for every element of collection if
// its an array
//if collection is an object, log current calue, key,
//and collection
//if the return value of every element is true, return true
//if even one is false, return false
//if function is not provided, return true if every element is true, otherwise
//return false\

// _.every = function(collection, action) {
//     let bool = true;
//     _.each(collection, function(element, index, collection) {
//         // func is actually a function and func is false
//          if (typeof action === 'function' && !action(element)){
//             bool = false;
//          } else if (typeof action !== 'function' && !element){ 
//           bool = false;
//         }
        
//     });
//     return bool;
// }


_.every = function(collection, action){
       let bool = true;
        _.each(collection, function(element, index, collection) {
        if (typeof action === 'function' && !action(element, index, collection)){
            bool = false;
            }
            else if (typeof action !== 'function' && !element) {
            bool = false;
            }
            });
            return bool;
    }
//     for(var i = 0; i < collection.length; i++){
//      if (Array.isArray(collection) && collection[i] === true){
//      _.pluck(collection, action(collection[i], i, collection));
//         return true;
// } else {
//     for (var key in collection){
//         _.pluck(action(collection[key], key, collection));
//         }
// }
// }
// }


_.pluck = function(array, prop){
   //the function pluck takes an array and a property on an object as parameters
return _.map(array, function(element, index, collection){
    //this function returns the function map, which takes the array and an anonymous function as ARGUMENTS
    //they are ARGUMENTS, which means the are plugged into the ORIGINAL function - pluck
    //the anonymous function plugs the element's 'prop' into the map call
    return element[prop];
    //and accesses the collection's property, to be used as a an argument
});
}




/* _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>

*   2) If the return value of calling <function> is true for at least one element,
return true

*   3) If it is false for all elements, return false

*   4) If <function> is not provided, return true if at least one element is truthy, otherwise return false


* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

 
 
 
    
    _.some = function(collection, action){
       let bool = false;
        _.each(collection, function(element, index, collection) {
        if (typeof action === 'function' && action(element, index, collection)){
            bool = true;
            }
            else if (typeof action !== 'function' && element) {
            bool = true;
            }
            });
            return bool;
    }




/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection>,
*       passing the arguments: previous result, element, index
* 
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*/
/* 
*   3) On the very first iteration, use <seed> as the "previous result"
* 
*   4) If no <seed> was given, use the first element/value of <collection> as 
<seed> and continue to the next element

//if seed is undefined, use the FIRST(not zero) element of collection as seed.

//
*   5) After the last iteration, return the return value of the final <function> call
//after the loop reaches the end of the array, return the 

* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, 
currentIndex){ return previousSum + currentValue }, 0) -> 6
*/


_.reduce = function(array, action, seed) {
    if (seed === undefined) {
        seed = array[0];
        for (let i = 1; i < array.length; i++) {
            seed = action(seed, array[i], i);
        }
    }
    else {
        for (let i = 0; i < array.length; i++) {
            seed = action(seed, array[i], i);
        }
    }
    
    return seed;
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/


_.extend = function(object1, object2) {
    //function takes object1 and object 2 as parameters
    // returns  Object.assign() method with object1 as an argument
    // spread syntax (...) allows an iterable to expand in places where 0 or more key value pairs for are expected
    return Object.assign(object1, ...arguments);
    
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
    
    
    
    
    
    
    
}
