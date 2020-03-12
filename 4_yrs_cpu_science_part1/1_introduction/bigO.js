///// EXAMPLE 1 /////
// O(n) : because we go through all the inputs once in a loop
function crossAdd(input){
  const answer = []
  for(let i = 0; i < input.length; i++){
    const goingUp = input[i]
    const goingDown = input[input.length - 1 - i]
    answer.push(goingUp + goingDown)
  }
  return answer
}


///// EXAMPLE 2 /////
// O(n) : Still O(n). Unless we say otherwise, we're assuming worst case scenario. 
// In this worst case, the needle would be the last element.
function find(needle, haystack) {
  for (var i = 0; i < haystack.length; i++) {
      if (haystack[i] === needle) return true;
  }
}


///// EXAMPLE 3 /////
// O(n^2) : or every input, we have to go through a full loop inside of another full loop, 
// meaning we're doing a lot of work! This is the trick: look for loops. A loop inside of 
// a loop inside of a loop would likewise be O(n³).
function makeTuples(input) {
  var answer = [];
  for (var i = 0; i < input.length; i++) {
      for (var j = 0; j < input.length; j++) {
          answer.push([input[i], input[j]]);
      }
  }
  return answer;
}









