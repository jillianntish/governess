/*
*
*
*
*
*
********************************************************************************
*                            String Manipulation                               *
********************************************************************************
*
*
*
*
*

*/
                           var str = "Link";
                           var greet = "It\'s time to wake up";
                           
/*   Strings use the "+" operator to link or concatenate them together. Strings
*    are always enclosed in single or double quotes when they are are hardcoded 
*    directly
*    or stored in variables
*/
            console.log("Hello" + " " + str + ". " + greet + "!");
                  // -> "Hello Link. It's time to wake up!"
                  
/*  Spaces and special characters have index values, and are enclosed in single or 
*   double quotes.
*
*                            ************************
*                            *   0. Access Methods  *
*                            ************************
*
*   Methods and properties are also available to strings because 
*   JavaScript treats primitve data types as objects when executing
*   methods and properties.
*
*   Although Objects do not have a length property, and even though primitive
*   data types are treated like objects when executing methods and properties,
*   because JavaScript, when the length property is used on a string, it WILL
*   return length of the string. (*shrug*)
*/
                          console.log(str.length);
                              // -> 4
/* 
*
*   indexOf()
*   The indexOf() method returns the index of (the position of) the 
*   first occurrence of a specified text in a string.
*
*/
                        console.log(str.indexOf("k"));
                                // -> 3
                                
/*  
*   
*   lastIndexOf()
*   The lastIndexOf() method returns the index of the last occurrence of
*   a specified text in a string, it runs from the end to the beginning:
*/
                        var str = "Mississippi";
                        console.log(str.lastIndexOf("s"));
                                // -> 2
//   Both indexOf(), and lastIndexOf() return -1 if the value is not found.
                          
                          var str = "Mississippi";
                        console.log(str.lastIndexOf("a"));
                                //-> -1
                                
/*  Both methods accept a second parameter as the starting position for the search.
*   The lastIndexOf() method searches backwards, from the end of the string to 
*   the beginning.
*
*   
*                        ***************************
*                        *  1. Extraction Methods  *
*                        ***************************
*
*   slice()
*   The slice() Method
*   slice() extracts a part of a string and returns the extracted part in a new string.
*   The method takes 2 parameters: the start position, and the end position.
*/                            
                            var str = "Mississippi";
                         console.log(str.slice(2, 9));
                                //-> ssissip

// If a parameter is negative, the position is counted from the end of the string.

                            console.log(str.slice(-7));
                               //-> issipi

// If the second parameter is omitted, the method will slice out the rest of the string.
  
                            console.log(str.slice(3));
                             // -> sissippi
/*
*   substring()
*   The substring() Method
*   substring() is similar to slice() except is does not allow negative integers 
*   as arguments, and the second parameter signifies the length of the extracted part
*
*/  
                       var str = "Harry, Ron, Hermione";
                      console.log(str.substring(12, 20));
                            //-> 'Hermione'
/* 
*   substr()
*   The substr() Method (NOT the same as substring!!)
*   Like string(), it will slice out the rest of the string if the second, 
*   parameter is omitted. Unlike substring(), it WILL accept a negative integer, 
*   also like string(), if the input is negative, the count will begin at the end
*   of the string
*/
                        var str = "Harry, Ron, Hermione";
                      console.log(str.substr(-7));
                          //-> 'ermione'
/*
*                        ******************************
*                        *    2 .Replacement Methods  *
*                        ******************************
*  
*   replace()
*   The replace() method replaces a specified value with another value in a string,
*   the value to be replaced, and the replacement value are both called in the 
*   parentheses.
*
*/
                        var str = "Harry, Ron, Hermione";
                        var newStr = str.replace("Ron", "Victor");
                            console.log(newStr);
                         //-> 'Harry, Victor, Hermione'
/*
*
*   The replace() method does not change the string it is called on. It returns 
*   a new string. This is great because the value of the original
*   string still stored in "str", in case it needs to be referenced again later.
*   This method is case sensitive, and only replaces the first matching occurence 
*   of the value in the string.
*/

                            console.log(str);
                        //->"Harry, Ron, Hermione"
/*
******** To replace case sensitivity, an /i flag (insensitive) is helpful******
*/
                var n = str.replace(/RON/i, "Victor");
                      //"Harry, Victor, Hermione"
