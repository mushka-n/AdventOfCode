import { getElves } from "./parsers/day-1.ts";

const elves = await getElves();
const topThreeCalories = [-1, -1, -1];

elves.forEach((elf) => {
  if (elf.calories > topThreeCalories[0]) {
    topThreeCalories[2] = topThreeCalories[1];
    topThreeCalories[1] = topThreeCalories[0];
    topThreeCalories[0] = elf.calories;
  } else if (elf.calories > topThreeCalories[1]) {
    topThreeCalories[2] = topThreeCalories[1];
    topThreeCalories[1] = elf.calories;
  } else if (elf.calories > topThreeCalories[2]) {
    topThreeCalories[2] = elf.calories;
  }
});

const result = topThreeCalories.reduce((sum, x) => sum + x, 0);
console.log(result);
