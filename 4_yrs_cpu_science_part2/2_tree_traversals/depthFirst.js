const tree = {
  value: 8,
  left: {
    value: 4,
    left: {
      value: 3,
      left: {
        value: 2,
        left: null,
        right: null
      },
      right: null
    },
    right: {
      value: 5,
      left: null,
      right: {
        value: 7,
        left: {
          value: 6,
          left: null,
          right: null
        }
      }
    }
  },
  right: {
    value: 12,
    left: {
      value: 10,
      left: {
        value: 9,
        left: null,
        right: null
      },
      right: {
        value: 11,
        left: null,
        right: null
      }
    }
  }
}

  // THE ABOVE TREE VISUALIZED

  //                  8
  //           /            \
  //         4                12
  //       /   \             /    
  //     3      5           10
  //   /          \       /    \
  // 2              7   9        11
  //               /
  //             6

const preorderTraverse = (node, array) => {
  if(!node) return array
  array.push(node.value)
  array = preorderTraverse(node.left, array)
  array = preorderTraverse(node.right, array)
  return array
}

console.log(preorderTraverse(tree, [])) //  [ 8, 4, 3, 2, 5, 7, 6, 12, 10, 9, 11 ]

const inorderTraverse = (node, array) => {
  if(!node) return array
  array = inorderTraverse(node.left, array)
  array.push(node.value)
  array = inorderTraverse(node.right, array)
  return array
}

console.log(inorderTraverse(tree, [])) //  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

const postorderTraverse = (node, array) => {
  if(!node) return array
  array = postorderTraverse(node.left, array)
  array = postorderTraverse(node.right, array)
  array.push(node.value)
  return array
}

console.log(postorderTraverse(tree, [])) // [ 2, 3, 6, 7, 5, 4, 9, 11, 10, 12, 8 ]