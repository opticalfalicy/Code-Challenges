// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//  https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript

function removeExclamationMarks(s) {
  
    // Using replace, regex global search for ! in the first argument, and replace with a "" in the second argument.
      return result = s.replace(/[!]/g, "")
      
    }