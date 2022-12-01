import getData from "./getData.ts";

const elves = await getData();
let maxCalories = -1;

elves.forEach((elf) => {
  if (elf.calories > maxCalories) maxCalories = elf.calories;
});

console.log(maxCalories);
  