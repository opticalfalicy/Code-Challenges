function order (words) {
  if (words === '') {
    return '';
  }
  var array = [];
  words = words.split (' ');
  var j = 1;
  for (var i = 0; i < words.length; i++) {
    if (words[i].indexOf (j) > -1) {
      array.push (words[i]);
      j++;
      i = -1;
    }
  }
  return array.join (' ');
}
