import { Game } from "@/types";

export const mockGame: Game = {
  id: 1,
  teams: [
    {
      name: "Canada",
      score: 5,
      location: "home",
    },
    {
      name: "Mexico",
      score: 0,
      location: "away",
    },
  ],
};
