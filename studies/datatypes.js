/*
*
*
*
********************************************************************************
*                               DATA TYPES                                     *
********************************************************************************
*
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
* 1. Strings
*
*   "Simple Data Type"
*
*   Strings are a primitive (simple) data type that is a collection of characters or symbols, 
*   surrounded by quotes. We can also combine string defined variables to form new 
*   strings by using "+", this is called "Concatenation".
*/
                        var thisString = "Jill";
                        var thatString = "Poole";
                        var myString = thisString + thatString;
                        console.log(myString);
                        
/*  -> JillPoole prints to the console because whitepace is ALSO considered part 
*   of string and should also be enclosed in quotes or as part of another to be
*   printed.
*/    
                    
                var myString = thisString + " " + thatString + ".";
                        console.log(myString);
                    // -> Jill Poole. properly concatenated
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
*    curly brace, we call the function by using it's name with [or without]
*    [arguments in] parenthesis 
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
*    create empty arrays and add in values later using methods, we can 
*    access specific "elements" in an array by using bracket and dot notation.
*/

                    var myFirstArray = []; 
/*  This is an array Literal, an array that has been "literally" created, but
*   hasnt been assigned any value.
*/
                    myFirstArray.push("Pushy", 12, true, []);
/*  By using the ".push()" method, I've included new values I want added to
*   my array. I can even add other Objects or arrays to my array.
*    
*
*                  ******     Bracket Notation     ******
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
            console.log(myFirstArray[myFirstArray.length - 1]);
                     // -> prints [] to the consolel 
/*
*
*                       *   
**  The length - 1 property returns the the LOCATION of the final element, because
*   the computer's index begins at 0, 1 is subracted to return the indexed location.
*
*
*                        *****  Dot Notation  ******   
*/                   console.log(myFirstArray.length);

//  The .length property gives me the length of an array, just like with Strings!
                                //-> 4   
/*
*   Arrays have a plethora of different methods in which they are used to add to,
*   or alter an array, some are even interchangeable and can be used on objects 
*   as well, thats because Arrays are just Objects in disguise.
*
*
*  4. Objects
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
* 5. Functions
*
*
*
*   (){}
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
                }
                
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
*/


/** 6. Undefined
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
*    The value null represents the intentional absence of any value, and 
*    is also a primitive data type. It is NOT the same as undefined. Something 
*    that is undefined has been declared but unassigned, however something null 
*    has had no declaration or initialization and is therefore devoid of any value.
*
*/
                                westeros;
    /* => ReferenceError: westeros is not defined and has never been initialized
    with an assignment operator*/
             //it doesnt return 'null', it just IS null

                
                              var westeros;
                //=> 'undefined', it's been declared but is unassigned
                
                            var ironThrone = null;
                     //null CAN be assigned to variables
                            
                            console.log(ironThrone);
                               //=> null
/*
*
*    8. NaN
*
*   "NaN" is is a primative data type that is
*    returned when Math functions fail, its a property that has a value representing
*   "Not a Number".
*/
                            (Math.sqrt(-2)); 
                                 //=> NaN
/*
*
*   9. Infinity and -Infinity
*
* 
* 
*   Infinity is a alpha-numeric value representing the non-writable number:
*   infinity. Infinity is greater than any other number, and negative infinity 
*   is less than any other number.
*   Mathematically, this value behaves the same as infinity would if it were written
*   (non-writable) numerical form. Inifinity has to be written with a capital 
*   "I" or it will be read as an undefined variable
*/ 

                            console.log(Infinity * 2);
                            //=> Infinity
                            console.log(Infinity / 2);
                            //=> Infinity
                            console.log(Infinity / 0);
                            //=> NaN
                            
                    //Negative Infinity behaves Similarly
                    
                            console.log(-Infinity * 2);
                            //=> -Infinity
                            console.log(-Infinity * 0);
                           //=> NaN
                            console.log(-Infinity / 2);
                            
                            //=> -Infinity
/*
*
*
*    10. Primitive/Simple Data Types vs. Complex Data Types
*   
*
*       Simple Data Types & Copy Value
*   Numbers / Strings / Booleans / NaN / undefined / null
*   
*   Simple (Primitive) data types cannot hold or collect other value types and 
*   are immutable, meaning they cannot be changed. Variables are in the middle,
*   Meaning they hold these simple data types,(Numbers, Booleans, Strings, etc)
*   but unlike complex data types, they are fixed size in memory to be able to 
*   hold the exact size of the largest possible simple data type, a number that
*   is 8 bits.
*
*
*  I digress.
*    
*   Simple Data Types stored in Variables, and variables stored in Complex Data 
*   Types are the building blocks of programs. If simple they have 
*   functions performed on them, they only return *new* values, the old value 
*   remains unchanged.
*   
*/

                            var home = 'Gallifrey';
                    //holds the Simple Data Type Value of a 'String'
                           
                            var sweetHome = 'ZZ6PluralZAlpha';
                     //the value of home is copied into sweetHome
                            
                            var sweetHome = 'Magrathea';
                                console.log(home);
             //=> 'Gallifrey', the primitive value of home hasnt changed
                    
/*
*
*       Complex Data Types & Copy by Reference
*   Arrays / Objects / Functions
*   While Simple Data types can only hold a certain amount of data (8 bytes, the
*   size of a variable), Complex Data Types can be ANY size!
*
*/
                     var doctorWho = {
                        name: "The Doctor",
                        age: "10th Life Cycle",
                        companion: ["Rose", "Donna", "Martha", "Amy"],
                        contact: function phoneHome(){
                            return "Call the Doctor!";
                                }
                            };
    //An Object(Complex Data Type) that holds both simple and complex data types
                            
                     var tardis = doctorWho;       
/*          The value now stored in 'tardis' is a reference to the 
            values stored in 'doctorWho', they now both point to the same 
            object.   
*/
/*  If I were to change any of the values in the new object tardis, they will also
    reflect in the original object, because both objects reference the same thing.
*/
                        tardis.age = 13;
                        console.log(doctorWho);
/*                      { name: 'The Doctor',
                        age: '13',
                        companion: [ 'Rose', 'Donna', 'Martha', 'Amy' ],
                        contact: [Function: phoneHome] } 

                        
*    Because Complex Data Types do not have a fixed size, their values cannot be
*    stored directly in 8 bytes of memory, so to be able to be stored in
*    variables, they are stored in variables as a reference. Because they are
*    stored as a reference to the data type and not the type itself, not only is
*    the interpreter able to look where to find the value, but Data Types copied
*    by reference are mutable and can be changed.
*/