const tree = {
  value: "A",
  left: {
    value: "B",
    left: {
      value: "D",
      left: {
        value: "G",
        left: null,
        right: null
      },
      right: null
    },
    right: {
      value: "E",
      left: null,
      right: {
        value: "H",
        left: {
          value: "K",
          left: null,
          right: null
        }
      }
    }
  },
  right: {
    value: "C",
    left: {
      value: "F",
      left: {
        value: "I",
        left: null,
        right: null
      },
      right: {
        value: "J",
        left: null,
        right: null
      }
    },
    right: null
  }
};

  // The Above tree visualized
  //
  //                   A
  //             /           \
  //          B                 C
  //       /    \             /
  //     D        E         F
  //   /            \      / \ 
  // G               H    I   J
  //                /  
  //              K
  

// My Solution - Recursive

const breadthFirstTraverse = (queue, array) => {
  if(!queue.length) return array
  let node = queue.shift()
  array.push(node.value)
  if(node.left){
    queue.push(node.left)
  }
  if(node.right){
    queue.push(node.right)
  }
  return breadthFirstTraverse(queue, array)
}


console.log(breadthFirstTraverse([tree], [])) // [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K' ]



////////////////////////////////////////////////////////
// Finding something in a tree using the same algorithm.

const breadthFirstTraverse = (queue, val) => {
  let node = queue[0]
  if(!queue.length) return null
  queue.shift()
  if(node.value === val){
    return node
  }
  if(node.left){
    queue.push(node.left)
  }
  if(node.right){
    queue.push(node.right)
  }
  return breadthFirstTraverse(queue, val)
}


// console.log(breadthFirstTraverse([tree], "F")) // [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K' ]



// Alternative using while loop
const breadthFirstIterative = (queue, array) => {
  while(queue.length){
    const node = queue.shift()
    array.push(node.value)
    if(node.left){
      queue.push(node.left)
    }
    if(node.right){
      queue.push(node.right)
    }
  }
  return array
}

console.log(breadthFirstIterative([tree], [])) // [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K' ]