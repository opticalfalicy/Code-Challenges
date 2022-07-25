// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    
    let itArr = iterable
    
    let nuArr = [];
    
    let item = undefined;
    
    if(typeof itArr  == String){
      itArr.split('');  
    }
    
    for(let i = 0; i < itArr.length; i++){
        if(item == undefined){
          nuArr.push(itArr[i]);    
        }
        
        else{
          if(itArr[i + 1] == itArr[i]){
             continue;     
          }
          
          if(itArr[i + 1] !== itArr[i]){
            ++i;
            item = itArr[i];
            nuArr.push(item);
          }
        }
    }
    
    console.log(nuArr)
    return nuArr;
  
  }