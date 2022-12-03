const fs = require('fs');
const ruckSacks = fs.readFileSync('input.txt', 'utf-8').split('\n');

//remove the blank line at the end
ruckSacks.pop();

const intersections = [];
const ruckSacksWithCompartments = ruckSacks.map(ruckSack => {
   let numItems = ruckSack.length;
   let compartmentLength = numItems / 2;
   let firstCompartment = ruckSack.split('').slice(0, compartmentLength);
   let secondCompartment = ruckSack.split('').slice(compartmentLength, numItems);

   let intersection = firstCompartment.filter(item => secondCompartment.includes(item))[0];
   intersections.push(intersection);

   return {
      firstCompartment,
      secondCompartment,
      intersection,
      numItems
   }
});

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
let sumOfPriorities = 0;
for (let i = 0; i < intersections.length; i++) {
   sumOfPriorities += characterMap[intersections[i]];
}
console.log({
   sumOfPriorities
});
