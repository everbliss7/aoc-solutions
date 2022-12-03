const fs = require('fs');
const ruckSacks = fs.readFileSync('../part-one/input.txt', 'utf-8').split('\n');
const characterMap = {
   'a': 1,
   'b': 2,
   'c': 3,
   'd': 4,
   'e': 5,
   'f': 6,
   'g': 7,
   'h': 8,
   'i': 9,
   'j': 10,
   'k': 11,
   'l': 12,
   'm': 13,
   'n': 14,
   'o': 15,
   'p': 16,
   'q': 17,
   'r': 18,
   's': 19,
   't': 20,
   'u': 21,
   'v': 22,
   'w': 23,
   'x': 24,
   'y': 25,
   'z': 26,
   'A': 27,
   'B': 28,
   'C': 29,
   'D': 30,
   'E': 31,
   'F': 32,
   'G': 33,
   'H': 34,
   'I': 35,
   'J': 36,
   'K': 37,
   'L': 38,
   'M': 39,
   'N': 40,
   'O': 41,
   'P': 42,
   'Q': 43,
   'R': 44,
   'S': 45,
   'T': 46,
   'U': 47,
   'V': 48,
   'W': 49,
   'X': 50,
   'Y': 51,
   'Z': 52
}
//remove the blank line at the end
ruckSacks.pop();

const intersections = [];
const elfGroups = [];

// Get All Elf groups
let elfGroup = [];
let priorityScores = [];
let badges = [];
let score = 0;
for (let j = 1; j <= ruckSacks.length; j++) {
   if (j % 3 === 0) {
      elfGroup.push([...ruckSacks[j - 1]]);
      elfGroups.push(elfGroup);
      // Get intersection of items in the three elves' rucksacks
      let badge = getIntersection(elfGroup)[0];
      badges.push(badge);
      score += characterMap[badge]

      elfGroup = [];
   } else {
      elfGroup.push([...ruckSacks[j - 1]]);
   }
}


let sumOfPriorities = 0;
// for (let i = 0; i < intersections.length; i++) {
//    sumOfPriorities += characterMap[intersections[i]];
// }
// console.log({
//    sumOfPriorities
// });
console.log('Elves: ', ruckSacks.length);
console.log('Groups: ', elfGroups.length)
console.log("elfGroups: ", elfGroups);

function getIntersection(lists) {
   return lists.reduce((a, b) => a.filter(c => b.includes(c)));
}

console.log({
   score
})