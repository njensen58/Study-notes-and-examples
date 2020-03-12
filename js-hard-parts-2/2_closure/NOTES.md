# Closure
  * Closure is the most esoteric of JavaScript concepts. ( if you know it, you "really" know JS. )
  * Enables powerful pro-level functions like 'once' and 'memoize'
    ** 'once': functions that realize they have been called before and don't run again
    *** Example of a once function, see app.js Example 2.
    ** 'memoize': functions remembering previous values passed in and returning cached results
  * Many JavaScript design patterns includijng the module pattern use closure
  * Build iterators, handle partial application and maintain state in an asynchronous world

## Functions with Memories
  * When functions are called, we create a live store of data (local memory/variable environment/state) for that 
    function's execution context.
  * When the function finished exectuing, its local memory is deleted (except the returned value)
  * But what if our functions could hold on to live data between executions?
  * This would let our function definitions have an associated cache/persistent memory.
  * This All Starts with us returning a function from another function.


  # Functions can be declared and returned from other functions in Javascript
    * ABSOLUTELY IMPORTANT TO UNDERSTAND:
      ** A function that is declared inside of another function and then returned from that function has no further
         relationship with the function it was declared inside.  Sure it was created inside of that function, but once
         its been returned it has no relation whatsoever.
      ** So why do it this way when you could have just declared the function globally in the first place?
      *** It turns out that when a function is returned from another function it gets the most powerful bonus
          property/feature of JS we can ask for.

    * CLOSURE!! - When a function is returned from another function, it takes with it the local memory of its parent function.
    * When a function is called and does not find a variable reference in it's own execution context memory, it then looks at
      its closure memory before lastly moving to global memory.
    * This allows a function definition that is returned from another function to have a permanent memory!
      - See app.js ex: 1.

  # Caveats to closure memory
    * As soon as a function is declared inside of another function, it is given a hidden property `[[scope]]`.
      ** That means when it is returned from the function, that hidden property comes with it.
      ** We cannot access that property `[[scope]]`, the only way to get to that data is by using the function to change/access it.
      ** If the outer function declares a variable that the returned function never references (aka can never use), modern javascript
         engines will optimize the closure scope and only include variables that the returned function will need access to.
        `Memory Leak`: If all variables were included, that would mean there would be variables saved in computer memory that would
         never be used, that is a memory leak.
  # Functional Programming Note
    * `Function Decoration` refers to passing a function into another function and then eventually returning it from that function
      so that it's closure scope includes the local memory of the function it was passed into.

  # The data in the closure is:
    * The data is persistent, not like regular memory in a function that deletes after execution.
  
  # Lexical (Static) Scope
    * Javascript uses `Lexical (static) scoping`:  Persistent Lexical Static Reference Data ( Backpack / Closure )
      * Where I define my function determines what data it has access to. This is lexical scoping, and is how a funciton knows to
        first check its closure scope for data if its not first found in its own local scope memory.
      ** `Dynamic scoping` would be where a the data a function has access to depends on where it is called. This is not JS.
      * The backpack of a function exists due to the lexially scoped nature of javascript, the resulting backpack of 
        data is what we call the closure.

  # What do we call the 'Backpack' review terms:
    * Closed over variable environment (C.O.V.E)
    * Persistent Lexical Scope Referenced Data (P.L.S.R.D)
    * Backpack
    * Closure
    * The Backpack (or closure) of live data is attached through a hidden property known as `[[scope]]` which persists when
      the inner function is returned out.

    * When a function returns another function, that returned function receives its
      own backpack. This means if the outer function was called more than once, the
      instances of the returned function all have their own private/separate backpack.



  # Closure gives our functions persistent memories and an entirely new toolkit for writing professional code:
    * `Helper Functions`: Everyday professional helper functions like 'once' and 'memoize'.
    * `Iterators and generators`: Which use lexical scoping and closure to achieve the most contemporary patterns for handling data in JavaScript.
    * `Module pattern`: Preserve state for the life of an application without polluting the global name space.
    * `Asynchronous JavaScript`: Callback and Promises reely on closure to persist state in an asynchronous environment.

    # Once Functions:
      * A function that does it's purpose and can't be run again.  If it is ran again it will either return a message or the initial value from the first time it was called.
    # Memoization:
      * When you have an expensive task in your program, its best if you can remember inputs given to the funciton overtime so that if an input that was previously given is given again, you don't have to re-run the calculations. Rather you just returned the 'cached' returned value from when it was called with that input previously.
    # Iterators & Generators
    # Module Pattern: 
      * Module patterns just use backpacks to save information so that it doesn't get saved in the global scope, this also controls access to those peices of data so that you can only access it through methods you have built in the module.