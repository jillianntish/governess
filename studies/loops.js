/*
*
*
*
*
*
*
********************************************************************************
*                                   Loops                                      *                  
********************************************************************************
*
*
*
*   Stay D.R.Y.!
*
*
*   0. Loops
*       
*   In programming, Loops are used to dynamically repeat blocks of code, in lieu
*   of typing out the same statement repititously throughout the code. Loops are
*   also used to iterate or "loop through/over" a data collections, like an 
*   Arrays and Objects. There are three types of Loops that will perform these 
*   tasks for us, they are called "For", "For-In", and "While" Loops. These 
*   helpful built-in JavaScript constructs work best when you know the number of
*   times to execute a block of code, and also make sure you "Dont Repeat 
*   Yourself"
*
*   Loops consist of three important parts: a 'Start Condition', a 'Stop Condition',
*   and an 'Incrementor', or 'Decrementor'.
*
*                              var i = 0; 
*                           //Start condition
*                 
*                                i < 5;
*                           //Stop condition 
*     //at some point, must the condition MUST become false to stop the loop
*     
*                                 i++; 
*                           //Incrementor
*                //tells the loop to move forward one position
*                
*                                 i--; 
*                           //Decrementor
*                //tells the loop to move backwards one position
*   
*
*       A. Start Condition
*   The Start condition is a defined variable in a loop that tells the loop 
*   where to start. It is often represented as "i", for "index", and most times
*   set at 0 if the loop is iterating 'forward'. Equally, a Loop that iterates
*   backwards would have a start position representing the end of the collection.
*   Ergo, looping backwards through an array would have the start position of 
*   'array.length - 1'.
*
*                            var i = 0; 
*                //start condition at the 0 index value
*              //this is a start condition that will loop forwards
*                        
*                    var i = array.length - 1; 
*            //start condition at the final index value
*            //this is a start condition that will loop backwards
*
*
*       B. Incrementor/Decrementor
*    The Incrementor or Decrementor tells the loop which way to move, and how many
*    positions to increment or decrement over each iteration. When the double plus
*    sign is used, it tells the loop to move forward one position, it can also 
*    be used to perform other arithmetic operations in a loop.
*
*                        (i++ === i + 1);
*                        //i++ is the same as i + 1
*                        //moves forward one position
*
*
*                        (i+2 === i + 2);
*                        //i+2 is the same as i + 2
*                        //moves forward two positions
*
*
*                        (i % 3 === i / 3);
*        //i % 3 uses the modulo or '%' sign to retain the remainder of a number
* 
*       Incrementors become Decrementors when they yield descending values, 
*       Decrementors tell the loop to move backwards a position, are double 
*       "minus" signs, they an also be used to perform arithmetic within a loop 
*       as well. While it seems like their action happens right in the MIDDLE
*       of the loop, the Incrementor/Decrementor lives at the END of the Loop's 
*       syntax.
*
*                        (i-- === i - 1);
*                        //i-- is the same as i - 1
*                        //moves backward one position
*
*                        (i-2 === i - 2);
*                        //i-2 is the same as i -2
*                        //moves backwards two positions
*   
*
*
*       C. Stop Condition
*   The Stop condition tells the loop where to finish, because the Stop condition
*   is based on a Boolean(T/F) value, it MUST yield a false result at some point
*   to stop the loop. If it never reaches a false condition will turn into an
*   "Endless" Loop, which will in turn crash the program.Loops must reach a 
*   'false' stop condition in able to literally stop the loop from spiraling out
*   of control.
*
*
*   While their action takes place at the end the loop, the Stop Condition's
*   position in the syntax is nested between the start condition and the 
*   Incrementor/Decrementor.
*             
*                            i < array.length;
*                  
*                   //Stop condition is the end of array
*                    
*   This Stop Condition tells the loop; "as long as the variable i's index
*   position during the loop is less than the end of this array, keep iterating
*   forward".
*    
*
*       Looping In Reverse
*                                  
*   When Looping in Reverse, the Stop Condition starts at the end of the array.
*   As with a regular loop, it must reach a false value in order to break out of
*   of a loop.
*        
*                                   i > -1;
*   This Stop Condition tells the loop; "As long as the variable i's index position
*   during the loop is greater than -1 (essentially, equal to 0 in this case),
*   keep looping backwards.
*
*
*   
*   Once the Start Condition, Stop Condition, and Incrementor or decided on, they
*   are put together and separated by commas in this syntax:
*
*
                       for (var i = 0; i < end; i++;)
                //Start Condition; Stop Condition; Incrementor;
                                
*                                   or
                        
                        (var i = end; i > 0; i--;)
                //Start Condition; Stop Condition; Decrementor;
*
*
*   Now that we know the basic syntax for Loops, let's learn how and when to use
*   the different kinds that are offered in JavaScript's constructs
*
*
*   
*   E. Types of Loops
*
*
*       0. For Loops
*       For Loops are the most popular kind of loops and are used in arrays. For
*       Loops are great When we know exactly how many times we want a code
*       block to run. They utilize the keyword "For", followed by the following 
*       syntax in paranthesis.
*
*              for (var i = theBeginning; i < theEnd; i++){
*                        //run this code block
*                               }
*     The var 'i' will start at theBeginning, increment by one, and run until 
*     the loop reaches theEnd
*/
 var companion = ["Rose", "Martha", "Donna", "Amy", "Ryan", "Clara", "Bill"];
                for (let i = 0; i < companion.length; i++){
                     console.log(companion[i]); 
                    }
