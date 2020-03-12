class LinkedList {
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(value){
    const newNode = new Node(value)
    this.length++
    if(!this.head){
      this.head = newNode
    } else {
      this.tail.next = newNode
    } 
    this.tail = newNode
  }

  pop(){
    return this.delete(this.length - 1)
  }

  _find(value, test = this._test){
    let current = this.head
    let i = 0
    while(current){
      if(test(value, current.value, i, current)){
        return current
      } else {
        i++
        current = current.next
      }
    }
    return null
  }

  _test(a, b){
    return a === b
  }
  
  // __ means I dont' care what's coming in, but it will be called with
  // 3 arguments so i make place for it.
  _testIndex(search, __, i){
    return search === i
  }

  get(index){
    const node = this._find(index, this._testIndex)
    if(!node) return null
    return node.value
  }

  delete(index){
    if(index === 0){
      const head = this.head
      if(head){
        this.head = head.next
      } else {
        this.tail = this.head = null
      }
      this.length--
      return head.value
    }
    const node = this._find(index - 1, this._testIndex)
    console.log(node)
    const excise = node.next
    if(!excise) return null
    node.next = excise.next
    if(node.next && !node.next.next) {
      this.tail = node.next
    }
    this.length--
    return excise.value
  }

}

class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}


const list = new LinkedList()

list.push("hi")
console.log(list)
list.push("Hello")
console.log(list)
list.push("Goodbye")
console.log(list)
list.push("AAAAA")
console.log(list)
const item = list.pop()
console.log(item)
console.log(list)