import { getElves } from "./getData.ts";

const elves = await getElves();
let result = 0;

elves.forEach((elf) => {
  result = 4;
});

console.log(result);
