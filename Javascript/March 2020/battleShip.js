// Task
// Your task in the kata is to determine how many boats are sunk damaged and untouched from a set amount of attacks. You will need to create a function that takes two arguments, the playing board and the attacks.

// Example Game
// The board
 	
// X
// Y
 	
// 1
// 2
// 3
// 4
// 5
// 6
// 4
// 0
// 0
// 2
// 2
// 2
// 2
// 0
// 3
// 0
// 0
// 0
// 0
// 0
// 3
// 0
// 1
// 0
// 0
// 0
// 3
// 0
// 1
// 0
// 0
// 3
// 2
// 1
 

// Boats are placed either horizontally, vertically or diagonally on the board. 0 represents a space not occupied by a boat. Digits 1-3 represent boats which vary in length 1-4 spaces long. There will always be at least 1 boat up to a maximum of 3 in any one game. Boat sizes and board dimentions will vary from game to game.

// Attacks
// Attacks are calculated from the bottom left, first the X coordinate then the Y. There will be at least one attack per game, and the array will not contain duplicates.

// [[2, 1], [1, 3], [4, 2]];
// First attack      `[2, 1]` = `3`
// Second attack `[1, 3]` = `0`
// Third attack     `[4, 2]` = `1`
// Function Initialization
// board = [[0,0,0,2,2,0],
//          [0,3,0,0,0,0],
//          [0,3,0,1,0,0],
//          [0,3,0,1,0,0]];
// attacks = [[2, 1], [1, 3], [4, 2]];
// damagedOrSunk(board, attacks);
// Scoring
// 1 point for every whole boat sank.
// 0.5 points for each boat hit at least once (not including boats that are sunk).
// -1 point for each whole boat that was not hit at least once.
// Sunk or Damaged
// `sunk` = all boats that are sunk
// `damaged` = all boats that have been hit at least once but not sunk
// `notTouched/not_touched` = all boats that have not been hit at least once
// Output
// You should return a hash with the following data

// `sunk`, `damaged`, `notTouched`, `points`
// Example Game Output
// In our above example..

// First attack: `boat 3` was damaged, which increases the `points` by `0.5`
// Second attack: miss nothing happens
// Third attack: `boat 1` was damaged, which increases the `points` by `0.5`
// `boat 2` was untouched so `points -1` and `notTouched +1` in Javascript/Java/C# and `not_touched +1` in Python/Ruby.
// No whole boats sank
// Return Hash
// { sunk: 0, damaged: 2 , notTouched: 1, points: 0 }


function damagedOrSunk (board, attacks){
  //the battle starts here!

let bArr = board;
let aArr = attacks;
let curAttack;
let x = 0, y = 0;
let i = 0;
let sunk = 0, damaged = 0, notTouched = 0, points = 0;

//iterate through attacks

// for(let i = 0; i < attacks.length; i++){
while(i < aArr.length){

// loop through each attack, determine coordinates
  for(let l = 0; l < aArr[i].length; l++){
      x = attacks[i][0];
      y = attacks[i][1];
  }
  
  for(let j = 0; bArr[y][j]; j++){
    if(x = j && bArr[y][j] == 0) continue;
    
    if(x = j && bArr[y][j] == 1) ++sunk;
    
//     if(x = j 
  }
  
  
  
  
}
  }
function damagedOrSunk (board, attacks){
    //the battle starts here!
  
  let bArr = board;
  let aArr = attacks;
  
  //iterate through attacks
  
  for(let l = 0; l < attacks.length; l++){
    for(let k = 0; k < attacks[l].length; k++){
      console.log(attacks[k]);
    }
  }
  
    // report attack locations
  
  //iterate through board
  
  for(let i = 0; i < bArr.length; i++){
    for(let j = 0; j < bArr[i].length; j++){
      console.log(bArr[j]);
    }
    
  }
  
  
    // report ship placement / lengths
    
  // compare ships to attacks
  
  // return damage stats
  
  }