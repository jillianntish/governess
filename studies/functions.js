/*
*
*
* 
* 
*
*
********************************************************************************
*                              Functions                                       *
********************************************************************************
*
*
*
*
*      0. What are Functions? (hint){task-masters}
*
*   Functions are reusable blocks of code that take inputs, process them, and 
*   return new data value outputs. They consist of a name, parameters and arguments,
*   a function "body" that the code lives inside of, and a return statement.Functions 
*   are designed to do particular tasks, and are "invoked" when they're "called".
*
*
*                   function iAmAFunction(parameter 1, parameter 2){
*                            *insert cool code here*
*                          *insert optional return statement here*
*                                      }
*                               
*                               iAmAFunction();
*
*
*      1. Phase One of Functions : Declaring & Defining
*
*   The first step in creating a function is to declare a function by using the
*   'function' keyword, followed by a name typed in camel case, a set of paranthesis,
*   and curly braces. Inside the parenthesis are optional parameters, and inside
*   the curly braces is a block of code and an optional return statement.
*/
                    function myPrecious(){
                      console.log("one to rule them all");
                    }
              //this function returns the string "one to rule them all"
/*
*
*       1a. Parameters
*
*   Functions can *optionally* take inputs called Parameters, and *optionally*
*   return a single value.  Parameters are located within the paranthesis after
*   the function definition, if there is more than a single parameter, they are
*   separated by commass Parameters serve as placeholders, like car seats for
*   passengers, for the arguments that will be passed to the function later on.
*    
*
*/
                        function mrBaggins(string){
                          //'string' is the optional parameter
  //parameters are named so it's clear what needs to be passed through the function
              console.log("Hello!" + " " + "Lovely day in the Shire innit?");
                                     }
                                     
/*      2. Phase Two of Functions : Invoking / Calling a Function
*
*   This function holds the optional parameters 'string', and 'number'. It is
*   declared and defined but will still do absolutely nothing in this state.
*   In order to get a function operational, it must be invoked, or "called" 
*   using it's name, followed by paranthesis.
*
*   Functions are invoked (operational) when they are called by name. However, 
*   not all functions have names. Some are nameless, and called "Anonymous" Functions,
*   they're usually written while being passed to other functions. When an anonymous
*   function is assigned to a variable, it is called a "Function Expression"
*
*   like when mom used to call everyone home for dinner, she'd cup her hands to
*   her mouth and call out our names, i.e:
*
*/
                            mrBaggins();
                   // => "Hello! Lovely Day in the Shire, innit?"
/*
*       2a. Arguments
*
*   Are the values received by the function when it is invoked, another way to 
*   say that is we "pass" arguments to the function when it is invoked, it is also
*   possible to have more arguments that parameters in a function. Functions
*   return single outputs.
*
*/                        
                        
                          function mrBaggins(string) {
  console.log("Hello" + " " + string + "!" + "Lovely day in the shire, innit?");
                            }
                              
                              mrBaggins('Frodo');
              //=> "Hello Frodo! Lovely day in the shire, innit?"                    
                              
/*      We pass in the string of 'Frodo' as an argument instead of
*       harcoding Frodo's name, this makes the code more dynamic, and it also 
*       means we can call it repeatedly to return different values.
*/

                              mrBaggins('Gandalf');
                 //=> "Hello Gandalf! Lovely day in the shire, innit?"
                     
                              mrBaggins('Samwise');
                //=> "Hello Samwise! Lovely day in the shire, innit?"   
        
/*      Calling a function without the paranthesis will return the function 
*       definition instead of the result of the function's task.
*                     
*
*       6. Closures, Scope & Hoisting
*
*   When a function reaches a return statement, it will stop executing, similar to
*   return statements in "if, else-if" chains. However, the code in the function is
*   not returned or printed to the console from within until tt is invoked. When
*   functions return other functions or contain other functions, they are called
*   "Higher Order" or "First Class" Functions.
*   
*/
                        function destroyRing(){}
/*
*   Functions can see and modify variables in parent or global scopes.
*   The inverse is NOT true, ergo global variables cannot access variables inside
*   the function. While the function is performing it's task, the parameters and 
*   arguments behave as local variables. 
*/              
                            hobbitHello("Legolas");
                    //the function, called before it appears
/*
*   The function hobbitHello is a 'Named' variable, meaning it will be hoisted
*   to the top of it's scope, meaning it can be referenced or used before it appears
*   in the final code sequence.
*/        
                          function hobbitHello(string) {
  console.log("Hello" + " " + string + ", " + "Lovely day in the shire, innit?")
                        }
                        
          // => Hello Legolas, Lovely day in the shire, innit?

/*  The named function 'hobbitHello' prints even though it is called before it 
*                         appears in the script.
*         
*         
*   Since local variables are only recognized inside their functions, variables 
*   with the same name can be used in different functions.
*   Local variables are created when a function starts, and deleted when the
*   function is completed.That means that variables declared inside a function,
*   become local to the function, and therefore can only be accessed from within
*   the Function.
*/
                        function hobbitHi() {
                        var name = 'Pippin'; 
             // name is a local variable in the Parent Scope
                     function greetHobbits() { 
      // greetHobbits() is the Closure in the hobbitHi
     console.log("Hello" + " " + name + "! " + "A bit dreary today innit?"); 
   // the name variable from the local scope is available here!
                                 }
                            greetHobbits();
            //we call greetHobbits so it will start it's task
                                 }
                            hobbitHi();
              //we call hobbitHi so it will start IT'S task
             // => Hello Pippin! A bit dreary today innit?
                        
                        
                        var name = 'Pippin';
                // name is declared in the global scope
                         function hobbitHi() {
                       function greetHobbits() {
   console.log("Hello" + " " + name + "! " + "A bit dreary today innit?"); 
        // we have access to global variables here, so we can use name
                              }
                              greetHobbits();
    //the function greetHobbits is only available within the hobbitHi function
                            }
                            hobbitHi();
                 // => Hello Pippin! A bit dreary today innit?
                        
                        
                        function hobbitHi() {
                         var name = 'Pippin';                                                  
                function greetHobbits() {
   console.log("Hello" + " " + name + "! " + "A bit dreary today innit?");
        //name is declared within our function, we can use it here
                          }
                          greetHobbits();
                        }
                        hobbitHi();
                        
                        console.log(name);
// Prints name is not defined, because we cannot access a variable declared in 
// a function outside of the function