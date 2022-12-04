import { getRpsOutcome } from "./parsers/day-2.ts";

const rpsMatches = await getRpsOutcome();
let result = 0;

rpsMatches.forEach((match) => {
  switch (match.opponentShape) {
    case "Rock":
      switch (match.outcome) {
        case "Win":
          result += 2 + 6;
          break;
        case "Draw":
          result += 1 + 3;
          break;
        case "Lose":
          result += 3 + 0;
          break;
      }
      break;
    case "Paper":
      switch (match.outcome) {
        case "Win":
          result += 3 + 6;
          break;
        case "Draw":
          result += 2 + 3;
          break;
        case "Lose":
          result += 1 + 0;
          break;
      }
      break;
    case "Scissors":
      switch (match.outcome) {
        case "Win":
          result += 1 + 6;
          break;
        case "Draw":
          result += 3 + 3;
          break;
        case "Lose":
          result += 2 + 0;
          break;
      }
      break;
  }
});

console.log(result);
