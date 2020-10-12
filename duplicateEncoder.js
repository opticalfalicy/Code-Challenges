function duplicateEncode(word){
    // ...
  let low = word.toLowerCase();
  let wArr = low.split('');
  let nArr = [];
  let dArr = [];
  let cnt = 0;
  
  for(let i = 0; i < wArr.length; i++){
    // save index position
    let x = wArr[i];
    
    // loop backwards thru wArr
    
    for(let j = wArr.length; j > 0; j--){
      let y = wArr[j]
      
      // count iterations of saved index
        if(y === x){
          console.log(y);
          ++cnt;
        }
        else continue;
    }
      
    
    
    // if more than one push to dArr
    if(cnt > 1){
      dArr.push(x);
      cnt = 0;
    }
    
    // else push to nArr
    if(cnt == 1 || cnt == 0){
      nArr.push(x);
      cnt = 0;
    }
    
   if(nArr.includes(x)){
     wArr.splice(i, 1, '(')
      
    }
    
    if(dArr.includes(x)){
      wArr.splice(i, 1, ')')
    }
  }
  let nStr = wArr.join('');
  return nStr;
  
}


/* 

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!


*/