// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order (words) {
  function insertAndShift (arr, from, to) {
    let cutOut = arr.splice (from, 1)[0]; // cut the element at index 'from'
    arr.splice (to, 0, cutOut); // insert it at index 'to'
    console.log (arr);
  }

  let wordArr = words.split (' ');

  for (let i = 0; i < wordArr.length; i++) {
    //   console.log(wordArr[i])
    let letDex = wordArr[i];
    let oldDex = i;
    console.log ('w', letDex, oldDex);
    for (let j = 0; j < letDex.length; j++) {
      //         console.log(letDex[j]);
      if (isNaN (letDex[j]) === true) {
        continue;
      } else {
        let newDex = letDex[j];
        console.log (newDex);
        insertAndShift (wordArr, oldDex, newDex);
      }
    }
    return wordArr;
  }
}
