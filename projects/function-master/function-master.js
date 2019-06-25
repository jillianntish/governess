//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var myArr = [];
    for (var key in object){
     myArr.push(object[key]);
    }
    return myArr;
        
    } 


//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
        var myObj = Object.keys(object);
      var newStrings = myObj.join(" ");
     return newStrings;
}
//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var newArr = [];
     for (var key in object){
        if (typeof object[key] === 'string'){
     newArr.push(object[key]);
            }
     }     
     return newArr.join(' ');

}
    //  var newObj = object.key.join(' ');
    //  var newNew = newVal.split(',');
    //  return newNew;
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)){
        return 'array';
    } else if (typeof collection === 'object'){
        return 'object';
    }
    
}
        

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var newStr = string.split('');
    //this turns the string into an array with commas
    
    var upFirst = newStr[0].toUpperCase();  
    newStr[0] = upFirst;
    //this changes first letter to upper case
     
        return newStr.join('');
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var strArr = string.split(' ');
    var newArry = [];
        strArr.forEach(function(value){
            newArry.push(capitalizeWord(value));
        });
        return newArry.join(' ');
}
    //this turns the string into an array
    // string is now split by spaces
    //access for character position 
    //var upFirst = newStr[0].toUpperCase();  
    //ewStr[0] = upFirst;
    //this changes first letter to upper case
     
        //return newStr.join(' ');
//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
if (object.hasOwnProperty('name')){
    return "Welcome " + capitalizeWord(object.name) + "!";
}
}
//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    if(object.hasOwnProperty('name') && object.hasOwnProperty('species')){
        return capitalizeWord(object.name) + " is a " + capitalizeWord(object.species);
    }
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
if(object.hasOwnProperty('noises') && object.noises.length > 0){
        return object.noises.join(' ');
} else {
    return "there are no noises";
}    
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
if (string.includes(word)){
    return true;
} else {
    return false;
}
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
   //for (var key in object){
    if(arrayOrObject(object.friends) === 'array' && object.friends.includes(name)){
     // if the friends list is an array, AND it includes the name 
        return true;
        // return true
    } else {
        return false;
        }
    }
//}    
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    var notFriends = [];
    //new array so we can keep the old one too
      for(var i = 0; i < array.length; i++){
          //loop through the old array
        if(!isFriend(name, array[i]) && name !== array[i].name) {
            //if the name being accessed on the old array is not found on an objects friends list
            notFriends.push(array[i].name);
        }       //push the name thats not found into the new array
        } return notFriends;
}               // return the new array

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    //I: object(Object), key(String), value(String/ other data type) (see function-master.html lines 121-126) 
    //O: Object
    //C: Must update a key in current object with a new value
    //E: the value may not always be a string
          if(object.hasOwnProperty(key)){
              //if the key exists
            object[key] = value;
                //   return object;
                    } else {
                        //else just make the key
                    object[key] = value;
                    }
                    return object;
                    }// then return that
//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) { //array of strings
   var remove = Object.keys(object);
   //var remove references keys in the  object
   for (var i = 0; i < remove.length; i++) {
       // haha, looping through an array, not an object
       if (array.includes(remove[i])){
           //if original array incrementor at the string is the same as the object key, remove it
           delete object[remove[i]];
           //remove the object key
       }
   }
}
    
    // for (var i = 0; i < array.length; i++){
    //     var key = array[i];
    //  if(object.hasOwnProperty(key) === key && key === array[key][i]){
    //      delete object.key.i;
    //  }
    //I: object(Object), array(Array with string elements)
    //O: Object
    //C: How can we delete properties 
    //(key value pairs) from an object given its key?
    //E: What if our array has more than one element?
    //How can we make sure we're removing multiple properties?
//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    //I: array(Array)
    //O: Array
    //C: The result array cannot have duplicates
    //E: What methods can we use to check if an element exist or not?
    var newArr = [];
 // new array to accept duplicates
    for (var i = 0; i < array.length; i++){
        //loop through the array to find the duplicates
         if(newArr.includes(array[i])){
             //after an iteration, if the new array contains a value already
             // pushed from the array, do nothing
            } else {
                //after an iteration, if the new array does NOT contain a value, 
                // push it into an array
                newArr.push(array[i]);
            }
    } return newArr;
}// return the array

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}