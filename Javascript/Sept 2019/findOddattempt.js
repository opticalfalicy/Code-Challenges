// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// function findOdd(A) {
//   //happy coding!

//   // set index variable
//   let i = 0
//   // set count variable
//   let cnt = 0
//   // set placeholder integer
//   let placeInt = A[0];
//   // loop through array
//   for(i; i<A.length; i++){
//     if(placeInt = A[i]){
//   // each index count occurences of int
//       cnt++;
//     }
//       if(A[i] === A.length - 1 && cnt % 2 !== 0){
//   // if total occurences is odd, stop and return int
//        return placeInt;
//       }
//     if(i === A.length - 1 && cnt % 2 === 0){
//   // else continue iterations
//         ++placeInt;
//         return cnt = 0;
//       }
//     else{
//   // if no int is returned, return 0
//       return 0
//     }
//     console.log(cnt);
//   }

// }

function findOdd (A) {
  //happy coding!

  // set index variable
  let i = 0;
  // set count variable
  let cnt = 0;
  // placeInt index var
  let x = 0;
  // set placeholder integer
  let placeInt = A[x];
  let solInt;
  // loop through array
  //   for (const int in A){
  for (i; i === i; i++) {
    let res;
    if (placeInt === A[i]) {
      cnt++;
    }
    console.log (placeInt);
    if (i === A.length - 1 && cnt % 2 === 0) {
      ++x;
      cnt = 0;
      //           res = false
    }
    console.log (cnt);
    if (i === A.length - 1) {
      //          return placeInt;
      //          return res = true;
      break;
    }
    //         console.log(cnt % 2)
    //       console.log(x, placeInt);
    //     return placeInt;
    //     console.log(i, A.length - 1)
  }
}
//       ++x

// each index count occurences of int
// if total occurences is odd, stop and return int
// else continue iterations
// if no int is returned, return 0

// }

// function doTest(a, n) {
//   console.log("A = ", a);
//   console.log("n = ", n);
//   Test.assertEquals(findOdd(a), n);
// }
// Test.describe('Example tests', function() {
//   doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
//   doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
//   doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
//   doTest([10], 10);
//   doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
//   doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
// });
