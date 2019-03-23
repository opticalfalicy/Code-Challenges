// The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

// What if the string is empty ? Then the result should be empty object literal { }

let string = "aba";

function count(string) {
  // The function code should be here
  let freq = {};
  if (string == "") {
    return freq;
  } else {
    for (let i = 0; i < string.length; i++) {
      let char = string.charAt(i);
      if (freq[char]) {
        freq[char]++;
      } else {
        freq[char] = 1;
      }
    }
  }
  return freq;
}

console.log(count(string));
