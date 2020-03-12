# Asynchronicity is the backbone of modern web development in Javascript yet:
  * Javscript is:
    - Single Threaded (one command runs at a time)
    - Synchronously executed (each line is run in the order of where the code appears)
  * So what if we have a task:
    - Accessing Twitter's server to get new tweets that takes a long time
    - Code we want to run using those tweets.

# JavaScript is not enough - We need new pieces (some of which aren't JavaScript at all)
  * Our core JavaScript engine has 3 main parts:
    - Thread of execution
    - Memory/Variable environment
    - Call Stack
  * We need to add some new components:
    - Web Browser APIs/Node background APIs
    - Promises
    - Event Loop, Callback/Task queue and micro task queue

### ES5 Solution: Introductin 'callback functions', and Web Browser APIs ###
  * The web browser is full of features that JavaScript does not have, such as:
    - Dev tools
    - Sockets
    - Ability to make Network requests (HTTP)
    - Rendering, which is the HTML DOM in the browser
  * JavaScript is built to use these features, but they are NOT features of JavaScript.
    - There many JS features (functions) that are just fronts for these web features.
    - `setTimeout`: The label in JS that is used to interact with the browser's timer feature.
    - `document`: The label in JS that is used to interact with the browser's DOM feature.
    - `fetch` & `XMLHttpRequest(XHR)`: The label in JS used to interact with the browser's network features.
    - `console`: The label in JS used to interact with the console in the browser.
    - `localStorage`: The label in JS used to interact with the browser's storage feature.

  # Example of using setTimeout: See example 1 in app.js
    * How is the browser handling this and triggering the function back to the callstack of JS?

  # Web API Rules - See example 2 in app.js
    * The `Callback Queue`:
      - Functions are moved from the CB queue to the call stack AFTER all regular code has been run.
        - Example: If you had a program that sets a 1 second timeout, but then had 10 seconds of regular code to run after that, the 
                  callback function from setTimeout would run after 10 seconds.
    * The `Event Loop`:
      - The event loop checks the call stack and whether there is anymore code to run after every line of code.
        Once it checks and sees there is: 1. No more code to run, and 2. the call stack is empty, it then moves function(s)
        from the `callback queue`.

  ### Before ES6, the callback queue and the event loop was the entire model of asychronous JavaScript ###
    # Problems with this approach:
      - Our response data is only available in the callback function 
        * Think getting data from a server and having it send it back to have it placed as the argument into your
          callback function so you can access it, but that function with the response data is stuck in the `callback queue` 
          until all other code is completed. - Callback hell
      - Maybe it feels a little odd to think of passing a function into another function only for it to run much later.
    # Benefits
      - Super explicit once you understand how it works under-the-hood.
