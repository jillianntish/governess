/*
*
*
*
***************************************************************************
*                               DATA TYPES                                *
***************************************************************************
*
*
*
*
*
* 0. Numbers
*
* 0010110
*
*  Numbers are a simple or primitve data type that consists of a literal integer
*  without quotes. In programming, we can define variables with values that are 
*  numbers or algebraic expressions */
                    
                    var thisNumber = 12;
                    console.log(thisNumber);
                    // -> 12
                    var multiNumber = 2 + 2;
                    console.log(multiNumber);
                    // -> 4
                    var newNumber = thisNumber + multiNumber;
                    console.log(newNumber);
                    // -> 16
/*
*
*
*
*
*
*
* 1. Strings
*
*   "Simple Data Type"
*
*   Strings are a primitive(simple) data type that is a collection of characters or symbols, 
*   surrounded by quotes. We can also combine string defined variables to form new 
*   strings by using "+", this is called "Concatenation".
*/
                        var thisString = "Jill";
                        var thatString = "Poole"
                        var myString = thisString + thatString;
                        console.log(myString);
                        
/*  -> JillPoole prints to the console because whitepace is ALSO considered part 
*   of string and should also be enclosed in quotes or as part of another to be
*   printed.
*/    
                        var thisString = "Jill";
                        var thatString = "Poole"
                        var myString = thisString + " " + thatString + ".";
                        console.log(myString);
                    // -> Jill Poole properly concatenated
/*  We have access to the individual characters in a string by using something
*   called "bracket notation".
*/
                        console.log(myString[0]);
                        // -> J
                      
                        console.log(myString[myString.length-1]);
                        //-> "."
/*                        
*  We can access the final character in a string by using the length property
*  ".length -1"
*
*
*
*
*
*
* 2. Booleans
*
*    T/F? 
*
*    Boolean values are primitive Data Types that have one of two possible values.
*    When invoked, Booleans return a value of "true" or "false", and behave very
*    much like an on/off switch.
*  
*/
                    var firstBoolean = true;
                    var secBool = false; 
                    function testBool(boolean){
                        if (firstBoolean === secBool){
             //if these two values are the same, return a Boolean value "true"
             // "===" is a 'Logical' Operator that says "strictly equal to"
                            return true;
                        } else {
                //if these two values are not the same, return false
                            return false;
                        }
                        
                    } testBool(); 
/*   We get the result of our function by "calling" its name outside the last
     curly brace, we call the function by using it's name with [or without]
     [arguments in] parenthesis */
/*
*
*
*
*
*
*
* 3. Arrays
*
*    [ ]
*
*    Arrays are Complex Data types used to store other data types. 
*    They are indexed lists that begin at zero(0).
*    They have a variety of methods and property reference methods. We can 
*    create empty arrays and add in values later using these methods, we can 
*    access specific "elements" in an array by using bracket and dot notation.*/

                    var myFirstArray = []; 
/*  This is an array Literal, an array that has been "literally" created, but
*   hasnt been assigned any value.
*/
                    myFirstArray.push("Pushy", 12, true, []);
/*  By using the ".push()" method, I've included new values I want added to
*   my array. I can even add other Objects or arrays to my array.
*    
*
*                      Bracket Notation
*
*
*   To access the VALUE at any index position, use bracket notation.
*/
                    console.log(myFirstArray[0]);
                             // -> "Pushy"
/*                    
*
*   I wont always know how many indices there are so if I want to access the 
*   final vaue in any array, the property ".length-1" 
*
*/
            console.log(myFirstArray[myFirstArray.length-1]);
              // -> prints [] to the console, bc its an array literal
/*
*
*                           Dot Notation         
*
*/
                    console.log(myFirstArray.length-1);
/*  The length-1 property returns the the LOCATION of the final element, because
*   the computer's index begins at 0, 1 is subracted to return the indexed location.
*/                   
                    console.log(myFirstArray.length);
//  The .length property gives me the length of an array, just like with Strings!
                                //-> 4   
/*
*   Arrays have a plethora of different methods in which they are used to add to,
*   or alter an array, some are even interchangeable and can be used on objects 
*   as well, thats because Arrays are just Objects in disguise.
*
*
*
*
*
* 4. Objects
*
*
*    { }
*
*    Objects are complex data types that are used to store other data types. 
*    They are non-indexed lists that consist of 'Key': "Value" pairs, or '
*    properties' stored inside Curly braces. Similar to arrays, empty Objects 
*    can be declared as variables, and they can grow infinitely.
*/
                        var iObject = {};
                      //An object Literal

                var myObject = {
                myName: "Jill",
                        //we separate "properties" in Objects with commas
                        //myName is the Key, "Jill" is the value
                myAge: 30,
                        //Objects can hold Numbers
                myFaves: ["Gardening", "Mixing", "Coding"],
                        //they can also hold arrays
                myHeart: true
                        //they definitely hold Booleans
                    };
