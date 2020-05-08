//Exersize Morning
//Chessboard
let size = 4, board = "";

for (y = 1; y <= size; y++) {
  for (let x = 1; x <= size; x++) {
    if (((x + y) % 2) == 0) {
      board += " ";
    }
    else {
      board += "#";
    }
  }
  board += "\n";
}

console.log("Chessboard\n", board);

//Recursion
function isEven(n) {
  if (n == 0) {
    return true;
  }
  else if (n == 1) {
    return false;
  }
  else if (n < 0) {
    return(isEven(-n));
  }
  else {
    return(isEven(n - 2));
  }
}

console.log("Recusion\n", isEven(75))

//Reversing an Array
let array = [1, 2, 3, "a", 4];

function reverseArray(array) {
  revArray = [];
  for (a = array.length - 1; a >= 0; a = a +- 1) {
    revArray.push(array[a]);
  }
  return(revArray);
}

console.log("Reverse Array\n", reverseArray(array));

//Flattening
let arrays = [[1, 2, 3], [4, "a"], [5]];

console.log("Flattening\n", arrays.reduce((a, b) => a.concat(b)));

//Your Own Loop
function loop(title, start, test, update, body) {
  console.log(title);
  for(value = start; test(value); value = update(value)) {
    body(value);
  }
}

loop("Your Own Loop", 3, n => n > 0, n => n - 1, console.log);