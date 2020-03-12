# ES6 (2015) Solution to asynchronous code (Promises)
  * Using two-pronged 'facade' functions that both:
    - Initiate background web browser work and,
    - Return a placeholder object (promise) immediately in JavaScript.
  * `fetch`: The label (facade function) in JavaScript that sets up a network request in the 
    browser and simultaneously return a `promise` object in JS.
    - This is unlike previous network requests that would just set up the request 
      in the browser much like a setTimeout that would then wait queued in the callback queue when ready.
  ## See Example 1 in app.js
    * When fetch is used, it does two things at once:
      1. It returns a Promise object in JS
      2. It sets up/sends the network request to the url and waits for it to complete
        * When the request is complete, the browser will put the response in the .value property of that promise object.
    * Fetch's `onFullfilled` array can be given functions to execute once the request is done. When that happens:
      1. First the value property of the promise is updated (automatically) with the response data.
      2. Any function in the onFullfilled array will be called and be given the value as an argument.
    # So the question is, how do we add a function to that array of the returned promise object?
      * The `.then()` method is the one that is given a function and will and .push it into the onFullfilled array.
      * Once a fetch request is finished, it assigned the promises.value property to the response data, and then
        calls all functions in the onFullfilled array, automatically passing them the value as an argument.

  # Another question, how does our promise-deferred function get back into JavaScript to be run?
    ## See example 2 in app.js 
    * The `task queue` is used for functions like setTimeout, or any facade function that takes a callback function as an argument.
    * The `microtask queue` is used for facade functions like fetch, that take a url, return something in JS immediately.
    * The `event loop` in the browser will always check the microtask queue before the task queue for which
      callback to execute after all global synchronous code is executed. 

    ## Interesting Point!:
      * If a function in the microtask queues perform operations that add more functions to the microtask queue,
        the Event Loop will continue to call those functions before moving on to the task queue.

  # Benefits and Problems:
    * Problems:
      - 99% of developers have no idea how they're working under the hood
      - Debugging becomes super-hard as a result
      - Developers fail technical interviews
    * Benefits:
      - Cleaner readable style with pseudo-synchronous style code
      - Nice error handling process

  # The promise really has 2 hidden properties:
    * `onFullfilled array`: functions are added to this array using the .then() method
    * `onRejected array`:   functions are added to this array using the .catch() method.

  # We have rules for the execution of our asynchronously delayed code:
    * Hold promise-deferred functions in a microtask queue and callback functions in a task queue.
    * Add the function to the Call stack from a queue when:
      - Call stack is empty & all global code has run (Have the event loop check this condition)
    * Prioritize functions in the microtask queue over the Callback queue.

  # Promises, Web APIs, the Callback & Microtask Queues and Event loop enable:
    * `Non-Blocking applications`: This means we don't have to wait in the single thread and don't block further code from running.
    * `However long it takes`: We cannot predict when our Browser feature's work will finish so we let JS handle automatically running
       the function on its completion.
    * `Web Applications`: Asynchronous JavaScript is the backbone of the modern web and lets us build fast 'non-blocking' applications.