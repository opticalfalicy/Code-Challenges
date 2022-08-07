// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript



function grow(x){
    // initiate variable to increment and to multiply to
    let i = 0;
    let g = 1;
    
    // while i is less than the length of the x array, multiply g by the value at the position in the x array of i's integer
    while(i < x.length){
      g *= x[i];
      i++;
    }
    
    // return value
    return g;
  
  }