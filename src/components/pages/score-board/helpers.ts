import { Game } from "@/types";

export const sortGames = (a: Game, b: Game) => {
  const totalA = a.home.score + a.away.score;
  const totalB = b.home.score + b.away.score;

  if (totalB === totalA) {
    return b.started - a.started;
  }

  return totalB - totalA;
};
