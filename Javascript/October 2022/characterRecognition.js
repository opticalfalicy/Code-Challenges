// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

//     S is misinterpreted as 5
//     O is misinterpreted as 0
//     I is misinterpreted as 1

// https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript

function correct(string)
{
  let sArr = string.split('');
  let i;
  
  for(i = 0; i <= sArr.length; i++){
    if(sArr[i] == 5){sArr[i] = 'S'}
    if(sArr[i] == 0){sArr[i] = 'O'}
    if(sArr[i] == 1){sArr[i] = 'I'}
  }
  return sArr.join('');
  
}