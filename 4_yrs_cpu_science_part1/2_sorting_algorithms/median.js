// given 2 sorted arrays, find the median element for the two arrays.

//////
// ineffecient if you have a lot of indexes, so not a good solution
function findMedian1(arr1, arr2){
  const arr = arr1.concat(arr2).sort((a, b) => a - b)
  return arr[Math.floor(arr.length / 2)]
}

console.time("1")
console.log(findMedian1([1, 3, 3, 5, 8, 9, 10], [2, 3, 7, 19]))
console.timeEnd("1") // avg run time === 2.7 ms


///////
// Instead, reuse the 'stitch' logic from mergeSort
function findMedian2(arr1, arr2){
  let result = []
  while(arr1.length && arr2.length){
    if(arr1[0] < arr2[0]){
      result.push(arr1.shift())
    } else {
      result.push(arr2.shift())
    }
  }
  return result[Math.floor([...result, ...arr1, ...arr2].length / 2)]
}
console.time("2")
console.log(findMedian2([1, 3, 3, 5, 8, 9, 10], [2, 3, 7, 19]))
console.timeEnd("2")  // avg run time === .3 ms


/////////////
// Since the media will always be the middle 'nth' element, we could just stich until there!
// There is a bug in this function though, does not give consistent results like other 2 examples.
function findMedian3(arr1, arr2){
  let count = 0
  let target = Math.floor((arr1.length + arr2.length) / 2)
  let result = []
  while(arr1.length && arr2.length){
    if(arr1[0] < arr2[0]){
      result.push(arr1.shift())
    } else {
      result.push(arr2.shift())
    }
    if(count === target){
      return result[result.length - 1]
    }
    count++
  }
}

console.time("3")
console.log(findMedian3([1, 3, 3, 5, 8, 9, 10], [2, 3, 7, 19]))
console.timeEnd("3")  // avg run time === .1 ms