# Funtional Programming
  * Everything so far is good to know for interviews and some cases, but this is the stuff that you will actually use
    on a day to day basis.
  # Key Concepts 
    - Avoid Side Effects (Pure Functions)
    - Use of Higher Order Functions
    - Focus on transforming lists of data. 
    - Maintainable, Composeable, and easy to Reason about.
      * When you're doing that, you can depend on the fact that you can take the output of one function and safely 
        put that into the next function. We can chain calls together. Our code becomes expressive at this point. 
        We begin describe what we want to happen rather than imperatively telling how.

  # .map() - See Map.js file
    * Takes in an array, and applies a function to each individual element in that array and returns something.

  # .reduce() - See reduce.js file
    * Reduce is really useful when you a have a list of values that you want to combine in 
      some meaningful way down to one value. You'll often hear the term map/reduce thrown 
      around in regards to data science; they're used a lot in that sense because you're 
      taking large sets of data, doing some transformations on them to get them in a certain
      state, and then reducing them down to useful statistics.