/*
*
*                        ***************************
*                        *  3. Conversion Methods  *
*                        ***************************
*
*
*   toUpperCase() / toLowerCase()
*   Converts a string to Upper or Lower Case
*/
    
                            var witch = "Hermione";
                            var wizard = "Harry";

                        var magic = witch.toUpperCase();  
                                 console.log(magic);
                                // -> "HERMIONE"
/*                   
*                    
*
*/                      var moreMagic = wizard.toLowerCase();  
                             console.log(moreMagic);
                                // -> "harry"
/*
*
*
*   concat()
*   concat() joins two or more strings, and can be used in lieu of the "+" operator.
*   All string methods return NEW strings, they don't change the original string 
*   because strins are immutable and cannot be changed, only replaced.
*
*/
                        var curse1 = "Avada";
                        var curse2 = "Kedavra!";
                    var curses = curse1.concat(" ", curse2);
        //the first parameter serves as the "separator" for the new string
                   //-> "Avada Kedavra!"
/*
*
*   trim()
*   The trim() method removes whitespace from both sides of a string:
*/

            var str = "       Avada Kedavra!        ";
                        console.log(str.trim());
                        // -> "Avada Kedavra"
/*
*
*
*   split()
*   Converting a String to an Array
*   A string can be converted to an array with the split() method:
*/
                    var str = "Hermione, Ron, Harry, Hagrid,";


                      console.log(str.split(" "));          
                        // Split on spaces
                        console.log(str.split(","));         
                        // Split on comma

/*  If the separator is omitted, the returned array separated between the letters
If the separator is "", the returned array will be an array of single characters:*
*
*
*                       **************************
*                       * 4. Extraction Methods  *
*                       **************************
*
*
*    There are 3 methods for extracting string characters:
*
*   Bracket Notation []
*   Similar to arrays, we have access to string properties using bracket notation [ ]
*   Bracket notation can be tempermental:
*/
                                  str[0];
                     // gives no error, but does not work!
/*
*
*/
                            var home = "Hogwarts";
                            console.log(home[4]);
                                  //-> 'a'
/*
*
*
*   charAt()
*   The charAt() method returns the character at a specified index (position) in a string:
*/
                        var str = "Wingardium Leviosa";
                                 str.charAt(11);          
                                 // returns L
/*
*   charCodeAt() 
*   The charCodeAt() method returns the unicode of the character at a specified index in a string:
*
*
*/                            str.charCodeAt(11);
                                // returns 76
/*
*   If no character is found, [] returns undefined, while charAt() returns an empty string.
*   
********************************************************************************************
*   STRING METHODS RECAP - Plus additional methods
******************************************************************************************
*   charAt()
*           Returns the character at the specified index (position)
*   charCodeAt()
*           Returns the Unicode of the character at the specified index
*   concat()
*           Joins two or more strings, and returns a new joined strings
*   endsWith()	
*           Checks whether a string ends with specified string/characters
*   fromCharCode()	
*           Converts Unicode values to characters
*   includes()	
*           Checks whether a string contains the specified string/characters
*   indexOf()	
*           Returns the position of the first found occurrence of a specified 
*           value in a string
*   lastIndexOf()	
*           Returns the position of the last found occurrence of a specified 
*           value in a string
*   localeCompare()	
*           Compares two strings in the current locale
*   match()	
*           Searches a string for a match against a regular expression, and returns the matches
*   repeat()
*           Returns a new string with a specified number of copies of an  existing 
*           string
*   replace()	
*           Searches a string for a specified value, or a regular expression, 
*           and returns a new string where the specified values are replaced
*   search()
*           Searches a string for a specified value, or regular expression, and
*           returns the position of the match
*   slice()	
*           Extracts a part of a string and returns a new string
*   split()	
*           Splits a string into an array of substrings
*   startsWith()
*           Checks whether a string begins with specified characters
*   substr()
*           Extracts the characters from a string, beginning at a specified start 
*           position, and through the specified number of character
*   substring()	
*           Extracts the characters from a string, between two specified indices
*   toLocaleLowerCase()	
*         Converts a string to lowercase letters, according to the host's locale
*   toLocaleUpperCase()	
*           Converts a string to uppercase letters, according to the host's locale
*   toLowerCase()	
*           Converts a string to lowercase letters
*   toString()
*           Returns the value of a String object
*   toUpperCase()
*           Converts a string to uppercase letters
*   trim()
*           Removes whitespace from both ends of a string
*   valueOf()	
*           Returns the primitive value of a String object
*/