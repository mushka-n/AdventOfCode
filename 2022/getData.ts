export type Elf = {
  id: number;
  foods: number[];
  calories: number;
};

const getElves = async (): Promise<Elf[]> => {
  let input = await Deno.readTextFile("./input.txt");
  input = input.replace(/(\r)/gm, "");

  return input.split("\n\n").map((elf, i) => {
    const foods = elf.split("\n").map((food) => +food);
    const calories = foods.reduce((sum, x) => sum + x, 0);

    return {
      id: i,
      foods,
      calories,
    };
  });
};

export { getElves };
