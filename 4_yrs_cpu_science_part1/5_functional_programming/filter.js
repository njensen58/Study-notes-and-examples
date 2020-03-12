const myFilter = (list, fn) => {
  const answer = []
  for(let i = 0; i < list.length; i++){
    if(fn(list[i])){
      answer.push(list[i])
    }
  }
  return answer
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8]
const isEven = num => num % 2 === 0
const result = myFilter(nums, isEven)
console.log(result)