// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

// [4, 3, 2, 5] would return [4, 3, 2, 6]

function upArray (arr) {
  let updArr = arr;
  if (!Array.isArray (updArr) || updArr.length == 0) {
    return null;
  }

  for (let i = 0; i <= updArr.length; i++) {
    if (updArr[i] < 0 || updArr[i] > 9) {
      return null;
    }
  }

  for (let j = updArr.length - 1; j >= 0; j--) {
    if (updArr[j] === 9) {
      updArr[j] = 0;
    }
    if (updArr[j] === 0) {
      if (updArr[j] === updArr[0]) {
        updArr.unshift (1);
        break;
      } else {
        continue;
      }
    } else {
      ++updArr[j];
      break;
    }
  }
  return updArr;
}
