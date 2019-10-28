// Each exclamation mark weight is 2; Each question mark weight is 3. Put two string left and right to the balance, Are they balanced?

// If the left side is more heavy, return "Left"; If the right side is more heavy, return "Right"; If they are balanced, return "Balance".

// Examples
// balance("!!","??") === "Right"
// balance("!??","?!!") === "Left"
// balance("!?!!","?!?") === "Left"
// balance("!!???!????","??!!?!!!!!!!") === "Balance"

function balance(left,right){
    //coding and coding....
    let lArr = left.split('');
    let rArr = right.split('');
    
    let lCount = 0;
    let rCount = 0;
    
    for(let i = 0; i < lArr.length; i++){
      if(lArr[i] == "!"){
        lCount += 2;
      }
      if(lArr[i] == "?"){
        lCount += 3;
      }
    }
    
     for(let j = 0; j < rArr.length; j++){
      if(rArr[j] == "!"){
        rCount += 2;
      }
      if(rArr[j] == "?"){
        rCount += 3;
      }
    }
    
    if(lCount > rCount) return "Left";
    if(lCount < rCount) return "Right";
    if(lCount === rCount) return "Balance"
    
    
  }