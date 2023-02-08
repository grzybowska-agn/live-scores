import type { Game } from "@/types";

export const mockData: Game[] = [
  {
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
  },
  {
    id: 2,
    teams: [
      {
        name: "Brazil",
        score: 2,
        location: "home",
      },
      {
        name: "Spain",
        score: 10,
        location: "away",
      },
    ],
  },
  {
    id: 3,
    teams: [
      {
        name: "France",
        score: 2,
        location: "home",
      },
      {
        name: "Germany",
        score: 2,
        location: "away",
      },
    ],
  },
  {
    id: 4,
    teams: [
      {
        name: "Italy",
        score: 6,
        location: "home",
      },
      {
        name: "Uruguay",
        score: 6,
        location: "away",
      },
    ],
  },
  {
    id: 5,
    teams: [
      {
        name: "Australia",
        score: 1,
        location: "home",
      },
      {
        name: "Argentina",
        score: 3,
        location: "away",
      },
    ],
  },
];
