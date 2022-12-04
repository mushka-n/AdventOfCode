export type Rps = {
  opponentShape: "Rock" | "Paper" | "Scissors";
  myShape: "Rock" | "Paper" | "Scissors";
};

const getRps = async (): Promise<Rps[]> => {
  let input = await Deno.readTextFile("data/day-2.txt");
  input = input.replace(/(\r)/gm, "");

  return input.split("\n").map((match) => {
    const separatedMatch = match.split(" ");
    const opShape = separatedMatch[0];
    const myShape = separatedMatch[1];

    return {
      opponentShape:
        opShape === "A" ? "Rock" : opShape === "B" ? "Paper" : "Scissors",
      myShape:
        myShape === "X" ? "Rock" : myShape === "Y" ? "Paper" : "Scissors",
    };
  });
};

export type RpsOutcome = {
  opponentShape: "Rock" | "Paper" | "Scissors";
  outcome: "Win" | "Draw" | "Lose";
};

const getRpsOutcome = async (): Promise<RpsOutcome[]> => {
  let input = await Deno.readTextFile("data/day-2.txt");
  input = input.replace(/(\r)/gm, "");

  return input.split("\n").map((match) => {
    const separatedMatch = match.split(" ");
    const opShape = separatedMatch[0];
    const outcome = separatedMatch[1];

    return {
      opponentShape:
        opShape === "A" ? "Rock" : opShape === "B" ? "Paper" : "Scissors",
      outcome: outcome === "X" ? "Lose" : outcome === "Y" ? "Draw" : "Win",
    };
  });
};

export { getRps, getRpsOutcome };
