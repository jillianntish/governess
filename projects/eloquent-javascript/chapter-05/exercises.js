// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  let newArr = [];
  //declare a new array to save the new values
for(let i = 0; i < array.length; i++){
  //loop through the old array to collect the values
    newArr = newArr.concat(array[i]);
    //for every iteration, the newArr = itself concatened with the iteration value
}
return newArr;
//return the new array 
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, test, update, body) {
//   let newArr = [];
//   for (let i = start; i < body.length; i++){
    
//     if (yep === true){
//       newArr.push(yep);
//     }
//     return false;    
//   }
// return newArr;
// }

  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}


// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
//   for(let i = 0; i < array.length; i++){

//     if (test(array[i], i, array === true)){
//       return true;
//     } else if (test(array[i] === false)){
//     return false;
//     }
//   }
// }
  for (let element of array) {
    if (test(element) === false) {
      return false;
    }
  }
  return true;
}
// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
 
function characterScript(code) {
  //this func uses a char code to find the corresponding script
  for (let script of SCRIPTS) {
    //SCRIPTS is an array of Objects, use this syntax to loop through the collection
    if (script.ranges.some(([from, to]) => {
      //condy:look into the array of SCRIPTS, if there is a script in the given SCRIPTS
        return code >= from && code < to;
        //evaluates IF the code is greater than or equal to 'from' AND code is less than 'to'
      }))
      {
      return script;
      //if all of the values evaluate to false,  return the entire script instead
    }
  }
  return null;
}
/////////////////////////////////////////////////////////////////////////////
function countBy(items, groupName) {
  //this func counts the characters that belong to each script
  let counts = [];
  //create a new array to store the new values
  for (let item of items) { //using a for/of loop, iterate of the 'items' array
    let name = groupName(item); //new variable called name which equals the function call being used on item
    let known = counts.findIndex(function(c){ c.name == name}); //new variable called known which equals the empty array
    //with a findIndex method. This method takes a function with a parameter called c
    //this method accesses c at the 'name' property and compares it to name, aka the item with the groupName function call
    if (known == -1) {
      //if known is the same as -1
      counts.push({name, count: 1});
      //counts array pushes a new object into it
    } else {
      counts[known].count++;
      //otherwise, access the element 'known' on the counts array and continue to iterate forward one position
    }
  }
  return counts;
  //return the counts array
}

//////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");
  switch (scripts.length) {
    case 0:
      return 'no dominant direction found';
    case 1:
      return scripts[0].name;
    default:
      if (scripts.reduce((acc, cur) => acc.count === cur.count)) {
        return 'no dominant direction found';
      } else {
        return scripts.reduce((acc, cur) => acc.count >= cur.count ? acc.name : cur.name);
      }
  }
}
   
//   let script = characterScript(char.codePointAt(0));

//   // from here you it would be better to break this down into multiple if statements as opposed to how they had it
//   // since you have three possibilities of what you want to return
//   // each script has a dircection property so we want to check:
//   // if the script's dircection is 'ltr' return 'ltr'
//   // if the script's dircection is 'rtl' return 'rtl'
//   // if the script's dircection is 'ttb' return 'ttb'

// })

// // The scripts variable will now be an array of objects with a count property and name property for example:
// // [ {name: 'ltr', count: 3}, {name: 'rtl', count: 2}, {name: 'ttb', count: 5} ]

// // once you have this you can use reduce like this:
// // because we don't pass a second parameter to reduce seed will be the first element of the scripts array
// // element will be the next object in the array
// let dircection = scripts.reduce(function(seed, element) {
//   // if the seed object has a count property greater than the element's count property return the seed object
//   // else return the element object
// });

// // direction will now be one object. whichever had the highest count property
// // now you can extract the name propertyfrom that object and return it for the result of your dominantDirection func

// }




// function dominantDirection(text) {
//   let scripts = countBy(text, char => {
// // the countBy func will return an array of objects with a name and count proper
//   // the characterScript func will return a script or null
//     let script = characterScript(char.codePointAt(0));
//     return script ? 'ltr' : 'none';}).filter(({ name }) => name != 'none');
//     console.log(scripts);
//     //new variable 'scripts' which is a func call to countBy, taking text and another func as args
    
//     //in this callback func, there is a new local variable 'script' which is a func call to 
//     //characterScript. characterScript takes a character and uses the .codePointAt method on it,
//     //starting at zero
//     //Then, the func counts characters by name, and uses characterScript to assign them a name
//     //the default is 'none' for characters that arent a part of any script
   
//   //filter eliminates the 'none' response by filtering out all of THOSE names that
//   //arent needed.
  
//   let total = scripts.reduce((n, { count}) => n + count, 0);
// //the second parameter '{ count }'. 
// //It is another fancy way of saying "give me the count property of the object
// // passed as the second parameter'
//   if (total == 0){return 'ltr';  } else { return 'rtl'; 
//   //scripts.map(({name, count}) => { return ``;});
// }

// }

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
