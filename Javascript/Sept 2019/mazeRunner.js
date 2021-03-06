// Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!

// Maze Runner
// Task
//  	You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.

// The Maze array will look like

// maze = [[1,1,1,1,1,1,1],
//         [1,0,0,0,0,0,3],
//         [1,0,1,0,1,0,1],
//         [0,0,1,0,0,0,1],
//         [1,0,1,0,1,0,1],
//         [1,0,0,0,0,0,1],
//         [1,2,1,0,1,0,1]]
// ..with the following key

//  	0 = Safe place to walk
// 1 = Wall
// 2 = Start Point
// 3 = Finish Point

//   direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
// Rules
//  	1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.
// 2. The start and finish positions will change for the final tests.
// 3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.
// </td>

function mazeRunner (maze, directions) {
  //find start value

  var x = 0; //x position of the start point
  var y = 0; //y position of the start point

  for (var j = 0; j < maze.length; j++) {
    if (maze[j].indexOf (2) != -1) {
      x = j;
      y = maze[j].indexOf (2);
    }
  } // end of starting position forloop

  console.log (x + ', ' + y);

  for (var turn = 0; turn < directions.length; turn++) {
    if (directions[turn] == 'N') {
      x -= 1;
    }
    if (directions[turn] == 'S') {
      x += 1;
    }
    if (directions[turn] == 'E') {
      y += 1;
    }
    if (directions[turn] == 'W') {
      y -= 1;
    }

    if (maze[x] === undefined || maze[y] === undefined) {
      return 'Dead';
    }
    if (maze[x][y] === 1) {
      return 'Dead';
    } else if (maze[x][y] === 3) {
      return 'Finish';
    }
  }

  return 'Lost';
}
