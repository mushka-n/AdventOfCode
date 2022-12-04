import { getRucksacks } from "./parsers/day-3.ts";

const rucksacks = await getRucksacks();
console.log(rucksacks);
const result = rucksacks.reduce((sum, x) => sum + x.intersectionValue, 0);

console.log(result);
