const fs = require('fs');

const fileContent = fs.readFileSync('input.txt', 'utf8');
const lines = fileContent.split('\n');

/*
   * Elf Plays
   A -> Rock
   B -> Paper
   C -> Scissors

   * My Respones
   X -> Rock
   Y -> Paper
   Z -> Scissors

   * Scores
   1 -> X -> Rock
   2 -> Y -> Paper
   3 -> Z -> Scissors

   * Outcome Scores
   0 -> Loss
   3 -> Draw
   6 -> Win

   * Rules
   Rock beats Scissors
   Scissors beats Paper
   Paper beats Rock

   * Outcome
   A X -> Draw (1+3 = 4)
   A Y -> Win (2+6 = 8)
   A Z -> Loss (3+0 = 3)
   B X -> Loss (1+0 = 1)
   B Y -> Draw (2+3 = 5)
   B Z -> Win (3+6 = 9)
   C X -> Win (1+6 = 7)
   C Y -> Loss (2+0 = 2)
   C Z -> Draw (3+3 = 6)

*/

//create a map of outcomes to scores
const outcomes = {
   'A X': 4,
   'A Y': 8,
   'A Z': 3,
   'B X': 1,
   'B Y': 5,
   'B Z': 9,
   'C X': 7,
   'C Y': 2,
   'C Z': 6
};

let sumOfScore = 0;

for (let i = 0; i < lines.length - 1; i++) {
   sumOfScore += outcomes[lines[i]];
}

console.log({
   sumOfScore
})