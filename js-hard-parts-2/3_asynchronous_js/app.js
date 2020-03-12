////////////////////////////////////////////////
/**
 * @{EXAMPLE_1}
*/

// This stores the function printHello in global memory
function printHello(){ console.log("Hello") }

// This goes to the browser and sets up the "Timer" at 1000 ms.
// It sets up an "on completion" function and sets "printHello" has the thing to do.
// At this point 'setTimeout' has done what it needs to as far as JS is concerned, so it
// can then move on to do the console.log below ("Me first!").
setTimeout(printHello, 1000)

console.log("Me first!")

// At this point JS is done running the code, the call stack is empty, and there is still 
// a full second basically that the browser will be keeping time.

// After the 1000 ms has passed, the browser places 'printHello' onto JS callstack and it gets executed.

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

/**
 * @{EXAMPLE_2}
*/

// First this function is stored in global memory
function printHello(){ console.log("Hello") }
// Second, this function is stored in global memory
function blockFor1Sec(){ /* this function blocks the JavaScript thread for 1 sec (like a expensive for-loop) */ }

// A timer is triggered in the browser with a 0ms timer, and an on-complete trigger to run printHello from global memory.
// The timer is completed immediately, but its not added to the call-stack immediately, its added to a 'queue'.
// printHello is passed into the callback queue up in the browser.
setTimeout(printHello, 0)

// This function is called before printHello is triggered from the callback queue.
// This function is now on the call-stack and will be running for 1000 ms.
blockFor1Sec()

// Then this console log runs, meanwhile printHello is STILL sitting in the callback queue.
console.log("Me First")

// Now print hello is move from the queue to the call stack and gets executed.
   // "Hello"

////////////////////////////////////////////////