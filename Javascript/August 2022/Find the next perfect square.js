// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square




function isSquare(n){
    if (n < 0){
    return false
  }
  // isInteger checks if n is a whole number, sqrt finds the square root of n
  if(Number.isInteger(Math.sqrt(n))){
    return true;
  }
  else{
    return false;
  }
}



function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  // initiate variable for the argument
  let n = sq;
  // variable to calculate the next perfect square of n
  let ns = (Math.sqrt(n)+1) ** 2;

  // call the isSquare function to check if n is a square, return -1 per the instructions if false
  if(isSquare(n) == false){
    return -1;
  }
  
  // return ns if the isSquare function returns true
  if(isSquare(n) == true){
    return ns;
    }
}