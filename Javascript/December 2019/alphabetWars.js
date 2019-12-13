function alphabetWar(battlefield) {

    let letArr = battlefield.split('');
    let bCnt = 0;
    let sZStart, sZEnd;
    
    for(let i = 0; i < letArr.length; i++){
      if(letArr[i] == '#'){
        ++bCnt;
      }
      if(bCnt == 2){
        if(letArr[i+1] !== '['){
        letArr.splice(0, i)
        bCnt--;
        }
        if([letArr[i+1] == '['){
          letArr[i+1] = sZStart;
          while(letArr[i] != ']') continue;
          if(letArr[i] == ']'){
            
          }
        }
      };
      
    }

    return "oops" ;
}
