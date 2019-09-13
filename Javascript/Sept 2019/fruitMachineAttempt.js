// Introduction
//  	Slot machine (American English), informally fruit machine (British English), puggy (Scottish English slang), the slots (Canadian and American English), poker machine (or pokies in slang) (Australian English and New Zealand English) or simply slot (American English), is a casino gambling machine with three or more reels which spin when a button is pushed. Slot machines are also known as one-armed bandits because they were originally operated by one lever on the side of the machine as distinct from a button on the front panel, and because of their ability to leave the player in debt and impoverished. Many modern machines are still equipped with a legacy lever in addition to the button. (Source Wikipedia)

// Task
//  	You will be given three reels of different images and told at which index the reels stop. From this information your job is to return the score of the resulted reels.
// Rules
//  	1. There are always exactly three reels
// 2. Each reel has 10 different items.
// 3. The three reel inputs may be different.
// 4. The spin array represents the index of where the reels finish.
// 5. The three spin inputs may be different
// 6. Three of the same is worth more than two of the same
// 7. Two of the same plus one "Wild" is double the score.
// 8. No matching items returns 0.
// Scoring
// Item
// Three of the same
// Two of the same
// Two of the same plus one Wild
// Wild
// 100
// 10
// N/A
// Star
// 90
// 9
// 18
// Bell
// 80
// 8
// 16
// Shell
// 70
// 7
// 14
// Seven
// 60
// 6
// 12
// Cherry
// 50
// 5
// 10
// Bar
// 40
// 4
// 8
// King
// 30
// 3
// 6
// Queen
// 20
// 2
// 4
// Jack
// 10
// 1
// 2

// Returns
//  	Return an integer of the score.
// Example
// Initialise
// reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
// reel2 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
// reel3 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
// spin = [5,5,5];
// result = fruit([reel1,reel2,reel3],spin);
// Scoring
// reel1[5] == "Cherry"
// reel2[5] == "Cherry"
// reel3[5] == "Cherry"

// Cherry + Cherry + Cherry == 50

