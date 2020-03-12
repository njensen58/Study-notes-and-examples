# Pathfinding Algorithms - A simliar algorithm to Dijkstra's
  * Dijkstra's also takes into account heuristics/weighting.

  # Example maze with a wall "X"
      • • • • • •
      • A • • • •
      • • • • • •
      • X X X X X
      • • • • • •
      • • B • • •

    * First, we'll start at both the beginning and the end node and begin "spiraling" outwards, marking 
      each node with how far away it is from from its original Node. We'll alternate spiraling one level 
      with one node, and then one level with the other. After one iteration of the point A (doesn't matter 
      if you start with the A or B) it'd look like:

      • 1 • • • •
      1 A 1 • • •
      • 1 • • • •
      • X X X X X
      • • • • • •
      • • B • • •

    * Second, we'd do the same to point B which would like this:

      • 1 • • • •
      1 A 1 • • •
      • 1 • • • •
      • X X X X X
      • • 1 • • •
      • 1 B 1 • •

    * Third, we'll do this until we intersect the two spirals. As soon as the spiral intersect 
      we know we've found the shortest possible path.

      2 1 2 • • •
      1 A 1 • • •
      2 1 2 • • •
      • X X X X X
      • • 1 • • •
      • 1 B 1 • •

      2 1 2 • • •
      1 A 1 2 • •
      2 1 2 • • •
      • X X X X X
      • 2 1 2 • •
      2 1 B 1 2 •

      2 1 2 3 • •
      1 A 1 2 3 •
      2 1 2 3 • •
      3 X X X X X
      3 2 1 2 3 •
      2 1 B 1 2 3

    * Lastly, you can see they've intersected but our algorithm hasn't made that connection yet. But on the next 
      iteration, as the spiraling is happening, those that point will see that the node it's going to has been 
      marked by another origin point. Because of that, we know that we've found one of the shortest paths (there 
      could be other paths that connect of the same length.) As such we've solved our problem: the shortest path 
      is of length six. If you were keeping track of the nodes, you could give the coordinates of the path.

    * If you visualize this as a tree that just hast more edges, this is essentially a `breadth first traversal`.