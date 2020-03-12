# Graphs
  * A big part of social networks (and just computer science in general) are graphs. Really they are a 
    central focus.
  * Ex: Facebook friend graph.
    - Friend of friends that have friends that have friends
    - Each friend is a node, each friend of that friend is and edge of that friend.
      - A node represents some entity, much like a row in an SQL database.
      - An edge represents some connection between two items.
    - Facebooks graph is `bi-directional`, if I'm your friend, you are my friend
      - Instagrams graph is `uni-directional`, I can follow you but you don't have to follow me.
  * As we continue to model more-and-more of the natural world in virtual space graphs become ever-more 
    important since relationships between things and beings exist all around us.
  * Example small graph: 
    -  Bob — Sally
      /    \
    me    Alice
      \    /
      Maria
  * Traversing this is similar to pathfinding and traversing a tree, just with more things to consider.
    - Breadth first traversal is key, check the nearest nodes first.
    - We're analysizing everything in a limited depth of a sub-tree and breadth-first is well equipped to do 
      that. Instead of letting breadth-first traversal run to completion, we'll just limit how many times 
      that outer loop runs, effectively limiting how many levels down it goes, or how many degrees of separation!
    - You could use depth first, but would have to limit how deep it digs.