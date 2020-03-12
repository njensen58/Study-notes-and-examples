class AVLTree {
  constructor(){
    this.root = null
  }
  add(value){
    if(!this.root){
      this.root = new Node(value)
    } else {
      this.root.add(value)
    }
  }
}


class Node {
  constructor(value, left = null, right = null){
    this.value = value
    this.left = left
    this.right = right
    this.height = 1
  }

  add(value){
    if(value < this.value){
      // go left
      if(this.left){
        this.left.add(value)
      } else {
        this.left = new Node(value)
      }
      if(!this.right || this.right.height < this.left.height){
        this.height = this.left.height + 1
      }
    } else {
      // go right
      if(this.right){
        this.right.add(value)
      } else {
        this.right = new Node(value)
      }
      if(!this.left || this.left.height < this.right.height){
        this.height = this.right.height + 1
      }
    }
    this.balance()
  }
  
  balance(){
    const rightHeight = (this.right) ? this.right.height : 0
    const leftHeight = (this.left) ? this.left.height : 0

    // This is checking to see if it's out of balance
    if(leftHeight > rightHeight + 1){
      // If so, we then need to determine is it out of balance on the left or the right
      const leftRightHeight = (this.left.right) ? this.left.right.height : 0
      const leftLeftHeight = (this.left.left) ? this.left.left.height : 0
    
      if(leftRightHeight > leftLeftHeight){
        // we only rotate right if this is true (double rotation)
        this.left.rotateRR()
      }
      // We always rotate left
      this.rotateLL()
    } else if(rightHeight > leftHeight + 1){
      const rightRightHeight = (this.right.right) ? this.right.right.height : 0
      const rightLeftHeight = (this.right.left) ? this.right.left.height : 0

      if(rightLeftHeight > rightRightHeight){
        // we only rotate left if this is true (doubleRotation)
        this.right.rotateLL()
      }
      // We always rotate right
      this.right.rotateRR()
    }
  }

  rotateRR(){
    const valueBefore = this.value
    const leftBefore = this.left
    this.value = this.right.value
    this.left = this.right
    this.right = this.right.right
    this.left.right = this.left.left
    this.left.left = leftBefore
    this.left.value = valueBefore
    this.left.updateInNewLocation()
    this.updateInNewLocation()
  }

  rotateLL(){
    const valueBefore = this.value
    const rightBefore = this.right
    this.value = this.left.value
    this.right = this.left
    this.left = this.left.left
    this.right.left = this.right.right
    this.right.right = rightBefore
    this.right.value = valueBefore
    this.right.updateInNewLocation()
    this.updateInNewLocation()
  }

  updateInNewLocation(){
    if(!this.right && !this.left){
      this.height = 1
    } else if(!this.right || (this.left && this.right.height < this.left.height)){
      this.height = this.left.height + 1
    } else { // if(!this.left || this.right.height > this.left.height)
      this.height = this.right.height + 1
    }
  }

}



const avlTree = new AVLTree()

for(let i = 0; i < 100; i++){
  avlTree.add(Math.floor(Math.random() * 500))
}

console.log(avlTree)