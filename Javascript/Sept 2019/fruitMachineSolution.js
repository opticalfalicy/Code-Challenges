/**
 * @param {string[][]} pizza 
 * @param {number[]} spin 
 */
function fruit (pizza, spin) {
  var itemScores = {
    Wild: [100, 10, 0],
    Star: [90, 9, 18],
    Bell: [80, 8, 16],
    Shell: [70, 7, 14],
    Seven: [60, 6, 12],
    Cherry: [50, 5, 10],
    Bar: [40, 4, 8],
    King: [30, 3, 6],
    Queen: [20, 2, 4],
    Jack: [10, 1, 2],
  };

  var shown = [];
  var wilds = 0;

  for (var i = 0; i < spin.length; i++) {
    var showing = pizza[i][spin[i]];
    if (showing === 'Wild') wilds++;
    else shown.push (showing);
  }

  if (wilds >= 3) return 100;
  else if (wilds == 2) return 10;

  if (shown[0] === shown[1] && shown[1] == shown[2])
    return itemScores[shown[0]][0];
  else if ((shown[0] == shown[1] && wilds) || (shown[0] == shown[2] && wilds))
    return itemScores[shown[0]][2];
  else if (shown[0] == shown[1] || shown[0] == shown[2])
    return itemScores[shown[0]][1];
  else if (shown[1] == shown[2]) return itemScores[shown[1]][1];
  else return 0;
}
