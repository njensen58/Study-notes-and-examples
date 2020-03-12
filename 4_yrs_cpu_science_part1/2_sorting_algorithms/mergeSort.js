// My Solution //

function mergeSort(arr){
  if(arr.length === 1){
    return arr
  }
  const arr1 = arr.slice(0, Math.floor(arr.length / 2))
  const arr2 = arr.slice(Math.floor(arr.length / 2))
  return stitch(
    mergeSort(arr1), 
    mergeSort(arr2)
  )
}

console.log(mergeSort([4, 6, 2, 10, 44, 34, 6, 49, 30, 5]))


function stitch(arr1, arr2){
  let result = []
  while(arr1.length || arr2.length){
    if(!arr1.length){
      result = [...result, ...arr2]
      break
    } else if(!arr2.length){
      result = [...result, ...arr1]
      break
    }
    if(arr1[0] >= arr2[0]){
      result.push(arr2[0])
      arr2.splice(0, 1)
    } else {
      result.push(arr1[0])
      arr1.splice(0, 1)
    }
  }
  return result
}



//////////////////////////////////////////////


/// Class Solution /// a lot faster too.
function mergeSort2(nums){
  if(nums.length < 2){
    return nums
  }
  const length = nums.length
  const middle = Math.floor(length / 2)
  const left = nums.slice(0, middle)
  const right = nums.slice(middle)

  // Could do this
    // const sortedLeft = mergeSort(left)
    // const sortedRight = mergeSort(Right)
    // return stitch(sortedLeft, sortedRight)
  return stitch2(mergeSort2(left), mergeSort2(right))
}

function stitch2(left, right){
  const results = []
  while(left.length && right.length){
    if(left[0] <= right[0]){
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
  }
  // while(left.length){
  //   results.push(left.shift())
  // }
  // while(right.length){
  //   results.push(right.shift())
  // }
  return [...results, ...left, ...right]
}


console.log(mergeSort2([4, 6, 2, 10, 44, 34, 6, 49, 30, 5]))