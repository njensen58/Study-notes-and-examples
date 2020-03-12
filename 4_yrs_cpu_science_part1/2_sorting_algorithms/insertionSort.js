
// assume index 0 is sorted.
function insertionSort(arr){
  for(let i = 1; i < arr.length; i++){
    for(let j = 0; j < i; j++){  
      if(arr[i] < arr[j]){
        const spliced = arr.splice(i, 1)
        arr.splice(j, 0, ...spliced)
      } 
    }
  }
  return arr
}


console.log(insertionSort([4, 20, 7, 40, 50, 43, 1, 22]))


// [5, 3, 6]    
// [5] - subArray
  // Then grab things from the list and insert them where they should be
  // Loop over the subArray backward and see if the number is greater than 5 (3 > 5 ?)
  // Then see is 3 < 5?  Yes
    // Insert the 3 at the beginning of the subArray.
  // Then ask is 6 > 5, Yes, insert it in it in place its at.

// Inner Loop & Outer Loop
  // Outer loop goes over whole list (i represents where your sorted list is, everything before 'i' is sorted)
  // Inner loop go over the sorted part of the array and insert the current item at the appropriate part.