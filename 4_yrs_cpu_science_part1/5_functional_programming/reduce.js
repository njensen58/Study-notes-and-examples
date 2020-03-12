

const addTogether = list => list.reduce((fin, cur) => fin + cur, 0)

const concatenateStringsWithSpaces = list => {
  return list.reduce((acc, str) => acc + str + " ", "")
}

const squaresAndSubtracts = list => {
  return list
    .map(num => num * num)
    .reduce((fin, cur) => fin - cur)
}


const myReduce = (list, fn, seed) => {
  let answer = seed || list[0]
  for(let i = seed ? 0 : 1; i < list.length; i++){
    answer = fn(answer, list[i])
  }
  return answer
}


const nums = [1, 2, 3, 3, 4, 5, 5, 3, 5, 1, 1, 0]
const createIndexOrIncrement = (fin, cur) => {
  if(!fin[cur]){
    fin[cur] = 1
  } else {
    fin[cur]++
  }
  return fin
}
const result = myReduce(nums, createIndexOrIncrement, {})

// Counts the occurance of all numbers in the array and creates an object.
console.log(result)





