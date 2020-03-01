// Task
// Write the function siegfried to replace the letters of a given sentence.

// Apply the rules using the course notes below. Each week you will learn some more rules.

// Und by ze fifz vek yu vil be speakink viz un aksent lik Siegfried viz no trubl at al!
// Lessons
// Week 1
// ci -> si
// ce -> se
// c -> k (except ch leave alone)
// Week 2
// ph -> f
// Week 3
// remove trailing e (except for all 2 and 3 letter words)
// replace double letters with single letters (e.g. tt -> t)
// Week 4
// th -> z
// wr -> r
// wh -> v
// w -> v
// Week 5
// ou -> u
// an -> un
// ing -> ink (but only when ending words)
// sm -> schm (but only when beginning words)
// Notes
// You must retain the case of the original sentence
// Apply rules strictly in the order given above
// Rules are cummulative. So for week 3 first apply week 1 rules, then week 2 rules, then week 3 rules

var siegfried = function(week,str) {
    // your code here!
  //   console.log(week, str);
    
    let nuS = str.split(' ');
    
  //   console.log(nuS);
    
    if(week >= 1){
      for(let i = 0; i < nuS.length; i++){
        if(nuS[i] == 'c' && nuS[i+1] == 'i'){
          nuS[i] = 's';
        }
        if(nuS[i] == 'c' && nuS[i+1] == 'e'){
          nuS[i] = 's';
        }
        if(nuS[i] == 'c' && nuS[i+1] !== 'h'){
          nuS[i] = 'k';
        }
    }}
    if(week >= 2){
      for(let i = 0; i < nuS.length; i++){
        if(nuS[i] == 'p' && nuS[i+1] == 'h'){
          nuS[i] = 's';
          nuS.splice(nuS[i+1], 1);
        }
   } }
    if(week >= 3){
  //     let nuSL = nuS[nuS.length - 1];
      for(let i = 0; i < nuS.length; i++){
        if(nuS[i] == nuS[i+1]){
          nuS.splice(nuS[i], 1);
      }
        if(nuS.length > 3 && nuS[i] == 'e' && nuS[i+1] == ' '){
  //         nuS.splice(nuS[nuS.length - 1)
          nuS.splice(-1)[0];
        }
    }}
      if(week == 4){
      for(let i = 0; i < nuS.length; i++){
        if(nuS[i] == 't' && nuS[i+1] == 'h'){
          nuS[i] = 'z';
          nuS.splice(nuS[i+1], 1);
        }
        if(nuS[i] == 'w' && nuS[i+1] == 'r'){
          nuS[i] = 'r';
          nuS.splice(nuS[i+1], 1);
        }
        if(nuS[i] == 'w' && nuS[i+1] == 'h'){
          nuS[i] = 'v';
          nuS.splice(nuS[i+1], 1);
        }
        if(nuS[i] == 'w'){
          nuS[i] = 'v';
          nuS.splice(nuS[i+1], 1);
        }
        }}
    if(week == 5){
      for(let i = 0; i < nuS.length; i++){
        if(nuS[i] == 'o' && nuS[i+1] == 'u'){
          nuS[i] = 'z';
          nuS.splice(nuS[i+1], 1);
        }
        if(nuS[i] == 'a' && nuS[i+1] == 'n'){
          nuS[i] = 'r';
          nuS[i+1] = 'n';
        }
        if(nuS[i] == 'i' && nuS[i+1] == 'n' && nuS[i+2] == 'g' && nuS[i+3] == ' '){
          nuS[i] = 'i';
          nuS[i+1] = 'n';
          nuS[i+2] = 'k';
        }
        if(nuS[i] == 's' && nuS[i+1] == 'm' && nuS[i-1] == ' '){
          nuS[i+1] = 'c';
          nuS[i+2] = 'h';
          nuS[i+3] = 'm';
        }
        }}
        
    let res = nuS.join(' ');
    
    console.log(nuS);
  
    return res;
  }