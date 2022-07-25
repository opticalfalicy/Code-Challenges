function simpleMultiplication(number) {
    // your code........
    
    // initiate variable
    let x = number;
    
    // if the remainder of variable divided by two is zero, an even number, will multiply variable by eight
    if(x % 2 == 0){
      x *= 8;
      console.log(x);
    }
  
    // if the remainder of variable divided by two is not zero, an odd number, will multiply variable by nine
    if(x % 2 != 0){
      x *= 9;
    }
  
    //return result
    return x;
  
}