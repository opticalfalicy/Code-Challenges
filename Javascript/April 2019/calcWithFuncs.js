function zero (mathFunc) {
  if (mathFunc === undefined) return 0;
  else return mathFunc (0);
}
function one (mathFunc) {
  if (mathFunc === undefined) return 1;
  else return mathFunc (1);
}
function two (mathFunc) {
  if (mathFunc === undefined) return 2;
  else return mathFunc (2);
}
function three (mathFunc) {
  if (mathFunc === undefined) return 3;
  else return mathFunc (3);
}
function four (mathFunc) {
  if (mathFunc === undefined) return 4;
  else return mathFunc (4);
}
function five (mathFunc) {
  if (mathFunc === undefined) return 5;
  else return mathFunc (5);
}
function six (mathFunc) {
  if (mathFunc === undefined) return 6;
  else return mathFunc (6);
}
function seven (mathFunc) {
  if (mathFunc === undefined) return 7;
  else return mathFunc (7);
}
function eight (mathFunc) {
  if (mathFunc === undefined) return 8;
  else return mathFunc (8);
}

function nine (mathFunc) {
  if (mathFunc === undefined) return 9;
  else return mathFunc (9);
}

function plus (int) {
  return function (curr) {
    return Math.floor (curr + int);
  };
}

function minus (int) {
  return function (curr) {
    return Math.floor (curr - int);
  };
}

function times (int) {
  return function (curr) {
    return Math.floor (curr * int);
  };
}
function dividedBy (int) {
  return function (curr) {
    return Math.floor (curr / int);
  };
}
