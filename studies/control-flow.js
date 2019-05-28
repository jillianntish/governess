/*
*
*
*
*
*
*
*
*
********************************************************************************
*                             CONTROL FLOW                                     *
********************************************************************************                             
*
*
*
*   Control flow in a program is managed by Conditional Statements, or Switches
*   and "If-Else If" Chains, that that operate based on boolean values. Conditional
*   statements use Logical Operators to evaluate unary, binary, and ternary 
*   values.
*
*
*
*   0.If Statement
*
*
*       If...Then!
*
*
*   If Statements utilize the keyword "If" to 'Check' if a specific 'Condition'
*   evaluates to true. If the first condition is false, the code block returns 
*   the alternate code located in the "else" portion of the chain. When a block
*   of code is returned true, the remainder of the chain gets ignored, If-Else If
*   chains are read and run top to bottom in JavaScript.
* 
*/ 
             //Conditional Statement with Unary Operator
                if (this condition is true then){
                        //code block
                            }
                            
                            
                            or
                            
                if(this condition is true){
                    //run this code
                    } else {
                        // the condition is false so run that code
                            }
            
/*  Code stops running if the 1st condition evaluates to true. If the first 
*   condition evaluates to false, the code tests a second condition, this begins 
*   a chain called:
*
*                           "If - Else If"
*
*   1. Else if
*       "Else if" statements utilize the keywords "else if" and follows the 
*        initial "If" statement with a second conditional to be checked. There 
*        will be an "Else If" statment only if the result of
*        the first conditional statment is false. If the second conditional 
*        statment evaluates to true, the program will run this block of code.
*            
*/                        
                         else if (1 === 1){
                            return 'thats true';
                        }
/*    
*   2. Else
*       If the first two conditional statments are false, the THIRD code block
*       runs, it is also considered a "default" statement, and is returned only
*       if all other statements yield a "false" value.
*
*/
                        else    {
                            return undefined;
                            }
/*
*
*    When constructed together the proper syntax for "If-Else If- Else" Chains:
*
*/  
        //Ex. 1       
                    if (1 === 1){
                       console.log(true); //this will execute because it IS true
                    }    
                     else if (1 === 'one'){
                        console.log("that's true too");
                    } else {
                        console.log('hella false');
                    }
                    
        //Ex. 2    
                    if (1 !== 1){ 
                        console.log(true);
                    }    
                     else if (1 === 1){
                        console.log("that's true too"); 
                        //this block executes and the code stops
                    } else {
                        console.log('hella false');
                    }

        //Ex. 3         
                    if (1 !== 1){
                        console.log(true);
                    }    
                     else if (1 === 'one'){
                        console.log("that's true too");
                    } else {
                        console.log('hella false');
                        //this block will execute since both conditions are false
                    }
/*
*
*
*
*
*
*
3. Switch
*
*
*
*   Don't forget to take a break!
*
*
*   The Switch method evaluates an input expression, matches the 
*   expression's value to a case clause, and then executes at statement associated
*   with that case.
*
*/
                        switch(expression) {
                         case 1:
                        // code block
                        break;
                        case 2:
                        // code block
                        break;
                        default: 
            //The default keyword tells code to run this if there is no match
                            }

/*   Switch statements MUST include a break statement using the keyword "break".
*   Break allows the code to break out of the switch box and move to the next
*   switch by stopping the execution in that block, similar to a Stop condition
*   in a loop. If there is no break statement, the next block of code will execute
*   whether or not it matches the value of the input expression.
*/

        switch(color){
            case "magenta":
                console.log("The color Is magenta");
                break;
            case "fuschia":
                console.log("The color is fuschia")
                break;
            case "obsidian":
                console.log("The color is obsidian")
                    break;
            default:
            console.log("We have all these cool colors and you choose that?");
                    }

/*   The default statement can also be moved to the top of the switch, there just
*    must then be a break statement at the end so the code can still be broken
*    out of
*/    

        switch(color){
            default:
            console.log("We have all these cool colors and you choose that?");
                break;
            case "magenta":
                console.log("The color Is magenta");
                break;
            case "fuschia":
                console.log("The color is fuschia")
                break;
            case "obsidian":
                console.log("The color is obsidian")
                    }
/*
*
*
*   If multiple cases match a case input value, the first one will be chosen, if
*   no matches are found the program continues to the DEFAULT case, if no DEFAULT
*   is found, the program continues to the statement after the switch.
*
*/
    switch (new Date().getDay()) {
                case 4:
                case 5:
                console.log("Weekend Soon!");
                break; 
//Cases 4 & 5 match multiple input values so they share the same output
                case 0:
                case 6://Cases 0 & 6 also share the same output
                console.log("It's the Weekend!");
                break;
                default://If nothing matches, default code runs
                console.log("Looking forward to the Weekend!");
                    }

/*   Switch cases use strict comparison (===).The values must be of the EXACT 
*   same type to match.
*
*/
              var x = "0"; //this is a STRING of 0
                switch (x) {
                    case 0: //this is a NUMBER 0
                    console.log("Off");//Strings and numbers are NOT the same
                    break;
                    case 1:// this is a NUMBER of 1
                    console.log("On");
                    break;
                    default: //nothing matches, default is found, so this runs
                    console.log("No value found");
                    }
                            //=> No value found

                            