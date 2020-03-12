
function bubbleSort(arr){
  let swapped
  let n = 0 
  while(!swapped){
    swapped = true
    for(let i = arr.length - 1; i >= n; i--){
      if(arr[i] < arr[i - 1]){
        let temp = arr[i]
        arr[i] = arr[i - 1]
        arr[i - 1] = temp
        swapped = false
      }
    }
    n++
  }
  return arr
}

console.log(bubbleSort([4, 20, 5, 11, 0, 85, 6, 40, 34]))



function bubbleSort2(arr){
  let swapped = false
  do {
    swapped = false
    for(let i = 0; i < arr.length; i++){
      if(nums[i] > nums[i + 1]){
        const temp = nums[i]
        nums[i] = nums[i + 1]
        nums[i + 1] = temp
        swapped = true
      }
    }
  } while(swapped)
}

console.log(bubbleSort([4, 20, 5, 11, 0, 85, 6, 40, 34]))