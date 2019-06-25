/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structures.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};

animal.species = 'Hippogriff';
animal['name'] = 'Buckbeak';
animal.noises = [];
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];

noises.push('Screech');
noises.push('Squawk');
noises.unshift('Shriek');
noises[noises.length] = 'Caw';
console.log(noises.length);
console.log(noises.length - 1);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////



animal.noises = noises;
animal.noises.push('Warble');
console.log(animal);
/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

/////////////////////////////////////////////(/////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);

var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };

animals.push(duck);
console.log(animals);

var panda = { species: 'panda bear', name: 'Totoro', noises: ['chew', 'snore', 'yawn'] };
var luckdragon = {species: 'luckdragon', name: 'Falcor', noises: ['Roar', 'Laugh', 'Grumble']};

animals.push(panda);
animals.push(luckdragon);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = [];
//empty array
function getRandom(){
    return Math.floor(Math.random() * animals.length);
} //Math random function returns a random index value

var ranAnimal = animals[getRandom()];
//this add pushes the getRandom function into the animals Object
friends.push(ranAnimal.name);
// pushing the nested getRandom object-function into the friends array 
animal['friends'] = friends;
//now adding a new key value pair named friends, that holds the newly returned friends array

console.log(friends);
console.log(animals);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
