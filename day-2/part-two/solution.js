const fs = require('fs');

const fileContent = fs.readFileSync('../part-one/input.txt', 'utf8');
const lines = fileContent.split('\n');

/*
   * Elf Plays
   A -> Rock
   B -> Paper
   C -> Scissors

   * My Respones
   X -> Lose -> 0
   Y -> Draw -> 3
   Z -> Win -> 6

   * Hand Response
   A -> Rock -> 1
   B -> Paper -> 2
   C -> Scissors -> 3

   * Outcome Scores
   0 -> Loss
   3 -> Draw
   6 -> Win

   * Rules
   Rock beats Scissors
   Scissors beats Paper
   Paper beats Rock

   * Outcome
   A X C -> Lose  (3+0 = 3)
   A Y A -> Draw  (1+3 = 4)
   A Z B -> Win   (2+6 = 8)
   B X A -> Loss  (1+0 = 1)
   B Y B -> Draw  (2+3 = 5)
   B Z C -> Win   (3+6 = 9)
   C X B -> Lose  (2+0 = 2)
   C Y C -> Draw  (3+3 = 6)
   C Z A -> Win   (1+6 = 7)

*/

// create a map of outcomes and their scores
const outcomes = {
   'A X': 3,
   'A Y': 4,
   'A Z': 8,
   'B X': 1,
   'B Y': 5,
   'B Z': 9,
   'C X': 2,
   'C Y': 6,
   'C Z': 7
}

let totalScore = 0;
for (let i = 0; i < lines.length - 1; i++) {
   totalScore += outcomes[lines[i]];
}

console.log({
   totalScore
})