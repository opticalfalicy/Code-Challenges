function zeros(n) {
  let res = 0;
  for (let i = 5; i <= n; i += 5) {
    let num = i;
    while (num % 5 === 0) {
      num /= 5;
      res++;
    }
  }
  return res;
}

// let zCount = 0;
// let nArr = n.toString().split('');

// console.log(nArr)

// for (let i = nArr.length-1; i >= 0; i--) {
//   console.log(nArr[i]);

//   if(nArr[i] == 0){
//   zCount++
//   }
//   else{
//     break;
//   }
// }
// console.log(zCount);
// return zCount;

console.log(zeros(30));
