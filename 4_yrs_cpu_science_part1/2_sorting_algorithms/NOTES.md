# Sorting Algorithms #

# Bubble Sort  O(n^2) "nested loops"
  * You will never use this in production code, but is a great learning tool.
  * It is built with two loops
    * The outer loop iterates provided there was a "Swap" in the previous iteration.
    * The Inner loop will iterate through the list and swap numbers that are out of order, 
      always finding the nth smallest number each iteration.


# Insertion Sort    O(n) (best case) || O(n^2) (worst case)
  * You will use this in production, it is best case used on arrays that you
    are sure are already sorted or are very close to sorted.
    - It falls apart a bit if the array is not sorted at all.
  * Explanation:
    - Start at the beginning of the list and assume we have a sorted list of length 1 where 
    the first element is only sorted element. We're then going to grab the second element, 
    and insert it into the correct spot in our sorted list, either the 0 index or the 1 
    index, depending if it's smaller or larger than our first element. We now have a sorted 
    list of length 2. We then continue on down the line, inserting elements in our sorted 
    side of the list as the unsorted side dwindles.
  * Inner Loop & Outer Loop
    * Outer loop goes over whole list (i represents where your sorted list is, everything before 'i' is sorted)
    * Inner loop go over the sorted part of the array and insert the current item at the appropriate part.


# Merge Sort   O(n log n)
  * `O(n log n)`: you have to look at everything at least once to create the sorted subArrays, so we have `n`
    - Since the stitching algorithms assumes its getting sorted arrays, it doesn't have to compare every 
      element against every other element, rather the current element in one array vs the current 
      element in another. This give the `log n`
  * Most often the sort you are going to use (arr.sort() 90% of the time is used under the hood)
    - It's very consistent/dependable
  * Explanation: 
    - The basic gist of merge sort is that you're going to take your big list, and first divide down in two half size lists and recursively call merge sort on those smaller list, which in turn will do the same. The base case is when you have a list of one, at which point you will return that sorted list of one. On the way up the recursive calls, you will merge those sorted lists together (preferably by another merge function you'll write) that walks through both lists simultaneously and inserts the smaller value first, effectively creating a bigger sorted list.
  * merge sort returns a call of the `stitching` function with mergeSort called as both of 
    `stitching`'s arguments.  This allos merge sort to drill down to a single item in an array 
    which triggers the base case to return that single item array.  Then recursively on the way
    back through the call stack, stich is being called with ever increasing sized sorted arrays 
    to stich together.

  * Though you will typically use merge sort in real production code, you should never have to write it yourself.
    Someone has already done that and has added in all of the optimizations,
    * So the important part is the concepts are understood in so much that you can deconstruct the algorithm and use parts of it for other purposes.

  # Using mergeSort logic to solve another problem
    * SEE example median.js


# Quick Sort   O(n log n)
  * Another `divide & conquer` sorting algorithm
  * Quicksort is one of the most useful and powerful sorting algorithms out there, and it's not terribly 
    difficult to conceptualize (compared to some algorithms we're not talking about anyway.) Occasionally 
    JavaScript doesn't mergesort for Array.prototype.sort. In those other cases, it's usually some 
    variant on quicksort.
  * Explanation:
    - It's another divide-and-conquer, recursive algorithm but it takes a slightly different approach. 
    The basic gist is that you take the last element in the list and call that the pivot. Everything 
    that's smaller than the pivot gets put into a "left" list and everything that's greater get's put in 
    a "right" list. You then call quick sort on the left and right lists independently (hence the recursion.) 
    After those two sorts come back, you concatenate the sorted left list, the pivot, and then the right 
    list (in that order.) The base case is when you have a list of length 1 or 0, where you just return the 
    list given to you.
  * There are around 70 variations of quicksort, and they vary mostly on how they handle the pivot.

  * Pros & Cons
    * Pros: 
      - Often faster than mergeSort
      - Takes up less memory than mergeSort
    * Cons: 
      - Bad worse case scenario  O(n^2), if the list is already sorted
      - This would cause the left or right lists to always end up as empty arrays, meaning every
        item would be compared against every item.  (n^2)

  * Other Variations all depend on how you handle the pivot.  In the example code
    we used the last element of the array as the pivot.
    - `Quicksort 3`: mitigaes risk by looking at the first element, the middle element,     and the last element, and always picks the middle element of the arrayl.
      - This mitigates the risk of having a sorted list, but can still run into issues,   such ase the first, the middle, and the end all being the same value.