/*                           => Rose
                                Martha
                                Donna
                                Amy
                                Ryan
                                Clara
                                Bill
*/                                
    var companion = ["Rose", "Martha", "Donna", "Amy", "Ryan", "Clara", "Bill"];
                for (let i = companion.length; i > -1; i--){
                     console.log(companion[i]); 
                    } 
/*                           => Bill
                                Clara
                                Ryan
                                Amy
                                Donna
                                Martha
                                Rose                    
                       
/*      1. For-In Loops 
*       For-In Loops are best for Looping through Objects because they have no 
*       length property. For-In Loops run through the Objects Key/Value pairs 
*       once and then stop.
*/
                        var tardis = {
                            color: 'blue',
                            material: 'wood',
                            number: 911,
                            size: "Bigger on the inside"
                        };
                        
                        for (var key in tardis){
                            console.log(key);
                        }
/*                          => color
                               material
                               number
                               size
*/                            
                        var tardis = {
                            color: 'blue',
                            material: 'wood',
                            number: 911,
                            size: "Bigger on the inside"
                        };
                        
                        for (var key in tardis){
                            console.log(tardis[key]);
                        }                              
/*                           => blue
                                wood
                                911
                                Bigger on the inside
                                
/*      2. While Loops
*       While Loops are very similar to For Loops with a few things omitted. 
*       Whereas in For Loops we often use a conditional "if" statement, While loops
*       run based on a truthy value alone, deeming a conditional outside of the 
*       "while" line unnecessary. As long as condition resolves to true, the 
*       loop will iterate.
*
*                         var i = 0;
                    while(i < theEnd){
                        //run this code
                            i++;}
                    
/*      To break out of the While loop, the Incrementor(or Decrementor) MUST be
        be set, failing to do so will cause an infinite loop.
        
*/
                   var docSays = "Allons-y";
    var companion = ["Rose", "Martha", "Donna", "Amy", "Ryan", "Clara", "Bill"];
                      var i = 0;
                    while(i < companion.length){
                    console.log(docSays + " " + companion[i] + "!");
                        i++;
                 //remember to include this incrementor so the loop ends!
                        }
/*                      =>  Allons-y Rose!
                            Allons-y Martha!
                            Allons-y Donna!
                            Allons-y Amy!
                            Allons-y Ryan!
                            Allons-y Clara!
                            Allons-y Bill!
*/                            
                                var docSays = "Allons-y";
    var companion = ["Rose", "Martha", "Donna", "Amy", "Ryan", "Clara", "Bill"];
                                 var i = 0;
                        while(i > companion.length){
                    console.log(docSays + " " + companion[i] + "!");
                                    i++;}
                                
/*                          => undefined 
       -> because 'i' is already greater than zero, this loop does not run
*/
                         var docSays = "Allons-y";


var companion = ["Rose", "Martha", "Donna", "Amy", "Ryan", "Clara", "Bill"];
                              var i = companion.length - 1;
                              //start at the final place value
                              while(i > 0){
                              //stop when the index 0 is reached
                              console.log(docSays + " " + companion[i] + "!");
                              i--;}
                                //dont forget the decrementor this time
/*      
                         => Allons-y Bill!
                            Allons-y Clara!
                            Allons-y Ryan!
                            Allons-y Amy!
                            Allons-y Donna!
                            Allons-y Martha!
                            Allons-y Rose!
*/                            