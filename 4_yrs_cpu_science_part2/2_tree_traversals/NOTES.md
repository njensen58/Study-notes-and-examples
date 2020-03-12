
# Tree Traversals
  # Trees - Everything builds on this concept
    * If we have a tree and we need to turn it into a flat array.
      - This is referred to as serialzing a tree, so we will cover 4 algorithms in doing
        this with a BST.
    * Each item in a tree is referred to as a Node

    Example Tree for next explanations:
              8
            /    \
          3        10
        /   \         \
      1       6         14
            /   \      / 
          4       7  13


  # Depth First Traversal: pre-order traversal
    * One variant depth-first traversals: pre-order traversal. The basic gist is that for each of the nodes, 
      you process the node (in our case, save it to an array since we're serializing this tree,) then process 
      the left subtree and then the right tree.  So they will be in binary search order in the array, (not a
      sorted list in the traditional sense).
    
  # Depth First Traversal: in-order traversal
    * First recursively call the method on the left tree, then process the node, and then call the method on the right tree.
      This out puts an sorted array of data in the traditional sense.

  # Depth First Traversal: post-order traversal
    * You recursively call the method on the left subtree, then the left subtree, then you process the node. The results of these 
      are as follows:
        // preorder
        [8, 3, 1, 6, 4, 7, 10, 14, 13]

        // inorder
        [1, 3, 4, 6, 7, 8, 10, 13, 14]

        // postorder
        [1, 4, 7, 6, 3, 13, 14, 10, 8]
    
  * For a sorted list out of a BST, you'd want to use `inorder`. 
  * If you're making a deep copy of a tree, `preorder` traversal is super useful since you'd copy a node, and then add its left child 
    and then its right tree. 
  * `Postorder` would be useful if you're deleting a tree since you'd process the left tree, then the right, and only after the children had 
     been deleted would you delete the node you're working on.

  * The key with `depth first` traversals is that you are trying to get away from the root node as quickly as possible to dig into the 
    `depth` of the tree and climbing back up.
  * Sometimes you'd rather process the nodes closest to the root node first, and that is `breadth first` traversal

  # Breadth First Traversal 
    * Breadth-first isn't recursive processing of subtrees like depth-first. Instead we want to process one layer at a time. 
      Using the tree above, we want the resulting order to [8, 3, 10, 1, 6, 14, 4, 7, 13]. In other words, we start at the root, 
      and slowly make our way "down" the tree.  
    * We accomplish this is using a `queue`. If you want to review what queues are, check out the previous course's section on them here. 
      The short of it is that queues are first-in first-out.
    * What we're going to do is process the node, then add the left child to the queue and then add the right child to the queue. 
      After that, we'll just dequeue an item off of the queue and call our function recursively on that node. You keep going until there's no 
      items left in the queue.
    *  You use `breadth first` traversal when you know the answer for what you're looking for is "closer" to the root node as opposed to 
      far away when you would use `depth-first`. Again, it's all trade-offs.