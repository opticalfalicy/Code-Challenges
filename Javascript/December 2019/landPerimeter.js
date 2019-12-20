// Given an array arr of strings complete the function landPerimeter by calculating the total perimeter of all the islands. Each piece of land will be marked with 'X' while the water fields are represented as 'O'. Consider each tile being a perfect 1 x 1piece of land. Some examples for better visualization:

// ['XOOXO',
//  'XOOXO',
//  'OOOXO',
//  'XXOXO',
//  'OXOOO']

//  should return: "Total land perimeter: 24",
// while

// ['XOOO',
//  'XOXO',
//  'XOXO',
//  'OOXX',
//  'OOOO']

//  'OOOO']should return: "Total land perimeter: 18"


function landPerimeter(arr) {
    let totalCount = 0;
    arr.forEach(function(row, i) {
      let arrOfLand = row.split('');
      arrOfLand.forEach(function(curr, j){
        if (curr === 'X'){
          let currCount = 4;
            if (curr === 'X' && i === 0){
              if(arr[i][j+1] === 'X') {
                currCount -= 1;
              }
              if (arr[i + 1][j] === 'X') {
                currCount -= 1;
              }
              if (arr[i][j - 1] === 'X') {
                currCount -= 1;
              }
            }
          if (curr === 'X' && i === arr.length-1) {
            if (arr[i - 1][j] === 'X'){
              currCount -= 1;
            }
            if (arr[i][j+1] === 'X'){
              currCount -= 1;
            }
            if (arr[i][j-1] === 'X'){
              currCount -= 1;
            }
          }
          if (curr === 'X' && i !== 0 && i !== arr.length - 1){
            if (arr[i][j+1] === 'X'){
              currCount -= 1;
            }
            if (arr[i][j-1] === 'X'){
              currCount -= 1;
            }
            if (arr[i + 1][j] === 'X'){
              currCount -= 1;
            }
            if (arr[i - 1][j] === 'X'){
              currCount -= 1;
            }
          }
          totalCount += currCount;
        }
        });
        });
        return `Total land perimeter: ${totalCount}`;
  }