/*  Objects can be written on one line but its easier to read all code when 
*   it's indented and cascading down the page.
*
*   If if decide I want to change any of the properties my Object, I can achieve
*   this by using by using dot or bracket notation.                          
*/
                    myObject.myName = "Tish";
                    //an example of "dot notation"
                    
                    myObject["myAge"] = "Forever Young";
                    //an example of bracket notation, dont forget the quotes!
                    
                    console.log(myObject);
                /* -> { myName: "Tish",
                    myAge: "Forever Young"
                    myFaves: ["Gardening", "Mixing", "Coding"],
                    myHeart: true
                    }; 
                */
/*
*
*   If I want to add a whole new property (key+value) to my Object,thats also
*   easily done with Dot notation.
*/

                     myObject.myHome = "Treme";    
                     myObject.myCats = { 
                                        color: "Black",
                                        count: 2,
                                        loved: true
                                        };
                     
/*  I just added 2 new properties to my first Object, one is a string, the other 
*   is another Object!
*/                    
                     console.log(myObject);
                    /* -> { myName: 'Tish',
*                            myAge: 30,
*                            myFaves: [ 'Gardening', 'Mixing', 'Coding' ],
*                            myHeart: true,
*                            MyAge: 'Forever Young',
*                            myHome: 'Treme',
*                            myCats: { color: 'Black', count: 2, loved: true }
*                          }
*
*    Objects are not like arrays in the sense they do NOT have a length property,
*    however they are similar to arrays in the sense they both use Dot or 
*    Bracket notation to gain access to the specific values (arrays) or (properties)
*    within them.
*     
*
*   To access the value at a specific key, both Dot and Bracket Notation are 
*   accepted
*/
                        console.log(myObject['myFaves']);
                        //-> [ 'Gardening', 'Mixing', 'Coding' ]
                        //Bracket notation requires quotes
                        
                        console.log(myObject.myFaves);
                        //-> [ 'Gardening', 'Mixing', 'Coding' ]
                        //No quotes are needed for Dot notation
/*
*
*
*
*
*
*
* 5. Function
*
*
*
* (){}
*
*
*   Functions are reusable blocks of code that accept inputs, processes them,
*   and then RETURNS new values as outputs.
*
*   Functions are declared in Four Parts:
*               - By Name [in relation to the what they do]
*               - In Parameters/Arguments (Both in Parantheses)
*               - A Function Body, where the code runs
*               - A Return Statement
*
*
*               - - Function Syntax - -
*
*
*                  **Declaring a Function**
*
*/
                function funcName (parameter) {
                         return myObject;
                                 };
                
/*  Parameters are used just as placeholders for 'Arguments' in functions and
*   hold no value. Arguments are also optional, and "passed" or given to the
*   function when they are called.
*  
*   Functions optionally have a return statement, however, if a return statement
*   IS present, it MUST be used inside the function body. 
*   Console Log and Return are NOT the same thing.
*
*
*                   **Calling a Function**
*
*   Calling a function runs the code in it's body
*/
                     funcName(); // Arguments are Optional
/*                  =>{ myName: 'Tish',
*                            myAge: 30,
*                            myFaves: [ 'Gardening', 'Mixing', 'Coding' ],
*                            myHeart: true,
*                            MyAge: 'Forever Young',
*                            myHome: 'Treme',
*                            myCats: { color: 'Black', count: 2, loved: true }
*                          }
*
*
*   Functions that contain other functions or return functions are called "First
*   Class" or "Higher Order" Functions.
*
*
*
*
* 6. Undefined
*
*   Undefined is a primitive data type that is automatically assigned to 
*   variables that have just been declared, but not assigned any value. 
*   or to formal arguments for which there ARE no actual arguments.
*   
*/
                            var undFined;
   //A variable has be declared but not assigned with '=' Assignment operator
                        console.log(undFined);
                            //-> undefined
/*
*
*
*   7. Null
*
*    Null is primitive data type that represents the intentional absence of any 
*    object value, it is not an identifier for a property of the global object,
*    like undefined can be. "Null" expresses a lack of identification, 
*    indicating that a variable points to no object.
*
*    8. NaN
*
*   "NaN" is is a primative data type that is
*    returned when Math functions fail, its a property that has a value representing
*   "Not a Number".
*/
                        (Math.sqrt(-2)) 
                        //=> NaN
/*
*
*   9. Infinity and -Infinity
*
*    Infinity is a numeric value representing the non-writable number infinity.
*    The value Infinity (positive infinity) is greater than any other number, 
*    as negative infinity is less than any other number.
*    Mathematically, this value behaves the same as infinity; 
*    for example, any positive number multiplied by Infinity equals Infinity,
*    and any number divided by Infinity equals 0.
*
*
*
*
*    10. Primitive/Simple Data vs. Complex Data
*   
*   Primitive values are passed to a function by copy, meaning their value is 
*   stored in a variable and when it's reassigned, we use the '=' Assignment
*   Operator to copy it's value to a new variable
*
*    When a reference type value, an object, is copied to another variable 
*    using =, the address of that value is what’s actually copied over as if it
*    were a primitive. Objects are copied by reference instead of by value.
*
*
*
*   
*
*/