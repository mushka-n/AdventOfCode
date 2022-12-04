import { getRps } from "./parsers/day-2.ts";

const rpsMatches = await getRps();
let result = 0;

rpsMatches.forEach((match) => {
  switch (match.myShape) {
    case "Rock":
      result += 1;
      switch (match.opponentShape) {
        case "Rock":
          result += 3;
          break;
        case "Paper":
          result += 0;
          break;
        case "Scissors":
          result += 6;
          break;
      }
      break;
    case "Paper":
      result += 2;
      switch (match.opponentShape) {
        case "Rock":
          result += 6;
          break;
        case "Paper":
          result += 3;
          break;
        case "Scissors":
          result += 0;
          break;
      }
      break;
    case "Scissors":
      result += 3;
      switch (match.opponentShape) {
        case "Rock":
          result += 0;
          break;
        case "Paper":
          result += 6;
          break;
        case "Scissors":
          result += 3;
          break;
      }
      break;
  }
});

console.log(result);
