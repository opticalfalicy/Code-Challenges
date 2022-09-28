// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.
// www.codewars.com/kata/551b4501ac0447318f0009cd/train/javascript


function booleanToString(b){
    let x = b;
    
    if(b == true){
      x = 'true';
    }
    
    if(b != true){
      x = 'false';
    }
    return x;
    
  }