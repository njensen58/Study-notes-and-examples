# Classes and Prototypes (OOP)
  * Classes, Prototypes - Object Oriented JavaScript
    - An enormously popular paradigm for stucturing our complex code
    - Prototype chain - the feature behind-the-scenes that enables emulation of OOP but is a compelling tool in itself
    - Understanding the difference between __proto__ and prototype
    - The new and class keywords as tools to automate our object & method creation.

# The need for design
  # Quiz Game idea, core features for development (and running code)
    * Save data (e.g. in a quiz game the scores of user 1 and 2)
    * Run code (functions) using that data.
  * So why is development Hard?
    * In a quiz game I need to save lots of users, but also admins, quiz questions, quiz outcomes,
      league tables - all have data and associated functionality
    * In 100,000 lines of code
      - Where is the functionality when I need it?
      - How do I make sure the functionality is only used on the right data?
  * So, I want my code to be:
    1. Easy to reason about, but also
    2. Easy to add features to (new functionality)
    3. Nevertheless efficient and performant
  # The Object-oreinted paradigms aims to let us achieve these three goals.

# While JS is not the same of OOP as other programming languages, it simulates it in different ways

  # Objects - store functions with their associated data!
  * This is the principle of encapsulation - and it's going to transform how we can reason about our code.
  * It allows us to group data and its associated functionality in a single entity so its all readily/easily available.
  * Ways to create objects
    * const user = { name: "steve" }
    * const user2 = {}
      * user2.name = "time"
    * const user3 = Object.create(null)
      * user3.name = "eva"
        * Object.create() gives us fine-grained control over our object if we need (Seen later in lesson)
        * It will also ALWAYS return an empty object regardless of what is in the parenthesis.

  ## Solution 1
  # Factory Functions solution - see example 1 app.js
    * We'll never use this approach, but it shows some core concepts of what we're doing as its very intuitive.
    * `Downsides`: 
      1. A new version of the increment function is made for every new object.
      2. If functionality needs to be added to users, each object must be updated individually.
    * So in this example we would want to keep name and score in the objects as those vary, but move the 
      increment function to a shared object that all of the users could reference as needed.  This would required
      JavaScript to know that if it doesn't find a function in the object when it's called, to then go look
      at this reference shared object.

  ## Solution 2
  # Prototype Chain Solution - see example 2 app.js
    * Using `Object.create(functionsObj)`, you pass in an object full of functions, and the returned object
      will still be empty.
    * However this object will have a __proto__ property that references that object, so that if any functions
      are called that are not ownPropeties of the object, it will then check the __proto__ object reference for it.
    # this
    * Every execution context gets an implicit parameter named `this` in its local memory. `this`
      refers to the object/data the function was called on, OR, in the case of a global function not
      a method, it refers to the global window object.  So since `this` will reference user1, user1's
      score gets incremented while user2's stays the same.
    * While this solution is sophisticated and does what the regular solution does, it is not the 
      standard way of OOP in JS, but it shows what the standards are doing under the hood.
  
  # Where does the function object.hasOwnProperty come from?
    * In JavaScript, there is a big headline object called `object.prototype`.
      - It has a bunch of useful functions available to All objects because all objects in
        JS have a default __proto__ property that is linked to that object.prototype object.
    * So, what if we want to confirm our user1 has the property "score"
      - We can use the `hasOwnProperty` method - but where is it? On user1?  No.
      - All objects have a __proto__ property by default which defaults to linking to a big 
        object - Object.prototype - full of (somewhat) useful functions.
      - We get access to it via userFunctionStore's __proto__ property - the prototype chain.

  # What if we create functions inside of our methods? See example 3 in app.js
    * The inner function add1's `this` context is tied to the global window object rather than
      this user1 object that is calling increment.
    * In the past, the solution to this was to declare a constant `that` inside of increment that
      would be assigned to the reference of `this`, so that add1's closure could keep track and 
      say `that.score++` and reference the actual `this.score`.
    * A more modern solution is saying `add1.call(this)` inside of increment so that the `this`
      context of add1 will be user1.
    * `Arrow Function`: An arrow function could be used for `add1`, and the `this` reference would
       then point to user1.

    ### INTERLUDE - see example 5 in app.js
      # Functions are objects and functions
      * When JS sees a function, it creates an object of the function.  
      * If () are used after the function name, it calls it.  If a '.' is used after a function name, you
        are accessing its object properties.
      
  ## Solution 3
  # The `new` Keyword - see example 4 in app.js
    * The `new` keyword creates the object automatically, so we don't have to do the object.create()
      - The `created object is given the name of "this"` inside of the function being called with `new`
    * It will also assign the object's __proto__ property to the `prototype` property of the function
      new is being called on which by default is an empty object.
    * So if we can put all of our functions inside of that function's prototype object property, all
      object created by that function will have their __proto__ property tied to it and gain access
      to all enclosed functions.
    * Once the function is done building the object called `this`, `this` is automatically returned
      from the function.

    # Benefits and Problems of the 'new' keyword
      * Benefits:
        - Faster to write.  Often used in practice in professional code
      * Problems:
        - 95% of developers have no idea how it works and therefore fail interviews
        - We have to upper case first letters of the function so we know it requires `new` to work correctly.
          * The uppercasing does NOTHING logic wise, its just used as a visual clue for the type of function
            it is.


  ## Solution 4 
  # The `class` keyword - see example 6 in app.js
    * The Class keyword is meant to visually act like other languages where the object properties and 
      methods can be declared at the same time, `encapsulated` in the same function.
    * Benefits & Problems:
      * Benefits:
        - Emerging as a new standard
        - Feels more like the style of other languages (e.g. Python)
      * Problems:
        - 99% of developers have no idea how it works and therefore fail interviews

  
    