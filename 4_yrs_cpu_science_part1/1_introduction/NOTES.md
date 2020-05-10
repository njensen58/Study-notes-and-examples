# Introduction (BigO, Recursion)
  # Read - Cormen's intro to Algorithms
  # DOC for this course: http://btholt.github.io/four-semesters-of-cs/

# BigO - See bigO.js

# Recursion - See recursion.js
  * Recursion is when you define something in terms of itself.
    * Ex: A triangle made of triangles
  * When we talk about recursion in computer science, we are talking about a function 
      that calls itself.
  * Each level of a recursive call maintains its own state which is quite helpful
  * It does add a new call to the stack, so once we're calling a function 200-300 times
      there is a memory cost to our program keeping track of all of those execution contexts.
  * Always Favor readibility, so use an iterative solution unless the recursive solution
      is relative just as fast, but easier to read.
  # Almost every first line of any recursive function you write will be the `base case`.
    * The `base case` is where you set when you want the recursion to stop, like setting up
      the boolean for a while loop, or the i < num in a for loop.