// In this excercise, we will implement the "merge" function from MergeSort.

// MergeSort is often taught in Computer Science as the canonical example of the "Divide and Conquer" algorithm. The strategy of MergeSort is both simple and profound, leveraging two simple-to-prove mathematical facts (1. That every list of 1 element is "sorted" ... and 2. It is much easier to combine two already-sorted lists into 1 sorted list than it is to sort a big list all at once) to yield an algorithm with a worst-case complexity of O(n log n).

// Basically, MergeSort works like this:

// If we get a list of size 1, then it's already sorted: we're done. Just return that value.
// Otherwise; break the list you have to sort in half: 2a. MergeSort the first half. 2b. MergeSort the second half. 2c. "Merge" the two sorted lists for 2a and 2b together. Voila: sorted.
// 2c is where the MergeSort "merge" function comes in. It takes two already-sorted lists (arrays, in this example) and returns one large sorted list.

// The name of the function in this example is "mergesorted". It should return a big sorted array from two smaller sorted arrays: e.g.

// mergesorted([1,2],[3,4]) //should: [1,2,3,4]

// mergesorted([1,2],[3]) //should: [1,2,3]

// mergesorted([1],[2, 3]) //should: [1,2,3]




// TODO: implement 'mergesorted'
// test ensures: a and b are both arrays, consisting entirely of integers...
//...,both arrays are sorted and contain at least 1 integer.
// ALSO: the Array.sort function has been disabled for this excercise.
function mergesorted(a, b) {

    // console.log(a, b);
    
    // Define variables for a, b, c arrays (arrA, arrB, arrC)
    
    let arrA = a;
    let arrB = b;
    let arrC = []
    
    // Check if arrA is longer than 1 index. If so, sort.
    
    if (arrA > 1){
      for(let i = 0; i <= arrA.length; i++){
        if(arrA[i] < arrA[i+1]){
          arrA[i--];
        }
      }
      
      for(let u = 0; u < arrA.length; u++){
        arrC.unshift(arrA[u])
      }
    }
    
    // Check if arrB is longer than 1 index. If so, sort.
    
    if (arrB > 1){
    //   arrB.sort();
    
      for(let j = 0; j <= arrB.length; j++){
        if(arrB[j] < arrB[j+1]){
          arrB[j--];
        }
      }
       for(let k = 0; k < arrA.length; k++){
        arrC.unshift(arrB[k])
      }
    }
    
    
    // Combine arrA and arrB into arrC
    
    return arrC;
      
    }
    