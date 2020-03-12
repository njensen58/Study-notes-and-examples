class HashTableSet {
  constructor(){
    this.table = new Array(255)
  }

  add(input){
    this.table[this.hash(input, 255)] = input
  }

  // !! converts the value to be true or false
  check(input){
    return !!this.table[this.hash(input, 255)]
  }

  // Slightly better than a crappy hashing algorithm, but hey.
  hash(input, max){
    let num = 0
    for(let i = 0; i < input.length; i++){
      num += input.charCodeAt(i) * i
    }
    return num % max
  }
}

const ht = new HashTableSet()

for(let i = 0; i < 1000; i++){
  ht.add(" Hello")
}

console.log(ht)