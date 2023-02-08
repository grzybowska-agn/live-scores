import type { Game } from "@/types";

export const mockData: Record<string, Game> = {
  "1": {
    id: 1,
    home: {
      name: "Canada",
      score: 5,
      location: "home",
    },
    away: {
      name: "Mexico",
      score: 0,
      location: "away",
    },
    started: 1675867422552,
  },
  "2": {
    id: 2,
    home: {
      name: "Brazil",
      score: 2,
      location: "home",
    },
    away: {
      name: "Spain",
      score: 10,
      location: "away",
    },
    started: 1675867762890,
  },
  "3": {
    id: 3,
    home: {
      name: "France",
      score: 2,
      location: "home",
    },
    away: {
      name: "Germany",
      score: 2,
      location: "away",
    },
    started: 1675867841697,
  },
  "4": {
    id: 4,
    home: {
      name: "Italy",
      score: 6,
      location: "home",
    },
    away: {
      name: "Uruguay",
      score: 6,
      location: "away",
    },
    started: 1675867949507,
  },
  "5": {
    id: 5,
    home: {
      name: "Australia",
      score: 1,
      location: "home",
    },
    away: {
      name: "Argentina",
      score: 3,
      location: "away",
    },
    started: 1675867986018,
  },
};
