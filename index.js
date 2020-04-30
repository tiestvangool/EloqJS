//The Sum of a Range
function range(start, end) {
  let array = [];
  for(i = start; i <= end; i += 1) {
    array.push(i);
  }
  return(array);
}


console.log(range(1, 10));