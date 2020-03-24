// You know about simple Array.diff task. Now try to solve enhanced version!

// Your goal in this kata is to implement a difference function, which subtracts one list from another.

// It should remove all values from list a, which are present in list b. Each element x in both arrays is integer and 0 ≤ x ≤ 25. And lengths of arrays can reach 5 000 000 elements.

// array_diff_very_fast([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from another:

// array_diff_very_fast([1,2,2,2,3],[2]) == [1,3]

function array_diff_very_fast (a, b) {
  // show me who the best!
  let x = 0, y = 0;
  let resArr = [];
  //   let
  for (let i = 0; i < a.length; i++) {
    if ((x = 0)) {
      x = a[i];
    }

    while (x == a[i + 1])
      ++i;

    if (x !== a[i + 1]) {
      y = i;
    }

    if (b.includes (x)) {
      a.splice (x, y);
    }

    return resArr.unshift (a, b);
  }
}

// describe("Solution", function(){
//   it("Simple test", function(){
//     Test.assertSimilar(array_diff_very_fast([1,2,2,2,3], [2]), [1,3]);
//   });

//   it("Simple test 2", function(){
//     Test.assertSimilar(array_diff_very_fast([1,2,2,2,3,5,5,1,2,4,5,1], [2,1,5]), [3,4]);
//   });
// });
