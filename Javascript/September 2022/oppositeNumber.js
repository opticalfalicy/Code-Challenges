// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34





function opposite(number) {
  
    let n = number;
    
    // split the integers of n into an array
    let nArr = Array.from(String(n));
  
    // check if the first element of the array is a negative sign
    if(nArr[0] == "-"){    
      // return the absolute value of the variable's integer
      let nRes = Math.abs(n);
      return nRes;
    }
    
    // check if the first element of the array is not a negative sign
    if(nArr[0] != "-"){
      // return the negative absolute value of the variable's integer
      let nRes = -Math.abs(n);
      return nRes;
  
    }
       
  }