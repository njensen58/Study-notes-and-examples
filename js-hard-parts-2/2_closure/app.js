///////////////////////////////////////////////////
/**
  {Example_1}
*/

function outer(){
  let counter = 0
  function incrementCounter(){ 
    counter++; 
    return counter 
  }
  return incrementCounter
}

const myNewFunction = outer()
// myNewFuncction is incrementCounter with an new name that has with it the counter variable in its closure memory
const count1 = myNewFunction() // counter now equals 1
// myNewFunction is called and creates an execution context. It checks its local memory for the counter
// variable and does not find it, so it THEN looks at the closure memory and finds/increments it.
console.log(count1)

const count2 = myNewFunction() // counter is now 2
console.log(count2)
///////////////////////////////////////////////////

///////////////////////////////////////////////////
/**
  {Example_2}
*/

function once(func) {
  let hasCalled = false
  let result = null
	return function(num){
    if(!hasCalled){
      result = func(num)
      hasCalled = true
      return result
    } else {
      return result
    }
  }
}

const onceFunc = once(addByTwo);

// This uses closure as a type of state that remembers whether the function had been called 
// previously using its closure scoped variables.
console.log(onceFunc(4));  //should log 6
console.log(onceFunc(10));  //should log 6
console.log(onceFunc(9001));  //should log 6

///////////////////////////////////////////////////


///////////////////////////////////////////////////
/**
  {Example_3}
  Example of a function using closure to countdown and execute differently on the last time.
*/

function after(count, func) {
  return function(){
    if(count > 1){
      count--
    } else {
		  func()
    }
  }
}

const called = function() { console.log('hello') };
const afterCalled = after(3, called);

afterCalled(); // -> nothing is printed
afterCalled(); // -> nothing is printed
afterCalled(); // -> 'hello' is printed

///////////////////////////////////////////////////

////////////////////////////////////////////////////
///////// ADDITIONAL CLOSURE EXAMPLES //////////////
function delay(func, wait) {
  let countdownStarted = false
  return function(phrase){
    if(!countdownStarted){
      countdownStarted = true
      setTimeout(() => func(phrase), wait)
    } 
  } 
}

const sayHiAfter3Seconds = delay((phrase) => console.log(phrase), 3000)
sayHiAfter3Seconds("hi") // only this one should actually set the timeout and console log the phrase.
sayHiAfter3Seconds("hello")
sayHiAfter3Seconds("goodbye")




function rollCall(names) {
	let count = 0;
  return function(){
    if(count < names.length){
      console.log(names[count])
      count++
    } else {
      console.log("Everyone accounted for")
    }
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // -> Should log 'Victoria'
rollCaller() // -> Should log 'Juan'
rollCaller() // -> Should log 'Ruth'
rollCaller() // -> Should log 'Everyone accounted for'