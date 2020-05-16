//A prototype contains properties for which all instances of a
//class share the same value, such as methods.
//
//A class defines the shape of a type of object -- what methods
//and properties it has.
class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];
    
    for(let y = 0; y < height; y++) {
      for(let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }
  
  //Get method to retrieve coordinates
  get(x, y) {
    return this.content[y * this.width + x];
  }
 
 //Set method to update coordinates 
  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
}

class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }
  
  next() {
    if (this.y == this.matrix.height) return {done: true};
    
    let value = {x: this.x,
                 y: this.y,
                 value: this.matrix.get(this.x, this.y)};
    this.x++;
    
    if (this.x == this.matrix.width) {
      this.x = 0;
      this.y++;
    }
    return {value, done: false};
  }
}

//Symbols are - unlike strings - unique and usable as property
//names for interfaces.
Matrix.prototype[Symbol.iterator] = function() {
  return new MatrixIterator(this);
};

let matrix = new Matrix(2, 3, (x, y) => `value ${x},${y}`);
for (let {x, y, value} of matrix) {
  console.log(x, y, value);
}

//Getters, Setters, and Statics
//Method calls directly accessible by properties.
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
//A getter "reads" the value from the corresponding property.
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
//Opposite to getter: the setter, writes a value the property.
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }
//Stored on constructor, invokes: Temparature.fromFahrenheit(100)
  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(18);
//Getter
console.log(temp.fahrenheit);
temp.fahrenheit = 64.4;
//Setter
console.log(temp.celsius);
//Static
console.log(Temperature.fromFahrenheit(80));