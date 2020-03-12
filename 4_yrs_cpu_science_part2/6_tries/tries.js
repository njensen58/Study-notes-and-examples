// in order to pass the unit tests, you will need to create a function called createTrie that accepts a list of strings
// as a parameter and returns an object with a method on it called "`complete`. complete is a method that when called
// with a string will return an array of up to length three that are autocompleted suggestions of how to finish that string.
// for the sake of this exercise, it does not matter which order these strings are returned in or if there are more than three
// possible suggestions, which three you choose
//
// feel free to see the dataset here:  https://codepen.io/btholt/pen/jZMdmp
//
// I suggest working on one unit test at a time, use `xit` instead of `it` to not run unit tests
// the edge cases are for fun and for this exercise you don't necessarily need to pass them

const { CITY_NAMES } = require("./cities.js");

class Node {
  constructor(string) {
    this.children = [];
    this.value = "";
    this.terminus = false;
    this.value = string[0] || "";
    if (string.length > 1) {
      this.children.push(new Node(string.substr(1)));
    } else {
      this.terminus = true;
    }
  }

  add(string) {
    const value = string[0];
    const next = string.substr(1);

    for(let i = 0; i < this.children.length; i++){
      const child = this.children[i]
      if (child.value === value) {
        if (next) {
          child.add(next);
        } else {
          child.terminus = true;
        }
        return;
      }
    } 
    this.children.push(new Node(string));
  }

  _complete(search, built, suggestions){
    if(suggestions.length >= 3 || (search && search[0] !== this.value)){
      return suggestions
    }
    if(this.terminus){
      suggestions.push(`${built}${this.value}`)
    }
    this.children.forEach(child => child._complete(search.substr(1), `${built}${this.value}`, suggestions))
    return suggestions
  }

  complete(string) {
    return this.children
      .map(child => child._complete(string, "", []))
      .reduce((acc, item) => acc.concat(item), []);
  }
}

const createTrie = words => {
  // you do not have to do it this way; this is just how I did it
  const root = new Node("");

  words.forEach(word => root.add(word.toLowerCase()));

  return root;
};

const root = createTrie(CITY_NAMES.slice(0, 10));
const completions = root.complete("san");
console.log(completions); // ["san antonio", "san diego", "san jose"]
