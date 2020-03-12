# Implementing Data Structures 
  # See bigocheatsheet.com for bigO specifications on all operations.
  # See http://btholt.github.io/four-semesters-of-cs/ for all lesson information/visuals

  # Array List 
  * Very quick lookups (indexed) and slow deletes due to re-allocation of array items
  * Contigous memory makes lookups very fast, you just need the index number without having to look
    at every previous item to find it in computer memory.
  * Only fast at inserts if its at the end like .push(), but slow just like deletes when you have to
    insert something into the middle of the array (due to the need to shift remaining elements)
    - We are going to talk about two types of implementations of array, ArrayList and 
      LinkedList (terms we're borrowing from Java.) What we're going to do is to 
      approximate how these work underneath the hood; in reality since JavaScript is
      a garbage-collected language that you don't have worry about allocation and 
      de-allocation, it is simplified.
  * You'll never use linked lists/array lists in javascript because you are not 
    worried about managing memory allocation, but it's good to know the concept.
    - JavaScript is a `garbage collected` langauge where memeory is auto-allocated 
      and cleaned up.
  * ArrayList is done by directly interacting with an allocated piece of memory. 
    You then interact with that allocated piece of memory by addressing the specific 
    indices in the array. In other words, you just treat it like a normal array. 
    However things get a bit more complicated when deleting items from an 
    ArrayList: you have to collapse the list down to the spot where you deleted.
    - Example:
      - [a,b,c,d,e,f,g]
        -> delete index 3
        -> array is [a,b,c,(blank),e,f,g]
        -> shift elements 4,5,6 back one index
        -> array is [a,b,c,e,f,g]
        -> decrement length
    * Pros & Cons: (optimized for lookups, slower at deletes/inserts)
      * Cons
        - So deleting an index can be highly expensive because everything after that index
          in the list has to be shifted over.
        - Inserts can also be expensive depending on where you insert as the rest would need   
          to be shifted over.
      * Pros: 
        - Lookups are extremely fast O(1) as you just need the index number of the item you
          need.

  # Linked Lists - (Quick deletes and inserts in the middles)  bigocheatsheet.com
    * Linked lists are a list of individual nodes.
    * The list has 2 parts we keep track of:
      - Head ( The first node in the list )
      - Tail ( The last node in the list )
    * Each Node has 2 parts:
      - Value ( The value that node stores )
      - Next ( a pointer to the next item in the list, points to null if end of list )
    * Non-contingous memory makes lookups very slow.  If you say you want index 5, you have to start
      at the `head` and loop 5  times to get it.
    
    * Lookups - slow due to non-contigous memory trade off
    * Deletes - Very cheap!  Let's say node 2 is pointing to 3, and 3 to 4.  If node 3 is deleted, node 2 now just points
      at node 4 instead of having to shift every item after 3 back one index.

  # Binary Search Trees  O(log n)
    * A way to sort information that makes it very fast to find it, (logarithmic time).
    * Trees cans be a useful structure for a middle ground between LinkedLists and ArrayLists. 
      We're going to look a simple flavor of trees: the trusty binary search tree. The gist of the 
      BST is that a node in a BST has zero, one, or two subtrees. Every element in the left subtree 
      is lesser than the value of the node and every node in the right is greater. By being able to 
      depend on this fact, it makes it very simple to add and find new elements. Like LinkedLists, 
      we just have to change pointers when we add new elements. Let's step through an add.
    * If you encounter a duplicate, you just have to choose for it to always go to the left or right.
    * Big O of `log n on adds and deletes`, with a `worse case of n` for something like [1, 2, 3, 4, 5].
      - You wont use a BST in production, rather a self-balancing tree to avoid this worse case scenario.
    * Practical use if if you have data that can be ordered, like numbers 0 - 10 currently in random order,
      or something that is  A - Z and you also have the need to search for nodes very quickly

  # AVL Tree - Has to be recursive, places an item on the way down, re-balances the tree on the way up.
    * `AVL tree` are the answer to the problem that BST have: `BST can easily get out of balance.` 
      Even if it's not the worst case scenario of ascending or descending lists being added, even a 
      random distribution on numbers on a BST is going to get pretty heavy in places. There are several ways 
      to balance these trees and we're going to tackle one of them: AVL trees. AVL is the initials of 
      its authors: Georgy Adelson-Velsky and Evgenii Landis.
    * `AVLs are specialized BSTs`. That is to say a valid AVL tree is always a valid BST (but not
      necessarily vice versa.) When you add a new value to a AVL tree, you do it the same way. The only 
      difference is on the way up your recursive calls you check to see if the node is balanced after you added the 
      new node. `A tree is out of balance if its subtrees' difference of heights is greater than one`.
    * So what's the `benefit` of all this extra effort? We can now guarantee that we won't hit those bad or 
      worst case scenarios of having greatly out-of-balance trees and guarantee `we won't hit the O(n) cases`. 
      `Our worst case becomes O(log n)`.
    * `Single Rotation` needed if the tree is strait:
      - ex: 5
              \ 
                8
                  \
                    9
    * `Double Rotation` needed if the tree is bent:
      - ex: 5       After double rotation it would end up as:  
              \                                 7
                8                             /   \
              /                             5       8
            7
      * So in a double rotation, you first take the bent tree and turn it into a strait tree like the single rotation example,
        then you can just peform the basic rotation to re-balance.

  # Hash Tables
    * `Hash Tables` are extremely powerful tools in modern CS and are used extensively in things like 
      programming languages' underpinnings, databases, caches, etc. They do have some tradeoffs, namely 
      potentially memory footprints and the need for complicated hashing but they have constant time 
      (O(1)) lookups, deletes, and adds if you're doing a set or map.
    * As long as we know the key, it is an 0(1) lookup.
    * When we are adding a key: value pair to a hash table, the key goes through a `hashing algorithm` and 
      creates a unique place (key) for where that value is stored in memory.
    * Requirements for a Hash table/hashing algorithm:
      - Isn't useful for something an order with (a list of some sort) because your addresses won't have 
        any notion of order.
      - You need a sufficiently large footprint of memory to be able to store all of your objects without 
        collisions (we'll talk about collisions in a sec.) This can balloon quickly.
      - You'll need a good hashing algorithm that spits out a viable address for table. That algorithms needs 
        to have several qualities to it. It needs to be idempotent.  `Idempotent` is a fancy way of saying that 
        a function given an input always outputs the same output.
      - It should not have side effects.  `Side effects` are when calling a function makes some effect 
        to the state surrounding it.
      - A good hashing algorithm needs to be performant too; the point of a hash table to have lightning fast 
        lookups and writes
    * `Collisions`
      - A good hashing algorithm needs to have a pretty good distribution of values. If it doesn't have a 
        good distribution of values you are going to end up with collisions. Collisions happen when two inputs 
        end up with the same the output, which means they are going to end up in the same spot in memory.