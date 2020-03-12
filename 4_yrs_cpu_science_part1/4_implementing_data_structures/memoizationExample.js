function makeMemoizedMatrixFunc(){
  // outer func creates cache variable which gets attached in to inner functions closure scope when called
  const cache = {}
  return function(size){
    // first this function sees if the size passed in is already in the cache and returns it if so
    if(cache[size]) return cache[size]
    // other wise it generate the matrix and adds it to the cache before returning it
    const matrix = []
    for(let i = 0; i < size; i++){
      matrix[i] = []
      for(let j = 0; j < size; j++){
        matrix[i][j] = j
      }
    }
    cache[size] = matrix
    return matrix
  }
}

const makeMatrix = makeMemoizedMatrixFunc()

console.time("1")
const matrix1 = makeMatrix(10000) // avg time: 1565 ms
console.timeEnd("1")
console.log(matrix1)

console.time("2")
const matrix2 = makeMatrix(10000) // avg time: .006 ms
console.timeEnd("2")
console.log(matrix2)