import { getElves } from "./parsers/day-1.ts";

const elves = await getElves();
let maxCalories = -1;

elves.forEach((elf) => {
  if (elf.calories > maxCalories) maxCalories = elf.calories;
});

console.log(maxCalories);
