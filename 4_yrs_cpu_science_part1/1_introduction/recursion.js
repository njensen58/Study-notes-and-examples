//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
///// Example 1 ///////
/**
 * {Basic_Recursion}
*/

let wr = (msg = "-----------") => document.write(`<br>${msg}`)

// Almost every first line of any recursive function will be the base case:
// The Base Case is when you STOP recursing, so you want to set that up first so
// there is no stack overflow.
function basicRecursion(max, current){
  if(current > max) return;
  wr(current)
  basicRecursion(max, current + 1)
}

// The way recursion works, is all funciton calls are added to the call stack as the function calls itself,
// So for the example above, the call stack would have the following calls before the base case is triggered:
  //  basicRecursion(0, 1) // This is the final call, where the base case is triggered, returns, and gets popped off the stack
  //  basicRecursion(1, 1)
  //  basicRecursion(2, 1)
  //  basicRecursion(3, 1)
  //  basicRecursion(4, 1)
  //  basicRecursion(5, 1)

basicRecursion(5, 1)
wr()
wr()


// This is a worthless application of recursion, but shows how it works
// Now a probable application of recursion, fibonacci

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
///// Example 2 ///////
/**
 * {Fibonacci}
 * The Fibonacci sequence is a set of numbers that starts with a one or a zero, 
 * followed by a one, and proceeds based on the rule that each number (called a Fibonacci number) 
 * is equal to the sum of the preceding two numbers.
*/ 

// This solution sucks because we end up just adding '1' on each iteration
// to get the final fibonacci number.
function fibonacci(n){
  if(n <= 2){ // base case
    return 1
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

// for(let i = 0; i <= 20; i++){
//   wr(`${i}. ${fibonacci(i)}`)
// }


//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
///// Example 3 ///////
/**
 * {Factorials}
 * A factorial is when you take a number and multiply by each preceding integer until you hit 1.
 * So 5! would be: 5 * (5-1) * (5-2) * (5-3) * (5-4) === 5 * 4 * 3 * 2 * 1
*/ 

function factorial(n){
  if(n <= 1){
    return 1
  } else {
    return n * factorial(n - 1)
  }
}

console.log(factorial(1))  // 1
console.log(factorial(2))  // 2
console.log(factorial(3))  // 6
console.log(factorial(5))  // 120
console.log(factorial(10)) // 3628800

// In the case where we pass in 5, here are the 5 return statements in callstack order:
  // return 1                     ===  return 1
  // return 2 * factorial(2 - 1)  ===  return 2 * 1  = 2
  // return 3 * factorial(3 - 1)  ===  return 3 * 2  = 6
  // return 4 * factorial(4 - 1)  ===  return 4 * 6  = 20
  // return 5 * factorial(5 - 1)  ===  return 5 * 20 = 120

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////