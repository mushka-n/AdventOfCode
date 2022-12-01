import { getElves } from "./getData.ts";

const elves = await getElves();
let result = 0;

elves.forEach((elf) => {
  result = 3;
});

console.log(result);
