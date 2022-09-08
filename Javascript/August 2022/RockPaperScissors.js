// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"


// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

const rps = (p1, p2) => {ww
    let lHand = p1;
    let rHand = p2;
    
    if(lHand == rHand){
      return "Draw!";
    }
    
    if (lHand != rHand){
      if(lHand == "scissors" && rHand == "paper" || lHand == "rock" && rHand == "scissors" || lHand == "paper" && rHand == "rock"){
          return "Player 1 won!";
      }
      else{
        return "Player 2 won!";
      }
    }
    
  };