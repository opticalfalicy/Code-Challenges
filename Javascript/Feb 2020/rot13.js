
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
    //your code here
    let letNum = 94;
    let mArr = message.split('');
    let qry = ''

    specCheck = /[!@#$%^&*(),.?":{}|<>]/
    console.log(qry.match(specCheck));
  //   console.log(String.charCodeAt(mArr[0]));

  // console.log(String.charCodeAt('a'));
  
  console.log(message.charCodeAt(0));
  console.log(message.letCheck)
  console.log(mArr.charCodeAt(0));
    
    for(let i = 0; i++; i <= mArr.length){

      if(mArr[i].match(specCheck !== null)){
        continue;
      }

      else{
        return str.split('').map(function(item) {
          return String.fromCharCode(item.charCodeAt(0) + 13)
        }).join("")
      }

      // while(String.fromCharCode(mArr[i]) !== letNum){
      //   ++letNum;
      //   console.log('l', letNum);
      // }
      
      // if(String.fromCharCode(mArr[i]) == letNum){
      //   console.log('t');
      // }
    }
    
  }

  console.log(rot13('test'))


//   Test.describe("Rot13", function(){
//     Test.it("test", function(){
//       Test.expect("grfg" == rot13("test"), "Input: test , Expected Output: grfg , Actual Output: " + rot13("test"))
//     })    
//     Test.it("Test", function(){
//       Test.expect("Grfg" == rot13("Test"), "Input: Test , Expected Output: Grfg , Actual Output: " + rot13("Test"))    
//     })
//   })