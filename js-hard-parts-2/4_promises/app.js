///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @{EXAMPLE_1}
*/

// first this function is stored in JS global memory
function display(data){
  console.log(data)
}

// future data is created in global memory and its value is immediately assigned to the returned promise object
  // The promise object will have a "value", which for now is undefined.
  // The promise object will have a hidden property called "onFullfilled" which is an array.

  // As this object is being saved in Javascript, the fetch (facade function) is also setting 
  // up the XHR/AJAX/Network request in the browser.
  // The url address (twitter.com), the url endpoint (/will/tweets/1), and the http 
  // request type (GET, POST, etc.) are passed to the network request in the browser.
  // The request also is checking if the request is complete, and what to do "on completion"
      // Unlike the callback model, no callback function is passed into fetch
  // Instead of the callback, on completion the browser will put the "response" object from
  // the Server in the promise object's .value property.
const futureData = fetch("some url")
  // Next (synchronously), .then() is called on future data which takes the "display" function and places
  // it into the onFullfilled array in the promise object!
futureData.then(display)
  // Next (sychronously), this console.log occurs
console.log("Me First!")
// Now some time passes as the api is still recieving request/sending response
// ...
// Once the data comes back from the server:
  // 1. The value property of the promise object is updated to be the response
  // 2. The onFullfilled functions are called and given the value as an argument
// So now display is called, a new execution context is made, and the function executes synchronously.


///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @{EXAMPLE_2}
*/

// 1. Stores display in global memory
function display(data){ console.log(data) }
// 2. Stores printHello in global memory
function printHello(){ console.log("Hello") }
// 3. Stored BlockFor300ms in global memory
function blockFor300ms(){ /* blocking thread for 300ms */ }

// 4. Triggers a timer in the browser and places printHello as the function to add to the callback queue on completion.
// 5. Timeout ends immediatly and printHello is placed in the callback queue in the browser
//    to be executed when all other code is finished
setTimeout(printHello, 0)

// 6. 'futureData' is assigned the returned Promise from fetch and is stored in global memory, while the browser sets up/sends the network
//    request to the url and waits for it to complete.
const futureData = fetch("https://rickandmortyapi.com/api/character")
// 7. The promise object's .then() method is called to place the reference to the display function inside of the onFullfilled array
//    hidden property on the promise.
futureData.then(display)

// 8. "blockFor300ms" is called and begins its 'expensive' operations that block the thread for 300ms.
// 9. At 270 ms, while the thread is still blocked, the network request finishes in the browser, but all 
//    global code has to finish before the value property of the promise object is updated.
blockFor300ms()
// 10. Block for 300ms finished and is popped off the call stack.
// 11. 302 ms: Console.log of "Me first!" is now called, (Synchronous code always has the priority).
console.log("Me first!")
// 12. At 303ms, things now get interesting.  printHello was placed in the callback queue (AKA: task queue) first,
//     and now that all global code is done:
       //    1. Updates the value property of the promise object in JS.
       //    2. Places the function from the onFullfilled array into the microtask queue.
// 13. As the browser's event loop is working, it will check the microtask queue before the task queue, so at this
//     point the "display" function is popped from the microtask queue, pushed on the the call stack, and executed
//     with the promises.value property being passed in as an argument.
// 14. the display function executes, gets popped off the call stack, and FINALLY the printHello function in the
//     callback queue is pushed onto the callstack and executed.


// Order of console logs.  1. Me First!   2. The console.log in display   3. "Hello!"
///////////////////////////////////////////////////////////////////////////////////////////////