export type Rucksack = {
  items: string[];
  intersection: string;
  intersectionValue: number;
};

export type ElfGroup = {
  elves: Rucksack[];
  badge: number;
};

export const getRucksacks = async (): Promise<Rucksack[]> => {
  let input = await Deno.readTextFile("data/day-3.txt");
  input = input.replace(/(\r)/gm, "");

  return input.split("\n").map((rucksack, i) => {
    const items = rucksack.split("");
    const compOne = items.slice(0, rucksack.length / 2);
    const compTwo = items.slice(rucksack.length / 2);

    const [intersection] = compOne.filter((item) => compTwo.includes(item));

    let intersectionValue = intersection.charCodeAt(0) - 96;
    if (intersectionValue < 0) intersectionValue += 58;

    return {
      items,
      intersection,
      intersectionValue,
    };
  });
};

export const getElfGroups = async (): Promise<ElfGroup[]> => {
  const rucksacks = await getRucksacks();
  const result: ElfGroup[] = [];

  let group: Rucksack[] = [];
  rucksacks.map((rucksack) => {
    group.push(rucksack);
    if (group.length === 3) {
      const [intersection] = group[0].items.filter(
        (item) => group[1].items.includes(item) && group[2].items.includes(item)
      );

      let intersectionValue = intersection.charCodeAt(0) - 96;
      if (intersectionValue < 0) intersectionValue += 58;

      result.push({
        elves: [...group],
        badge: intersectionValue,
      });

      group = [];
    }
  });

  return result;
};
