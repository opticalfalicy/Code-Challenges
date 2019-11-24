// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

function stringTransformer(str) {
    let letArr = str.split('');
    for(let i = 0; i < letArr.length; i++){
      if(letArr[i] == letArr[i].toUpperCase()){
        letArr[i] = letArr[i].toLowerCase();
        continue;
      }
      if(letArr[i] == letArr[i].toLowerCase()){
        letArr[i] = letArr[i].toUpperCase();
        continue;
      }
    }
    let nCase = letArr.join('');
    return nCase.split(' ').reverse().join(' ');
  }