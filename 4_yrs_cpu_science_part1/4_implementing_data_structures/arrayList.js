class ArrayList {
  constructor(){
    this.length = 0;
    this.data = {}
  }
  // in a non-garbage collected language, you would probably check you memory allocation
  // in the push method to see if more space should be allocated going forward.
  push(value){ 
    this.data[this.length] = value
    this.length++
  }
  // insertAt(index){
    // This is the insert function that would cost as much as delete
    // _collapseTo could be refactored to be used for shifting on insert, collapse on delete
  //}
  pop(){
    return this.delete(this.length - 1)
  }
  get(index){
    return this.data[index]
  }
  delete(index){
    const item = this.data[index]
    this._collapseTo(index)
    return item
  }
  _collapseTo(index){ // This is the expensive function, especially if you have to delete a lot
    for(let i = index; i < this.length; i++){
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--
  }
}


const data = new ArrayList()

data.push("howdy")
data.push("hi")
data.push("hi")
data.push("hi")
console.log(data)
data.delete(2)
console.log(data)
data.push("Hello")
data.push("What")
console.log(data)
data.delete(0)
console.log(data)
const popped = data.pop()
console.log(data)
console.log("POPPED: " + popped)