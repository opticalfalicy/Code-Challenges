function alphabetWar(battlefield) {

  let letArr = battlefield.split('');
  let bCnt = 0;
  let bFlag = false;
  let sArr = [];
  let sZStart;
  let sZEnd = '';
  let bZStart;
  let bZEnd;
  let seperate = false;
  
  for(let i = 0; i <= letArr.length; i++){

  
    if(letArr[i] == '#'){
//         ++bCnt;
      bFlag = true;
      sArr.push(letArr[i]);
    }
    if(letArr[i] == '['){
      sZStart = letArr[i];
      sArr.push(sZStart);
      
      while(sZEnd === ''){
        i++
        if(letArr[i] == ']'){
        sArr.push(letArr[i]);
        sZEnd = letArr[i];
        }
        else sArr.push(letArr[i]);
      }
      sZStart = '';
      sZEnd = '';
      
    } 
  }
  
    if(i = letArr.length && bFlag == false){
      let nField = battlefield.replace(/[^a-z]/g, "");
      return nField;
    }
    
    if(bFlag = true){
    
      for(let j = 0; j <= sArr.length; j++){
        if(sArr[j] == '#'){
          ++bCnt;
          bZStart = sArr[j]
        }
        
        if(sArr[j] == '[') seperate = true;
        
        if(bCnt == 2){
          if(seperate == true){ 
            sArr.splice(0, sArr[j])
            --bCnt;
            seperate = false;
          }
          
          else{
            while(bZEnd == undefined){
              j++;
              if(sArr[j] == ']' || j == sArr.length){
                bZEnd = sArr[j];
              }
            }
            
        if(bZEnd == ']'){
              sArr.splice(0, bZEnd);
          }
          
        }
      }
    }
  }
  console.log(sArr)

  return "oops" ;
}
