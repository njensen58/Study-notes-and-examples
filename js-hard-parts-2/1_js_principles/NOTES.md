# 3 Main principles of how JavaScript runs.
  * (Memory) Javascript goes through code line-by-line and executes it, this is the thread of execution 
  * (Thread) Javascript saves data like strings and arrays in computer memory so we can use them later.
  * (Call stack) Javascript keeps track of what function is currently running, meaning where the thread of exeuction is 

  * When a function is called, a new *execution context* is created.  When the main program starts, a *global execution context* is created
    ** Each execution context has memory and the thread of execution.
    ** When a function is initially 'read' when the file first executes, the inside of the function is not read, rather the entirety of the function
       is stored in memory (like a string), and is only read later when called.

  * Global is the first context added to the call stack when a javascript file is executed, and that context stays as the *global scope*.
  * If a function is called, it is adde to the call stack (pushed onto the end of an array), and the execution context (memory & thread)
    are created.  When that function is done, the context is taken off the call stack (popped off the end of the array) and returns to the previous scope(context).

# Generalized functions
  * Instead of makign functions like `square10`, and `square9`, etc. that just return the number squared, its best to keep it `DRY` and
    write a function that generalizes the logic.  Something like `squareNum(num)` that returns `num * num`.
  * What if we could also generalize peices of the code, not just values? 
  * We may not know some of the functionality we need until we call a function, so we can pass in a `callback` to generalize functionality.

# Callback & Higher Order Functions
  * How is it possible to be able to pass functions into other functions just like any other data?
  * They are first class! Which means they can:
    ** Be assigned to variables and properties of other objects
    ** Passed as arguments into functions
    ** Returned as values from functions
  * Callbacks & Higher Order Functions simplify our code and keep it DRY
    `Declarative Readable Code:` Map, filter, reduce - the most readable way to write code to work with data
    `Interview Tip`: One of the most popular topics to test in interview in mid/senior level job interviews is CB's and HOF's
    `Asynchronous JavaScript`: Callbacks are a core aspect of async JavaScript, and are under-the-hood of promises & async/await.

# Arrow Functions
  * A Shorthand way to save function code.
  * Anonymous and Arrow Functions:
    ** Improve immediate legibility of the code
    ** Mostly syntatic surgar (with a few vital differences)
    ** Understanding how they're working under-the-hood is vital to avoid confusion

    
