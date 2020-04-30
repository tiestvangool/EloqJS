//The Sum of a Range
function range(start, end) {
  let array = [];
  for(i = start; i <= end; i += 1) {
    array.push(i);
  }
  return(array);
}

function sum(range) {
  let total = 0;
  for (value of range) {
    total += value;
  }
  return(total);
}

//Output Create
console.log(range(1, 10));
console.log(sum(range(1, 10)));