// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 */    
 
 /* 
 *  b. Create a Function called makeContactList that returns an Object 
 *     that manages contacts. 
 
 
 *      The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 * 
 * 2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 * 
 * 3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *  
 * 4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
let newCont = {};
newCont.id = id;
newCont.nameFirst = nameFirst;
newCont.nameLast = nameLast;
return newCont;
}
/*created a function where there is a new object declared with k/v'
s {id: "id", nameFirst: "nameFirst", nameLast: "nameLast"}
 when called, makeContact returns the new object "newCont"
*/

function makeContactList() {
    var contacts = [];
    return {
        
    length: function() {return contacts.length;},
        
    addContact: function(contact){contacts.push(contact);},
    //created an anonymous function that takes parameter of 'contact'
        //acceses contacts array to push value of 'contact' TO array
    
    findContact: function(fullName){
        //created an anonymous function that takes parameter of fullName
        for (let i = 0; i < contacts.length; i++){
         /*THIS function loops through contacts to CHECK something
         loop through array to see if index matches fullName during iteration*/
            let firstName = contacts[i].nameFirst;
            //declare a variable in local scope that references global scope 
            let lastName = contacts[i].nameLast;
            let user = `${firstName} ${lastName}`;
            // create let variables
            if(fullName === user){
                //if full name is strictly equal to user, return value
                return contacts[i]
            } 
            return undefined;
        }

        //iterate through contacts
        //check if the given fullName === fullName in a contact
            //a contact has an id, a firstName, and a lastName
            //fullName = first & last name
            // if first and last name match the fullname, return the contact object,
            
            //if there are no contacts in the last match the fullName, return "undefined"
    },
        removeContact: function(contact){
        for (let i = 0; i < contacts.length; i++){
            let firstName = contacts[i].nameFirst;
    
            let lastName = contacts[i].nameLast;
            let user = `${firstName} ${lastName}`; 
            if(user === contact.nameFirst + " " + contact.nameLast){
                var matchCon = contacts.splice(contact[i], 1);
                return matchCon;
            }
            //input contact is an object
            //output is contact array without the contact in the list
            //how can we remove one element from an array
            //find the matching contact
            //remove the matching contact, do nothing
        
        }            
        },
        
        printAllContactNames: function(){
            let conArr = [];
        for (let i = 0; i < contacts.length; i++){
            let firstName = contacts[i].nameFirst;
            let lastName = contacts[i].nameLast;
            let user = `${firstName} ${lastName}`;
                conArr.push(user);
        } return conArr.join('\n');
}}
};

            //Input: nothing
            //Output: A string of our contacts full names, separated by a new line break
            //Constraints: Last full name should have no new lines added after it
            //edgecases : we need new-line characters(\n) eg ('hello\nthere')
    
            //Iterate over all of our contacts in the array
            //Print the first and last names
            //Separate each fullName with a \n
            //We do not want to have a \n on the last full name
            
// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}