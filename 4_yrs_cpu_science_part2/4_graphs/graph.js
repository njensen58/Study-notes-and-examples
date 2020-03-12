// you work for a professional social network. in this social network, a professional
// can follow other people to see their updates (think Twitter for professionals.)
// write a function that finds the job `title` that shows up most frequently given
// a set of degree of separation from you. count initial id's own job title in the total
const { getUser } = require("./graphData.js");

/*
 * parameters:
 * rootId               - number    - the id of the user who is the root node
 * getUser              - function  - a function that returns a user's object given an ID
 * degreesOfSeparation  - number    - how many degrees of separation away to look on the graph
 */

// My Solution
const findMostCommonTitle = (rootId, getUser, degreesOfSeparation) => {
  let iteration = 0;
  // key = job title, value is amount of this job encountered
  const jobCount = {};
  // key is user id, value is true (meaning has been checked)
  const userCache = {};
  let userQueue = [getUser(rootId)];

  // The way the teacher taught

  while (iteration <= degreesOfSeparation) {
  //   userQueue = userQueue
  //     .filter(user => !userCache[user.id])
  //     .map(user => {
  //       if (!userCache[user.id]) {
  //         userCache[user.id] = true;
  //       }
  //       if (!jobCount[user.title]) {
  //         jobCount[user.title] = 1;
  //       } else {
  //         jobCount[user.title]++;
  //       }
  //       return user;
  //     })
  //     .map(user => user.connections.map(getUser))
  //     .reduce((fin, users) => fin.concat(users), [])
    
      // This was my first attempt that passed the first 2 test cases, but not the second two
      // It ran twice as fast, but something about not filtering first threw it off.
      // Checking the data though, my responses seems to return the correct values in test case 4
      // as that title exists the most in the data set.

    userQueue.forEach((user, i) => {
      if (!userCache[user.id]) {
        if (!jobCount[user.title]) {
          jobCount[user.title] = 1;
        } else {
          jobCount[user.title]++;
        }
        userCache[user.id] = true;
      }
    });
    userQueue = userQueue.reduce(
      (fin, user) =>
        fin.concat(user.connections.filter(id => !userCache[id]).map(getUser)),
      []
    );

    iteration++;
  }

  let titleCount = 0;
  let mostCommonTitle = null;

  for (let job in jobCount) {
    if (jobCount[job] > titleCount) {
      mostCommonTitle = job;
      titleCount = jobCount[job];
    }
  }

  return mostCommonTitle;
};

console.log(findMostCommonTitle(30, getUser, 2)); // Librarian
console.log(findMostCommonTitle(11, getUser, 3)); // Graphic Designer
console.log(findMostCommonTitle(306, getUser, 4)); // Environmental Tech
// console.time("1")
console.log(findMostCommonTitle(1, getUser, 7)); // "Geological Engineer"
// console.timeEnd("1")

console.log("    ");
console.log("    ");

// Actual Solution
const findMostCommonTitle2 = (myId, getUser, degreesOfSeparation) => {
  let queue = [myId];
  const seen = new Set();
  const jobs = {};

  for (let i = 0; i <= degreesOfSeparation; i++) {
    queue = queue
      .filter(id => !seen.has(id))
      .map(getUser)
      .map(user => {
        jobs[user.title] = jobs[user.title] ? jobs[user.title] + 1 : 1;
        seen.add(user.id);
        return user;
      })
      .map(user => user.connections)
      .reduce((acc, users) => acc.concat(users), []);
    console.log(queue.length);
  }

  return Object.keys(jobs)
    .map(job => [job, jobs[job]])
    .sort((a, b) => {
      if (a[1] > b[1]) return -1;
      if (a[1] < b[1]) return 1;
      return 0;
    })[0][0];
};

// console.log(findMostCommonTitle2(30, getUser, 2)); // Librarian
// console.log(findMostCommonTitle2(11, getUser, 3)); // Graphic Designer
// console.log(findMostCommonTitle2(306, getUser, 4)); // Environmental Tech
// console.time("2")
// console.log(findMostCommonTitle2(1, getUser, 7)); // "Geological Engineer"
// console.timeEnd("2")
