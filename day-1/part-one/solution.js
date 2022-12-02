const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');
const lines = input.split('\n');

let elfFood = [];
let elfFoods = [];
let MAX_CALORIES = -Infinity;
let indexOfMaxCalories = 0;
let elfNumber = 0;
for (let i = 0; i < lines.length; i++) {
   if (lines[i] === '') {
      elfNumber += 1;
      let totalCalories = elfFood.reduce((accumulator, current) => {
         return parseInt(accumulator, 10) + parseInt(current, 10)
      }, 0);
      if (totalCalories > MAX_CALORIES) {
         MAX_CALORIES = totalCalories;
         indexOfMaxCalories = elfNumber;
      }
      elfFoods.push(elfFood);
      elfFood = [];
   } else {
      elfFood.push(lines[i]);
   }
}
console.log({
   MAX_CALORIES,
   indexOfMaxCalories
});

console.log(elfFoods.length);