function fruit (reels, spins) {
  // Code here
  let reel1 = reels[0];
  let reel2 = reels[1];
  let reel3 = reels[2];

  let spin1 = reel1[spins[0]];
  let spin2 = reel2[spins[1]];
  let spin3 = reel3[spins[2]];

  let finVal = 0;

  let wildCardCheck = false;
  let wildCardOne = false;
  let wildCardTwo = false;
  let wildCardThree = false;
  let wildCardCount = 0;

  if (!wildCardCheck) {
    if (spin1 == 'Wild') {
      wildCardOne = true;
      wildCardCount++;
    }
    if (spin2 == 'Wild') {
      wildCardTwo = true;
      wildCardCount++;
    }
    if (spin3 == 'Wild') {
      wildCardThree = true;
      wildCardCount++;
    }
  }

  let checkMatches = false;
  let oneTwo = false;
  let twoThree = false;
  let threeOne = false;
  let matchCount = 0;

  if (!checkMatches) {
    if (spin1 == spin2) {
      oneTwo = true;
      matchCount++;
    }
    if (spin2 == spin3) {
      twoThree = true;
      matchCount++;
    }
    if (spin3 == spin1) {
      threeOne;
      matchCount++;
    }
  }

  // No Match

  if (spin1 != spin2 && spin2 != spin3 && spin3 != spin1) {
    finVal = 0;
    return finVal;
  }

  // Triple

  if (spin1 == spin2 && spin2 == spin3 && spin3 == spin1) {
    let card = spin1;

    if (card == 'Wild') {
      finVal = 100;
      return finVal;
    }
    if (card == 'Star') {
      finVal = 90;
      return finVal;
    }
    if (card == 'Bell') {
      finVal = 80;
      return finVal;
    }
    if (card == 'Shell') {
      finVal = 70;
      return finVal;
    }
    if (card == 'Seven') {
      finVal = 60;
      return finVal;
    }
    if (card == 'Cherry') {
      finVal = 50;
      return finVal;
    }
    if (card == 'Bar') {
      finVal = 40;
      return finVal;
    }
    if (card == 'King') {
      finVal = 30;
      return finVal;
    }
    if (card == 'Queen') {
      finVal = 20;
      return finVal;
    }
    if (card == 'Jack') {
      finVal = 10;
      return finVal;
    }
  }

  if (matchCount == 1) {
    if (wildCardCount === 0) {
      if (oneTwo && !threeOne) {
        let card = spin1;
        if (card == 'Wild') {
          finVal = 10;
          return finVal;
        }
        if (card == 'Star') {
          finVal = 9;
          return finVal;
        }
        if (card == 'Bell') {
          finVal = 8;
          return finVal;
        }
        if (card == 'Shell') {
          finVal = 7;
          return finVal;
        }
        if (card == 'Seven') {
          finVal = 6;
          return finVal;
        }
        if (card == 'Cherry') {
          finVal = 5;
          return finVal;
        }
        if (card == 'Bar') {
          finVal = 4;
          return finVal;
        }
        if (card == 'King') {
          finVal = 3;
          return finVal;
        }
        if (card == 'Queen') {
          finVal = 2;
          return finVal;
        }
        if (card == 'Jack') {
          finVal = 1;
          return finVal;
        }
      } else if (threeOne && !twoThree) {
        let card = spin3;
        if (card == 'Wild') {
          finVal = 10;
          return finVal;
        }
        if (card == 'Star') {
          finVal = 9;
          return finVal;
        }
        if (card == 'Bell') {
          finVal = 8;
          return finVal;
        }
        if (card == 'Shell') {
          finVal = 7;
          return finVal;
        }
        if (card == 'Seven') {
          finVal = 6;
          return finVal;
        }
        if (card == 'Cherry') {
          finVal = 5;
          return finVal;
        }
        if (card == 'Bar') {
          finVal = 4;
          return finVal;
        }
        if (card == 'King') {
          finVal = 3;
          return finVal;
        }
        if (card == 'Queen') {
          finVal = 2;
          return finVal;
        }
        if (card == 'Jack') {
          finVal = 1;
          return finVal;
        }
      }
    } else if (wildCardCount == 1) {
      if (oneTwo && !threeOne) {
        let card = spin1;
        if (card == 'Wild') {
          finVal = 10;
          return finVal;
        }

        if (card == 'Star') {
          finVal = 18;
          return finVal;
        }
        if (card == 'Bell') {
          finVal = 16;
          return finVal;
        }
        if (card == 'Shell') {
          finVal = 14;
          return finVal;
        }
        if (card == 'Seven') {
          finVal = 12;
          return finVal;
        }
        if (card == 'Cherry') {
          finVal = 10;
          return finVal;
        }
        if (card == 'Bar') {
          finVal = 8;
          return finVal;
        }
        if (card == 'King') {
          finVal = 6;
          return finVal;
        }
        if (card == 'Queen') {
          finVal = 4;
          return finVal;
        }
        if (card == 'Jack') {
          finVal = 2;
          return finVal;
        }
      } else if (threeOne && !twoThree) {
        let card = spin1;
        if (card == 'Wild') {
          finVal = 10;
          return finVal;
        }

        if (card == 'Star') {
          finVal = 18;
          return finVal;
        }
        if (card == 'Bell') {
          finVal = 16;
          return finVal;
        }
        if (card == 'Shell') {
          finVal = 14;
          return finVal;
        }
        if (card == 'Seven') {
          finVal = 12;
          return finVal;
        }
        if (card == 'Cherry') {
          finVal = 10;
          return finVal;
        }
        if (card == 'Bar') {
          finVal = 8;
          return finVal;
        }
        if (card == 'King') {
          finVal = 6;
          return finVal;
        }
        if (card == 'Queen') {
          finVal = 4;
          return finVal;
        }
        if (card == 'Jack') {
          finVal = 2;
          return finVal;
        }
      }
    }
  }
  return finVal;
}
