// Shows passing in the CB to map
const double = num => num * 2;
// given an array of numbers, will get a new array of those numbers doubled
const doubleEach = input => input.map(double);

const square = num => num * num;
const squareEach = input => input.map(square);

// Composing a larger function from all the smaller functions
const doubleAndSquare = input => input.map(double).map(square);


const myMap = (array, fn) => {
  const result = []
  for(let i = 0; i < array.length; i++){
    result.push(fn(array[i]))
  }
  return result
}