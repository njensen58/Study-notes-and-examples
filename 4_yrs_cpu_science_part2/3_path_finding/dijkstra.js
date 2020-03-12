// 2 queues, one for a and one for b
// use 2 loops (possible with 1)

// 2 - origins
// 1 - Walls, cannot pass through
// 0 - open space

const NO_ONE = 0;
const BY_A = 1;
const BY_B = 2;

const fourByFour = [
  [2, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 2]
];

const sixBySix = [
  [0, 0, 0, 0, 0, 0],
  [0, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0]
];

const eightByEight = [
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [0, 2, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 2]
];

const byEachOther = [
  [0, 0, 0, 0, 0],
  [0, 2, 2, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0]
];

const impossible = [
  [0, 0, 0, 0, 0],
  [0, 2, 0, 0, 0],
  [0, 0, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 2]
];

const fifteenByFifteen = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
  [0, 0, 1, 0, 1, 0, 1, 1, 2, 1, 0, 1, 0, 1, 0],
  [0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const findShortestPathLength = (maze, [xA, yA], [xB, yB]) => {
  // Transforming the maze into a data structure we can use to track nodes.
  const mazeData = maze.map((row, y) =>
    row.map((origin, x) => ({
      closed: origin === 1,
      length: 0,
      openedBy: NO_ONE,
      x,
      y
    }))
  );
  mazeData[yA][xA].openedBy = BY_A;
  mazeData[yB][xB].openedBy = BY_B;
  let aQueue = [mazeData[yA][xA]]
  let bQueue = [mazeData[yB][xB]]
  let iteration = 0 // this is so we know how far a point is from its origin as each iteration is a check of n + 1 from origin.
  
  // If either queue is empty, there is no path
  while(aQueue.length && bQueue.length){
    iteration++
    // gather all neighbors of A.  First iteration will be a single array as we are only checking 1 node for its neighbors.
      // on subsequent iterations we will have many more neighbors per check due to the amount of nodes in the queue, and we'd like to 
      // flatten that into a 1 layer array for the for - loop.
    const aNeighbors = aQueue.reduce((acc, neighbor) => acc.concat(getNeighbors(mazeData, neighbor.x, neighbor.y)), [])
    // empty the queue now that we've got all neighbors for the queued node
    aQueue = []
    // loop through neighbors and check them/mark them as visited and define their length (indexes from origin)
    for(let i = 0; i < aNeighbors.length; i++){
      // nodes will get added to the queue that have already been checked if they are a valid neighbor of another node,
      // so we just disregard if it already has a .openedBy BY_A property because that means its already been checked in a 
      // previous iteration.
      const neighbor = aNeighbors[i]
      if(neighbor.openedBy === BY_B){
        return neighbor.length + iteration
      } else if(neighbor.openedBy === NO_ONE){
        neighbor.length = iteration
        neighbor.openedBy = BY_A
        aQueue.push(neighbor)
      }
    }
    const bNeighbors = bQueue.reduce((acc, neighbor) => acc.concat(getNeighbors(mazeData, neighbor.x, neighbor.y)), [])
    bQueue = [];
    for (let i = 0; i < bNeighbors.length; i++) {
      const neighbor = bNeighbors[i];
      if (neighbor.openedBy === BY_A) {
        return neighbor.length + iteration;
      } else if (neighbor.openedBy === NO_ONE) {
        neighbor.length = iteration;
        neighbor.openedBy = BY_B;
        bQueue.push(neighbor); 
      }
    }
  }
  return -1
}


const getNeighbors = (mazeData, x, y) => {
  const neighbors = []
  if(y - 1 >= 0 && !mazeData[y - 1][x].closed){
    // left
    neighbors.push(mazeData[y - 1][x])
  }
  if(y + 1 < mazeData.length && !mazeData[y + 1][x].closed){
    // right
    neighbors.push(mazeData[y + 1][x])
  }
  if(x - 1 >= 0 && !mazeData[y][x - 1].closed){
    // up
    neighbors.push(mazeData[y][x -1])
  }
  if(x + 1 < mazeData.length && !mazeData[y][x + 1].closed){
    // down
    neighbors.push(mazeData[y][x + 1])
  }
  // you could add 4 more if statements to do diagnal functionality in the Neighbors search
  return neighbors
}

console.log(findShortestPathLength(fourByFour,       [0, 0], [3, 3])); // 6
console.log(findShortestPathLength(sixBySix,         [1, 1], [2, 5]))  // 7
console.log(findShortestPathLength(eightByEight,     [1, 7], [7, 7]))  // 16
console.log(findShortestPathLength(fifteenByFifteen, [1, 1], [8, 8]))  // 78
console.log(findShortestPathLength(byEachOther,      [1, 1], [2, 1]))  // 1
console.log(findShortestPathLength(impossible,       [1, 1], [4, 4]))  // -1