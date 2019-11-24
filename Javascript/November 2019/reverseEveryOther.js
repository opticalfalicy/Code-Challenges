// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are apart of the word in this kata.

function reverse(str){
  
    let strArr = str.split(" ");
    if(strArr[0] == '') return strArr.join('');
    
    for(let i = 0; i < strArr.length; i++){
      if(i % 2 == 0) continue;
      if(i % 2 !== 0){
        let revArr = strArr[i].split("").reverse().join("");
        strArr[i] = revArr;
      }
    }
        return strArr.join(" ");
  }

  reverse("I really don't like reversing strings!")
  
//   "I yllaer don't ekil reversing !sgnirts"

