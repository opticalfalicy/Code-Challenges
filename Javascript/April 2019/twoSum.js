// function twoSum(numbers, target) {
//   // ...
// //   let intOne;
//   let resArr = [];
//   let i = 0
//   let intOne = numbers[i];
//   for(i; i <= numbers.length; i++){
//     if(intOne === numbers[i]){
//       continue;
//     }
//     else if(intOne + numbers[i] !== target){
//       intOne[i]++
//     }
//     if(intOne + numbers[i] === target){
//       resArr.push(intOne, numbers[i]);
//     }

//   }
//   console.log(resArr)
//   return resArr;
// }

function twoSum (numbers, target) {
  // ...
  //   let intOne;
  let resArr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] === target - numbers[i]) {
        resArr.push (i, j);
      }
    }
  }
  console.log (resArr);
  return resArr;
}

twoSum ([1, 2, 3], 4);
