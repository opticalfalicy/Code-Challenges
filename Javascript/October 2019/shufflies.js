// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.

function scramble(str1, str2) {
    //code me
    let str1Arr = str1.split('').sort();
    let str2Arr = str2.split('').sort();
    
   let i = 0;
   
       for(var j = 0; i<str2Arr.length && j<=str1Arr.length; j++){
       if(str2Arr[i] === str1Arr[j]){
           i++;
         }
       }
       return (j <= str1Arr.length);
   
   }
   