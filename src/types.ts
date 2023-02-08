export type TeamName = string;
export type Timestamp = number;

interface Team {
  name: TeamName;
}

export type TeamLocation = "home" | "away";

export interface TeamPlaying extends Team {
  location: TeamLocation;
  score: number;
}

export interface Game {
  id: number;
  home: TeamPlaying;
  away: TeamPlaying;
  started: Timestamp;
}
