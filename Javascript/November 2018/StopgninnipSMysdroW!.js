// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.


// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

// MY attempt: 

function spinWords(str){
    //TODO Have fun :)
    
    let tempStr = '';
    let newStr = '';
    
    for(let i = 0; i <= str.length; i++){
        tempStr = tempStr + str[i]
        console.log(newStr) 
      
      if(str[i] == ' '){
      
        if(tempStr.length < 5){
          newStr = newStr + tempStr;
          tempStr = '';
        }
        
        if(tempStr.length >= 5){
          tempStr.split('').reverse().join('');
          newStr = newStr + tempStr;
          tempStr = '';
        }
        
        
      }
  //     return newStr;
  //     else{
  //       str[i].reverse().join('');
  //     }
    }
    
  }


  // Solution

  function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }