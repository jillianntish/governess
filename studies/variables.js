/*
 * VARIABLES:
 * 
 * Houses are built of materials, either brick, wood, cement..etc.
 *  
 * Most houses incorporate a lot of different types "materials" when being built, 
 * most of these house materials are made up of even smaller pieces, that have 
 * been altered, let's call them "Base Materials". Base materials make up the
 * materials that hold a house together.  These different house materials are
 * combined to do active things like, open a door,(a door built of wood and 
 * screws), or passive things like or stay standing when the wind blows or 
 * provide shelter it rains (brick walls, roof etc.). Either way, when all of 
 * the materials are combined, whether similar or different, they make up the 
 * house and allow it to "operate"! 
 *
 *
 *
 * 0.                             Declare Dat
 * Building a program is like building a house. Imagine how excited you would be
 * to build a house from scratch, I know I would "declare" it to everyone, most
 * importantly, my Contractor, or my COnsole who's really doing all the work for
 * me!
 */
                        var houseMaterial;
 
 /* I just told my computer I want it to declare (build) something and call it
 *  * "houseMaterial".
 *  * the word "houseMaterial" looks like that because it is written in "Camel
 *  * Case" which is what I could call "JavaScript's Handwriting"*/
 /*
 * In programming, Variables are the abstract "Materials" that are made up of
 * Data types. So again, if I were building a House (or a Program), I would use 
 * materials (Variables) to construct my house, but what actual type of 
 * materials will I use?
 * In that same sense, the clay that has been fired, or the tree that has been 
 * cut, or the limestone that has been ground down, etc., these items would be 
 * considered the base materials (Data Type) that make up (is stored in) my 
 * house materials (the Variable)!
 *
 *
 * 1.                        Assign Dat
 * /* i.e. my Console is a contractor, her Variables are her employees, and 
 * they all have assignments to complete!*/
 /*
 * In programming, the '=' is called an "Assignment Operator", the COnsole tells
 * the Assignment Operator what she wants my Data to be to make up the Variable
 * In this example, The Assignment Operator is telling my computer 
 * 'What base materials should I use for this project?'
 * AKA Now that I've decided I'm going to build a house, what should I use to 
 * build it?
 */
                        var houseMaterial;

 /* These smaller materials can exist (Declared) on their own, but don't 
 * actually "do" anything or serve much purpose in that state, based on what I 
 * want my final result to be, aka my house! Only when I assign my base 
 * materials jobs to do in my house, do they serve the purpose I actually want 
 * them to serve.
 * 
 * I can even reassign my Var variables if I want to! */
 
                        // eg.  I can do this!
                       var affirmative = 'Yes I Can!';
                     affirmative = 'I most DEFINITELY can!';
                                //Did that!
 
 /* Finally, when I decide on what I want my base material(Data type) to be, I
 * can tell my COntractor(Console), who assigns the job via Mr. Assignment 
 * Operator('='), in turn does the labor of summoning or altering my base 
 * materials. But, if I want my house to function like a well-oiled machine and 
 * be really dynamic, I'm going to have to use an array of different objects and
 * materials to build it!
 */ 
 
                        var houseMaterial = 'brick';
         // This is a Variable that has a Data type that is called a"String"
                // A String is a sequence of characters in quotes
                         
                         var houseAddress = 1913;
                // Variables can also hold numbers as data types
                        
                var houseMaterialToo = ['wood', 'mortar', 'stone'];
             // This is a variable that holds the value of an Array
    // An Array is a zero-indexed list that can hold all sorts of data types
    // If I don't add any data types to my array, it's called an Array Literal
                // Arrays are defined between two brackets
                // Arrays can even hold other arrays!
                            
                        var moreHouseMaterial = {
                                myBasement: 'cement',
                                myWindows: 'glass',
                                myRoof: 'shingles'
                                };
               // This is a variable that holds the value of an Object
        // An Object is a NON-indexed list, that has {key: "value"} pairs
   //Objects are a little fancier and therefore exist between two fancy brackets
   /*If I make an Object, but am not sure what I want to put it in, its called an
    Object Literal*/
                        const houseInsulation = false;  
                    // This final variable holds a Boolean value
                    // Boolean values are true or false statements
                    // Booleans are like on/off light switches
                    // I love saying the word Boolean:)
      
        
  /* Sometimes I will want to check in with my contractor to make sure things in
  * my house are being built the way I want them to, I can check in to make sure
  * things are running smoothing by logging the work She's done already and 
  * making sure things are where I want them.
  *
  */
                            console.log(myHouseIs);
 /* 
 *
 * 2.                       Hoisting / Var, Let, & Const
 *   A. Now, I've talked about defining with Var, and how when you define a variable
 * using Var, it's becomes a Global Variable, which means I  can access it's 
 * value anywhere in the program. Var variables are "Hoisted" 
 * to the top of a program upon initialization. This means my COnsole takes a
 * look at all of my variables in my program(Contractor looking over blueprints)
 * and has everything established even before my variables get to work doing the
 * jobs my Assignment Operator has given them.
 * 
 * B. Only the NAMES of my variables are recognized at this point, and not the 
 * actual VALUES they hold. So at this point, my Console-Contractor knows that I
 *  that want to use the 'houseMaterial' to build with.
 */                          
                       console.log(hoistMyHouse);
                      
                     var hoistMyHouse = "We have liftoff!";
                     
                     //This is an example of Hoisting
                     //This will return not an error message, but "undefined"
    /*"Undefined" means it is recognized, but has no value to contribute to the
    program yet, so the console knows it's there, just not what to do with it 
    yet!*/
                //VAR Variables are hoisted, but not their values!
                     
                    var hoistMyHouse = "We have liftoff!";
            
                    console.log(hoistMyHouse);
                    //prints "We Have liftoff!" to the console
                    
 /* C . I'm super specific though, so sometimes I only want certain materials used in 
 * in certain jobs, but not others. So I LET my Console Contractor know, "hey, 
 * I want this wood to frame these windows, don't use them on anything else, you
 * can use the bricks with the windows too if you want, but the wood stays in 
 * the pane!" This is an example of Scope. I can use my Variable "houseMaterial"
 * because it has been defined Globablly meaning it's available for use anywhere
 * in my program because I have declared, and assigned it outside of any
 * specific job or function. That means my VAR variables are available on a
 * "Global" scope. Now, let's get back to my window:
 */
                     function letThe(sunshineIn) {
            let houseWindows = 'glass'; //this is called a "Code Block"
                        } 
                console.log(houseWindows); // ERRRRRRRRRRRRRR
 
 /* D. Because I have defined my let Variable "houseWindows" within the Local block
 * scope of my function 'letThe', it can ONLY be used INSIDE this
 * function. 
 * The Let variable is NOT hoisted to the top of the program like my VAR
 * variables, and if I try to log or return it OUTSIDE of the function 'letThe',
 * it will spit the error message, "houseWindows" is not defined. 
 *
 * Speaking of being really specific, not only am I going to Let my Console
 * where she can and cant use certain materials, I can also let her know that 
 * there are some materials that I dont want to change. EVER. I can tell her that
 * by using the keyword "Const" instead of "var" or "let". I can change my mind
 * if I want to about what I want other things to be, but like Tupac said, SOME
 * things will NEVER change, so these things are CONSTANT
 */
                        const insulation = false;
                          var insulation = false; 
                 // nope! This will cause a reference error
                              
            /* the Constant variable insulation cannot be assigned to the
            global variable Var once it has been declared, we can change
            it's value though so thats cool*/
 
 
                            const insulation = false;
                                  insulation = true; 
            // This only works in code, there is no insulation in New Orleans!
            
            
   const /* like */ let /*, is also a block variable avaible only in its local 
   scope, it is NOT hoisted at the start of a program!
  */
                            console.log(myHood);
        //At this point, the program stops because const has not been defined!
                            
                            const myHood = 'Treme'
                            console.log(myHood);
                        //prints 'Treme' to the console
  
  /* Also, variables can be made up of OTHER variables, this makes less labor for
  * me!
  */
        var myHouse = {madeOf : houseMaterial, 
                        alsoMadeOf: moreHouseMaterial, 
                        itsWhere: myHood};
                        
                        console.log(myHouse)
        /*I created a NEW variable, full of a non-indexed list of my old
        variables!*/
        /* returns myHouse as an Object with all the values I've
            stored in my Variables*/
        /* This would return an error message if any of my previously assigned 
        variables are const or let, they are only available to referenced in the
        confines of their Local Scope! */
     
           var myHouseIs =  "Can I Live In" + " " + myHood + "?" affirmative;
        /*I can even "concatenate" (add) my variables together to create new 
        Strings!*/
        //prints to the console Can I Live In Treme? Yes I Can!
  
 /*                  Broken Down One More Time
 * 
 *      1 . To hold things in memory during the life-cycle of a program, we can use
 * variables.  Variables are named identifiers that can point to values of a 
 * particular type, like a Number, String, Boolean, Array, Object or another
 * data-type.  Variables are called so because once created, we can CHANGE the
 * value (and type of value) to which they point.
 *
 *  //Variables are named containers that store data!
 * 
 * Computers are so forgetful that I have to remember to store my "Values" in
 * Variables if I want my computer to remember what they are!
 *
 * /*i.e. Mom to me: "pick up your things and put them away before I THROW them
 * away!"*/
 /*
 *      2. Variables can be anything too. Like a "String", which is the way we say 
 * "word" or a sequence of characters and letters, a number, or a boolean value,
 * which is a fun way to say if something is true or false
 *
 *  3. To create a variable we use the keyword var, or let, or const followed by a 
 * name for our material. For instance, I think I'm going to use brick to start
 * my house, so if I want it to be available for many different projects around 
 * my house and maybe even INSIDE my house somewhere, I'm going to use the
 * keyword "VAR" (short for Variable, ha!) to make sure I can keep it handy. 
 * I can start my house (or start my program) with "Var" and I can use it again,
 * in the middle, or hell, at the end. I can even change it if I want to, what a
 * great material 'Var' can make!
 *
 *
 *      4.                          EXAMPLES
 There are 2 phases of using variables: declaration and initialization (or assignment).*/
 
 // 1. declaration // 
 var myName;
 /* At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything */
 console.log(myName); // prints => undefined

 // 2. initialization or assignment //
 myName = 'john';
 console.log(myName); // prints => john

 // 3. re-assignment //
 myName = 'bob';
 console.log(myName); // prints => bob

 // NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
 var myVariable = 1;
 var myVariable = true;
 myVariable = "someString";
 
 /* Variables are hoisted to the top of the program and read before anything
 * happens, kindve like a Contractor looking at a blueprint to see all the tools
 * and marterials we will need to build my house before actually getting to work
 * building it.
 */