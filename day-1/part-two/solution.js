const fs = require('fs');
const input = fs.readFileSync('../part-one/input.txt', 'utf8');
let lines = input.split('\n');

let elfFood = [];
let topThreeCaloriesCarried = [];

for (let i = 0; i < lines.length; i++) {
   if (lines[i] === '') {
      let totalCalories = elfFood.reduce((accumulator, current) => {
         return parseInt(accumulator, 10) + parseInt(current, 10)
      }, 0);

      if (topThreeCaloriesCarried.length < 3) {
         topThreeCaloriesCarried.push(totalCalories);
      } else {
         topThreeCaloriesCarried.sort((a, b) => {
            return a - b;
         });
         if (totalCalories > topThreeCaloriesCarried[0]) {
            topThreeCaloriesCarried[0] = totalCalories;
         }
      }
      elfFood = [];
   } else {
      elfFood.push(lines[i]);
   }
}
console.log({
   topThreeCaloriesCarried,
});

// sum of top three calories carried
console.log(topThreeCaloriesCarried.reduce((accumulator, current) => {
   return accumulator + current;
}, 0));