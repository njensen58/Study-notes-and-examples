const XXH = require('xxhashjs')

// 3 hashing algorithms using XXH
const h1 = string => Math.abs(XXH.h32(0xABCD).update(string).digest().toNumber() % 100);
const h2 = string => Math.abs(XXH.h32(0x1234).update(string).digest().toNumber() % 100);
const h3 = string => Math.abs(XXH.h32(0x6789).update(string).digest().toNumber() % 100);

// class properties
  // declared with _ in js, instead of constructor.

class BloomFilter {
  constructor(){
      this.list = new Array(100).fill(0)
  }
  check(str){
    const values = [h1(str), h2(str), h3(str)]
    return this.list.some((val, i) => values.includes(i))
  }
  add(str){
    this.list[h1(str)] = 1
    this.list[h2(str)] = 1
    this.list[h3(str)] = 1
  }
}


const bf = new BloomFilter()
bf.add('sarah')
bf.add('brian')
bf.add('steve')

console.log(bf.check('sarah'))
console.log(bf.check('john'))
console.log(bf.check('brian'))
console.log(bf.check('steve'))
console.log(bf.list)