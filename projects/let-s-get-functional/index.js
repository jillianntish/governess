// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-jillianntish');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */


var maleCount = function(people){
    let males = _.filter(people, function(person, people){
        if (person.gender === 'male'){
            return true;
        }
    });
     return males.length;
};

////////////////////////////////////////////////////////////

  var femaleCount = function(people){
   return _.reduce(people, function(femaleCount, person){
       if (person.gender === 'female'){
       femaleCount += 1;
       }
        return femaleCount;
   }, 0);
    //for every customer in the customer array
    //check if they are female
    //return the number of females
};
///////////////////////////////////////////////////////////
var oldestCustomer = function(people){
    let oldest = _.reduce(people, function(previousValue, currentValue, currentIndex) {
        if (currentValue.age > previousValue.age) {
            return currentValue;
        } 
        return previousValue;
    });
    
    return oldest.name;
};


////////////////////////////////////////////////////////
var youngestCustomer = function(people){
     let youngest = _.reduce(people, function(previousValue, currentValue, currentIndex) {
        if (currentValue.age < previousValue.age) {
            return currentValue;
        } 
        return previousValue;
    });
    return youngest.name;
};

///////////////////////////////////////////////////////////////////////////////


var averageBalance = function(people){
    const average = _.reduce(people, function(prevVal, currentVal, currIndex){
    //variable called average which is a function call to reduce. It takes the 
    //following arguments: the people array to iterate over, another function which
    //performs the action, and a seed, '0', to accumulate values.
    //the callback function in reduce takes 3 parameters (previousValue, currentValue, currentIndex)
        return (prevVal + Number(currentVal.balance.replace(/[^0-9.-]+/g,"")))
        //this callback returns the previous value, + a call to the Number function
        //this Number call accesses the currentValue's balance, and replaces
        }, 0);
        return average / people.length;
}
//acces numbers, turn strings into number, then return number
//     const average = people.reduce((previousBalance, currentValue) => {
//          return (previousBalance + currentValue) / people.length;
//         });
//         return average;
// }

//for every person in the list of people
//check their balances
//return the average balance of all the people
///////////////////////////////////////////////////////////////////////////////


//DONT TOUCH THIS JILL IT ALREADY WORKS
var firstLetterCount = function(people, letter){
    let namesWithLetter = _.filter(people, function(person, index, people){
        if (person.name[0] === letter.toUpperCase()) {
            return true;
        }
    });
    return namesWithLetter.length;
};

// return _.filter(array, customer => customer.name[0].toLowerCase() === letter.toLowerCase()
     


//For every person in the people array
//find how many customer names start with a specific letter
//return the NUMBER of people who have that letter in common

///////////////////////////////////////////////////////////////////////////////
//find the customer in array
//loop over customer's friends
//see which friends match given letter
//
var friendFirstLetterCount = function(people, customer, letter){
    let result;
    _.each(people, cust => {
        if(cust.name === customer){
            result = firstLetterCount(cust.friends, letter);
        }
    });
    return result;
    // return firstLetterCount(people, function(customer, index, people){
    //     let friend = customer.friends.name.letter[0].toUpperCase();
        

    };
///////////////////////////////////////////////////////////////////////////////

var friendsCount = function(array, name){
    let result = [];
    //declare a new array to store new values(names)
    _.each(array, function(element, index, collection){
        //invoke underscore each function, passing in array arg, and projection function with parameters
        //parameters are what the we want the proj, function to perform on
        let friend = _.pluck(element.friends, 'name');
        //new var that goes through the friends elements and accesses the name key
        if (_.contains(friend, name)) {
            result.push(element.name);
        }
            //if the array 'friends' contains the name, return the result 
        });
         return result;
    };
   
    //find the customer name
      
// # 8: `friendsCount`
//  - **Objective**: Find the customers' names that have a given customer's name 
//in their friends list
//  - **Input**: `Array`, `Name`
//  - **Output**: `Array`
//  - **Constraints**:



///////////////////////////////////////////////////////////////////////////////
var topThreeTags = function(people){
//     var tagCount = _.reduce(customer, (prevVal, customer) => {
//           //new var takes the function reduce, loops through the people array
//         _.each(customer.tags, tag => {
//             //function each gives us access to tags and then to individual tags
//             if (prevVal[tag]){
//                 //if tag is already on the object, skip it and move to the next iteration
//                 prevVal[tag++]
//             } else {
//                                 prevVal[tag] = 1;
//                 //if its not there, then add the tag to the accumulator
//             }
//         });
//         return prevVal;
//     }, {});
//         //we cant sort object so it must be turned into a sortable data type - arrays
//         tagCount = _.map(tagCount, (count, key) => {
//             //gives us access to tag and accounds
//             return [tag, count];
//           //gives us access to the count and the key in tags (since were returning an object)
//         });
        
//         tagCount.sort((a, b) => b[1] - a[1]);
//         tagCount = _.first(tagCount, 3);
//         return _.map(tagCount, tag => tag[0]);
// };
        
    
    let tagCount = _.reduce(people, (count, person) => {
      
        _.each(person.tags, tag => {
            if (count[tag]){
                count[tag]++;
            } else {
                count[tag] = 1;
            }
        });
        return count;
}, {});

    tagCount = _.map(tagCount, (count, key) => {
        return [key, count];
    });
    tagCount.sort((a, b) => b[1] - a[1]);
    tagCount = tagCount.slice(0, 3);
    return _.map(tagCount, tag => tag[0]);
};

////////////////////////////////////////////////////////////////

var genderCount = function(people){
    let gender = {};
    gender.female = femaleCount(people);
    gender.male = maleCount(people);
    gender.transgender =  _.reduce(people, function(prevPers, currPers, Index){
       if (currPers.gender === 'transgender'){
      return ++prevPers;
       }
        return prevPers;
   }, 0);
    return gender;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
