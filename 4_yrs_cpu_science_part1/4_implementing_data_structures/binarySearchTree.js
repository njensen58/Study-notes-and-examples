class Tree {
  constuctor(){
    this.root = null
  }
  
  add(value){
    const node = new Node(value)
    if(!this.root){
      this.root = node
      return
    } 

    let current = this.root
    while(true){
      if(node.value <= current.value){
        if(!current.left){
          current.left = node
          return
        } else {
          current = current.left
        }
      } else {
        if(!current.right){
          current.right = node
          return
        } else {
          current = current.right
        }
      }
    }
  }

}



class Node {
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}

const BST = new Tree()
for(let i = 0; i < 100; i++){
  BST.add(Math.floor(Math.random() * 50))
}
console.log(BST)