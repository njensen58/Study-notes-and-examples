# Generating a Maze
  * You can use a very similar algorithm to pathfinding to also generate a maze.
  * There are many ways to approach this, each with their own trade offs
    - For an exhaustive list with examples: http://weblog.jamisbuck.org/2011/2/7/maze-generation-algorithm-recap
  * We will be focusing on the recursive backtracking algorithm. The idea of this algorithm is similar to 
    what we've done before. We're going to treat the maze as a graph. As opposed to before, each node will 
    keep track of each of it's borders: north, east, south, and west. For this exercise, assume [0, 0] is 
    the most southwestern corner of the grid. We will start with every node in the grid having walls on 
    all four sides, and this algorithm will slowly take down walls.
  * We will `start at an origin point` (provided to you) and then we will call a function that will give 
    us back a randomized list of directions to try. 
      - As opposed to processing a binary search tree where you always processed the left tree first, in this one you   
        will call a function (in our example it's be called `randomizeDirections())` that will `give you back an array of 
        ['n', 'e', 's', 'w'] in a random order`. 
      - From there you will process your nodes in that order. If the next node to go to is unvisited, you 
        will "knock down" the walls between the two nodes, remembering that if I go north on a node, I need 
        to tear down the north wall of that node and the the south wall of the other node. If a node has been 
        visited, you simply return and continue on processing the previous node.
  * This algorithm will visit every node in the graph.
    - It will not re-process any nodes.
    - If it hits a dead-end, it will back track nodes to find one that still has an available direction.
  * This is very similar to a `depth first traversal`.
  