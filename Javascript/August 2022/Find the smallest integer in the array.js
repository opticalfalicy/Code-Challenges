/*

Given an array of integers your solution should find the smallest integer.

For example:

    Given [34, 15, 88, 2] your solution will return 2
    Given [34, -345, -1, 100] your solution will return -345

You can assume, for the purpose of this kata, that the supplied array will not be empty.

https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript

*/

class SmallestIntegerFinder {
    findSmallestInt(args) {
        // put args into a variable
      let argArr = args;
      
      // use the sort function on the argArr array
      argArr.sort(
        // function that compares if element A can be subtracted by element B 
        function(a, b){
        return a - b;

      });

      return argArr[0];
      
      
    }
  }