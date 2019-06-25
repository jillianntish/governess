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
*                           OPERATORS                                          *
********************************************************************************
*
*
*
*
*
*
*
*
I. Operators
*    0. In JavaScript, Assignment Operators are used to "assign" values to variables,
*       the most common Assignment Operator is the "=" sign and is used as such:
*/
                    var newAssignment = "Operator, Operator";
        //the Assignment Operator initiatlizes the variable: newAssignment
    //the String "Operator, Operator" is Assigned to the variable newAssignment
/*    
*    1.     Assignment Operators
* 
*/                           var test = x;		
                            // "Is Equal To"  
 /*                  +=	"Is Equal to Itself Plus"
                   -=	"Is Equal to Itself Minus"
                   *=	"Is Equal to Itself Multiplied By"
                   /=	"Is Equal to Itself Divided By"
                   %=	"Is Equal to the Remainder Of"	
                    
*/                    
                             var x = 5; 
         
                         x += 1 == x + 1; 
                              //-> 6
                    
                         x -= 1 == x - 1; 
                              //-> 5
                    
                         x *= 1 == x * 1; 
                             //-> 5
                    
                         x /= 1 == x / 1; 
                             //-> 5
                    
                         x %= 3 == 4 % 3; 
                             //-> 1
            //Modulo Operator, assigns value to the remainder of 2 numbers

/*          
*    2. Arithmetic Operators
*
*   In Programming, Arithmetic operators are used to perform common mathematical 
*   operations. Some common arithmetic operator are:
*
*/                      var x = 5; var y = 5;
/*    +	Addition
*/                          x + y	//-> 10
/*    -	Subtraction 
*/                          x - y	//-> 0
/*    *	Multiplication
*/                          x * y	//-> 25
/*    /	Division
*/                          x / y	//-> 1
/*    %	Modulus	Returns the remainder	
*/                          x % y	//-> 0
/*    ++	Increment	Increases the value of a variable by 1
*/                          x++ // //-> 6
/*    --	Decrement	Decreases the value of a variable by 1
*/                          x-- //-> 4
/*
*
*
*    3. Comparison Operators 
*   
*   Comparison Operators are used to compare variables or data to return a 
*   result based on Boolean values and are often used in Conditional Statements.
*   Some common Comparison operators are:
*    
*/                       var x = 2; var y = 4;
/*     == "Is Equal To"
*/                       x == y //-> false;
/*    === "Strictly Equal To"
*/                       x === y //-> false
/*    !== "Strictly Not Equal To"
*/                       x !== y //-> true
/*    >   "Greater Than"
*/                       x > y //-> false
/*    <   "Less Than"
*/                       x < y //-> true
/*    >=  "Greater Than Or Equal To"
*/                       x >= y //->false
/*    <=  "Less Than or Equal To"
*/                       x <= y //-> true
/*
*
*
*    4. Logical operators
*
*    Logical operators are used to determine the 'truthfulness'(truthy) or "falsey"
*    between two arguments, when there are two sets of arguments they are Binary 
*    Operators.
*
*
*/                          var x = 4; var y = 2;
/*    &&
*    Logical "And" Operator
*    Double Ampersand
*    "If This and That are True" (Both inputs must be true in order to return true)
*
*/      
                            x === y && x >= 10 
                                //-> false
        
                            x !== y && x <= 10 
                                //-> true
/*  
*    || 
*    Logical "Or" Operator
*    Double Parallel Vertical Lines
*    "If This OR That is True" (Only one input has to be true to returns true)
*
*/      
                        x === y || x <= 10 
                            //-> true;
                        
                        x === y || x >= 10 
                            //-> false
/*
*
*    !! 
*    Logical "Not" Operator (Bang/Double Bang)
*    Double Exclamation Points
*    "If This and That are False"
*    It is used to reverse the logical state of its operand.
*    If a condition is true, then (!!)  will make it false.
*/      
                         
                        !!x === x && !!y === y
                            //-> false  
                        
                        x === x && !!y === y 
                            //-> false
                        
                        !!x === x && y === y 
                            //-> false
                            
                        !!x === x || y === y 
                            //-> true
/*   
*
    4. Unary operators 
*
*    Unary operators are Operators take a single argument, some common Unary
*    Operators are:
*
*    ! / !! : Bang Operator  -
*/                        var x = x;
                      x != x;  //-> false
                        x = !x; //-> true
                        
/*   typeOf : returns the data type of simple and complex data types
*/                      
                        var x = "type of";
                    console.log(typeof(x));
                            //-> string
/*
*
*    - : Negative sign, flips value of a positive to a negative
*
*/                      var neg = -1;
/*   if : A keyword that proceeds a conditional statment that often if not always
*    includes an operator of some sort. Conditional Statements test values in 
*    parenthesis and proceed code blocks wrapped in curly braces that do or dont
*    have return statements. The results are based on Boolean values. 
*/
                    if (x === -1 && x < 0){
                        return true;
                    }

    //  instanceof	: Returns true if an object is an instance of an object type
/*
*
*
*
*
*
*   5. Ternary Operator - 
*   
*   Takes Three Operands (   ?  :  )
*
*   Ternary Operators are Conditional (T/F) operators that take three arguments and
*   can be used as an alternate methods to "If/Else" statements, however, both
*   values must be the same type and they cannot be statements, just expressions.
*
*
*/
            //   condition ? value_if_true : value_if_false
/*
*
*  The condition is the expression to be tested, and the first expression is returned
*   if the conditon resolves to a truthy expression, while the second is returned
*   if the condition resolves to false.
*
*/
                                var age = 26;
                var beverage = (age >= 21) ? "Beer" : "Juice";
    //the condition in parenthesis tests whether the var age is greater than or equal to 21
    //if the condition is true, the console will log 'Beer'
    //if the condition is false, the console will log 'Juice'
                          
                             console.log(beverage); 
                                 // "Beer"
/*
*
*   The ternary operator can also be "chained" together similar to an if … else if 
*   statement.
*
*/