// Your Function
// The function you are going to write is not actually going to help you with your piano playing, but just explore one of the patterns you're experiencing: Given the number you stopped on, was it on a black key or a white key? For example, in the description of your piano exercise above, if you stopped at 5, your left thumb would be on the fifth key of the piano, which is black. Or if you stopped at 92, you would have gone all the way from keys 1 to 88 and then wrapped around, so that you would be on the fourth key, which is white.

// Your function will receive an integer between 1 and 10000 (maybe you think that in principle it would be cool to count up to, say, a billion, but considering how many years it would take it is just not possible) and return the string "black" or "white" -- here are a few more examples:

// 1     "white"
// 12    "black"
// 42    "white"
// 100   "black"
// 2017  "white"

function blackOrWhiteKey(keyPressCount) {

    let blkArr = [2, 5, 7, 10, 12, 14, 17, 19, 22, 24, 26, 29 , 31, 34, 36, 38, 41, 43, 46, 48, 50, 53, 55, 58, 60, 62, 65, 67, 70, 72, 74, 77, 79, 82, 84, 86]
    let count = 0;
    let finalKey;
    let kPC = keyPressCount
    
    for(let i = 0; i <= 89; i++){
      if(count === kPC){
        finalKey = i
        break;
      }
      if(i === 88){
        i = 0;
      }
      count++
    }
    for(let j = 0; j <= blkArr.length; j++){
      if(finalKey === blkArr[j]) return 'black';
    }
    return 'white';
}



    blackOrWhiteKey(1)
    blackOrWhiteKey(5)
    blackOrWhiteKey(12)
    blackOrWhiteKey(42)
    blackOrWhiteKey(88)
    blackOrWhiteKey(89)
    blackOrWhiteKey(92)
    blackOrWhiteKey(100)
    blackOrWhiteKey(111)
    blackOrWhiteKey(200)
    blackOrWhiteKey(2017)