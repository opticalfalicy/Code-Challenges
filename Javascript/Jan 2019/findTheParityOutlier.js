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

function intCheck(intOne, intTwo) {
  if (intOne % 2 === 0 && intTwo % 2 === 0) {
    return true;
  } else return false;
}

function evenSearch(intArr) {
  for (let i = 0; i <= intArr.length(); i++) {
    if (intArr[i] % 2 == 0) {
      let val = intArr[i];
      return val;
    } else continue;
  }
}

function oddSearch(intArr) {
  for (let i = 0; i <= intArr.length(); i++) {
    if (intArr[i] % 2 !== 0) {
      let val = intArr[i];
      return val;
    } else continue;
  }
}

function findOutlier(integers) {
  //your code here
  let intArr = integers;
  intArr.sort();
  let intOne = intArr[0];
  let intTwo = intArr[1];

  intCheck(intOne, intTwo);

  if (intCheck == true) {
    evenSearch(intArr);
    return val;
  } else if (intCheck == false) {
    oddCheck(intArr);
    return val;
  }
}
