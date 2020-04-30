var SCRIPTS = [
  {
    name: "Adlam",
    ranges: [[125184, 125259], [125264, 125274], [125278, 125280]],
    direction: "rtl",
    year: 1987,
    living: true,
    link: "https://en.wikipedia.org/wiki/Fula_alphabets#Adlam_alphabet"
  },
  {
    name: "Caucasian Albanian",
    ranges: [[66864, 66916], [66927, 66928]],
    direction: "ltr",
    year: 420,
    living: false,
    link: "https://en.wikipedia.org/wiki/Caucasian_Albanian_alphabet"
  },
  {
    name: "Ahom",
    ranges: [[71424, 71450], [71453, 71468], [71472, 71488]],
    direction: "ltr",
    year: 1250,
    living: false,
    link: "https://en.wikipedia.org/wiki/Ahom_alphabet"
  }
];

//FILTERING Arrays
function z_filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return(passed);
}

//Output custom function and standard function
console.log(z_filter(SCRIPTS, script => script.living));
console.log(SCRIPTS.filter(s => s.direction == "ltr"));

//TRANSFORMING with map
function z_map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return(mapped);
}

//Output custom function and standard function
let ltrScripts = SCRIPTS.filter(s => s.direction == "ltr");
console.log(z_map(ltrScripts, s => s.name));
console.log(ltrScripts.map(s => s.name));
//FILTER AND MAP using COMPOSABILITY
console.log(SCRIPTS.filter(s => s.direction == "rtl").map(s => s.name));

//SUMMARIZE with reduce
function z_reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return(current);
}

//Output custom function and standard function
console.log(z_reduce([1,2,3,4,5], (a, b) => a + b, 0));
console.log([1, 2, 3, 4].reduce((a, b) => a + b));

//COMPOSABILITY
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(Math.round(average(SCRIPTS.filter(s => s.living).map(s => s.year))));
console.log(Math.round(average(SCRIPTS.filter(s => !s.living).map(s => s.year))));