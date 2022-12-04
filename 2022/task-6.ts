import { getElfGroups } from "./parsers/day-3.ts";

const elfGroups = await getElfGroups();
console.log(elfGroups);
const result = elfGroups.reduce((sum, x) => sum + x.badge, 0);

console.log(result);
