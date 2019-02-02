/*

  You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
  The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
  Write a method that takes the array as an argument and returns this "outlier" N.

  Examples
  [2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

*/

let integers = [2, 4, 0, 100, 4, 11, 2602, 36];

function intCheck(intOne, intTwo) {
  if (intOne % 2 === 0 && intTwo % 2 === 0) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}

function evenSearch(intArr) {
  for (let i = 0; i <= intArr.length; i++) {
    if (intArr[i] % 2 == 0) {
      let val = intArr[i];
      return val;
    } else continue;
  }
}

function oddSearch(intArr) {
  for (let i = 0; i <= intArr.length; i++) {
    if (intArr[i] % 2 !== 0) {
      let val = intArr[i];
      return val;
    } else continue;
  }
}

function findOutlier(integers) {
  let intArr = integers;
  intArr.sort();
  console.log(intArr);
  let intOne = intArr[0];
  let intTwo = intArr[1];

  if (intCheck(intOne, intTwo) == true) {
    console.log("true");
    return oddSearch(intArr);
  }

  if (intCheck(intOne, intTwo) == false) {
    console.log("false");
    return evenSearch(intArr);
  }
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
