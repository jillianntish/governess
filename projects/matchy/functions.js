/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name){
for (var i = 0; i < animals.length; i++){
    //loop through animals array
     if (animals[i].name === name){
         //if the index position in animals during the loop is at a name property
         //that matches the 'name' string
         return animals[i];} 
         //return the matching index position
     } return null;
     
}
//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//parameters - animals array, strin name, object that reps replacement animal
function replace(animals, name, replacement){
    for (var i = 0; i < animals.length; i++){
        //loop through the animals array
            var itsName = animals[i].name.toLowerCase();
        //new var that is assigned to index location of the name property and forced to lower case
            if (itsName === name.toLowerCase()){
        //condy statement, if the index position strictly matches the name...
                animals.splice(i , 1, replacement);
            //cut it out at the position and add in the replacement
                }
        } return animals; 
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove //////////
/* x Write a function called `remove` with a signature of `remove(animals, name)` that:
   x Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.
   - If an animal with that name exists within the `animals` Array, remove it.
 2. Test that it works on the website.*//////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name){
    for (var i = 0; i < animals.length; i++){
        var itsName = animals[i].name.toLowerCase();
        if (name.toLowerCase() === itsName){
            animals.splice([i], 1);
        } 
    } //return animals;
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Create 
/* Write a function called `add` with a signature of `add(animals, animal) { //... }` that:
   x Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
   x Checks that the animal Object has a `name` property with a length > 0.
   x Checks that the animal Object has a `species` property with a length > 0.
   X  Has a **unique** name, meaning no other animals have that name.
   X Adds this new Object to the `animals` Array, **only** if all the other conditions pass.
   X Make sure it works.
   */ ////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 function add(animals, animal){
     var aniName = animal.name.length;
     //variable that references the name property in the animal object
     var aniSpec = animal.species.length;
     //var that refs species prop in the animal obj
     if (aniName >= 0 && aniSpec >= 0){
         //conditional statement to test length properties 
        for (var i = 0; i < animals.length; i++){
            //for loop that runs through the array's test area
            if(animals[i].name.toLowerCase() !== animal.name.toLowerCase()){
                //conditional statement that accesses property and then changes them both to lower case to do
                //strict comparison
                 animals.push(animal);
                 //push animal object intointo the animals array
             } else if (animals[i].name.toLowerCase() === animal.name.toLowerCase()){
                       //additional conditional statement to compare if there IS a match
                        return null;                 
                        //Do nothing
                        
        } 
        
    }
 }
 }

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}