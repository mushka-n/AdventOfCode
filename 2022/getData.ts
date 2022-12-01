const getData = async () => {
  let input: string = await Deno.readTextFile("./input.txt");
  input = input.replace(/(\r)/gm, "");

  return input.split("\n\n").map((elf, i) => {
    const foods: number[] = elf.split("\n").map((food) => +food);
    const calories: number = foods.reduce((sum, x) => sum + x, 0);

    return {
      index: i,
      foods,
      calories,
    };
  });
};

export default getData;
