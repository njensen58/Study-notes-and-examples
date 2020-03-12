// recursive divide and conquer strategy

// 1. given an array
// 2. [5, 7, 4, 9, 6] 
// 3. first you choose a pivot, we'll take the last element for example, so "6"
// 4. Construct 2 lists
  // 5. The left list (lesser list) are going to be all of the numbers smaller than the pivot "6"
  // 6. The right list (greater list) ar going to be all of the numbers greater than the pivot "6"
    // 7. Numbers equal to the pivot just need to consistently go into the lesser OR greater list
// 8. Left list: [5, 4],  Right list: [7, 9],  Pivot: 6
// 9. Now call quicksort on the smaller lists (both of them)
// 10. Concatenate the left list, the pivot, and the right list.

// *: Base case is getting an array that is either empty, or length of 1.
// *: The pivot is not passed down, a new pivot is created on each recursive call.

//////////////////
// My solution
function quickSort(arr){
  if(arr.length <= 1){
    return arr
  }
  const pivot = arr[arr.length - 1]
  const left = [], right = []
  for(let i = 0; i < arr.length - 1; i++){
    if(arr[i] <= pivot){
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([5, 30, 3, 49, 11, 2, 48, 55, 3, 20]))

//////////////////
// Class solution
function quickSort2(arr){
  if(arr.length <= 1){
    return arr
  }
  const pivot = arr[arr.length - 1]
  const left = [], right = []
  for(let i = 0; i < arr.length - 1; i++){
    if(arr[i] < pivot){
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort2([5, 30, 3, 49, 11, 2, 48, 55, 3, 20]))
