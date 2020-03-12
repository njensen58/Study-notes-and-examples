# Data Structure Interfaces
  * We are using Interface in the sense that we should know "what" a particular data structure
    is, but also how it's used/works/how you interact with it.

# Set
  * Interface explanation:
    - A set is pretty simple. You'll also hear them called collections depending which language 
    you're working with. A set allows allows at least four things: add, remove, contains, and toList. 
    The basic idea is that you can add items to a set and then later check if they're there. 
    You can also request later a list of those items in the set (though with no guaranteed order; 
    sets have no notion of order.) They're also useful for deduplication since you can only add 
    something to a set once.
    - It's like a javascript object, has methods and won't allow duplicated values:
      - .add()
      - .remove()
      - .contains()
      - .toList()
    - It has no duplicates, so its very useful if you need to de-duplicate a list of numbers.
    - Good usability would be for usernames, no duplicates allowed.
    - No guaranteed order.


# Map
  * Interface explanation:
    - Maps are quite similar to simple JavaScript objects. Maps are a set/collection of keys that 
    have values associated with those keys. Unlike objects, they don't have prototypes, inheritance, 
    methods, or anything of that sort. Maps are also similar to associative arrays in other languages. 
    Again, since the keys are a set, there cannot be duplication of keys (makes sense, right?) You can
    have duplication of values though. Key 'thing' can have value 'map' while key 'other thing' can 
    have a value of 'map' as well.  
    - Also like a javascrdipt object, and doesnt allow duplicated keys.
    - Don't have methods/functions/prototypes, they are just key: value pairs.
    - No concept of order.
    - In ES6, the new Map() has a Map prototype with some pre-built functions.


# Stacks
  * Interface explanation: 
    - Stack is an interface that adheres to the "Last-In First-Out" (LIFO) mantra. In a stack, you 
    can only push (add) or pop (remove.) The last thing you pushed will be what pop returns to you 
    (pop will also remove it from the stack.) Often they'll have a method called peek too which just 
    looks at the top value of the stack without modifying the stack.
    - The push and pop methods are used in arrays because it is useful, but they are not stacks because
      they don't follow the strict structure of a stack.  Only push and pop functionalities.
    - Programming is a stack, you're pushing functions on and popping them off.
  
# Queue
  * Interface explanation:
    - Queues adhere to the "First-In First-Out" mantra. As the name may invoke the imagery for you, it's 
      similar to people queueing in line (hopefully.) All stacks need to have the methods enqueue (add/push) 
      and dequeue (remove/pop). Like stacks, they'll have peek to see what the next element is to dequeue.
    - Queues are useful for lots of programming problems. How about print jobs? Usually you want things to 
      print in the order sent to the printer; otherwise Janice from Accounting is going to be printing all of 
      her documents before you can print anything.
    - There are also priority queues as well. In a priority queue you also assign a priority to the elements
      that are enqueued. Items that have higher priorities get dequeued first. This is useful for networking;
      some packets are more important than others. If you're streaming video, that gets a high priority 
      because getting a packet later means likely skipping some frames, whereas syncing to Dropbox can wait 
      for a lull in network traffic to continue syncing.
  * It has standard methods:
    - `enqueue`: adds something to the queue
    - `dequeue`: removes an item from the queue
    - You can usually peek at the next item that will be taken out.
    

