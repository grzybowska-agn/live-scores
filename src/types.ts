type TeamName = string;

interface Team {
  name: TeamName;
}

export type TeamLocation = "home" | "away";

export interface TeamPlaying extends Team {
  location: TeamLocation;
  score: number;
}
