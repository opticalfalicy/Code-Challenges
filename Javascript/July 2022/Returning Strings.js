/*

Make a function that will return a greeting statement that uses an input; your program should return, 
"Hello, <name> how are you doing today?".

https://www.codewars.com/kata/55a70521798b14d4750000a4/train/javascript


*/

function greet(name){
    // inititate variable for incoming argument
    let n = name;
    // create a variable with the string and argument value
    let gstr = "Hello, " + n + " how are you doing today?"
    // return final string
    return gstr;
  }