<script lang="ts">
import Vue from "vue";
import GameList from "@/components/molecules/game-list/GameList.vue";
import { mockData } from "@/mocks/mock-data";
import { TeamLocation, Game, TeamPlaying } from "@/types";
import { sortGames } from "./helpers";
import SingleGameForm from "@/components/molecules/single-game-form/SingleGameForm.vue";

interface ScoreChangePayload {
  gameId: number;
  location: TeamLocation;
  score: number;
}

type GameStartedPayload = Record<
  TeamLocation,
  Pick<TeamPlaying, "name" | "location">
>;

export default Vue.extend({
  name: "ScoreBoard",
  components: { GameList, SingleGameForm },
  data() {
    return {
      games: mockData,
      nexItemId: 6,
    };
  },
  computed: {
    gamesArraySorted(): Game[] {
      return Object.keys(this.games)
        .map((key: string) => this.games[key])
        .sort(sortGames);
    },
  },
  methods: {
    onScoreChange(payload: ScoreChangePayload) {
      this.$set(
        this.games[payload.gameId][payload.location],
        "score",
        payload.score
      );
    },
    onGameEnded(gameId: number) {
      this.$delete(this.games, gameId);
    },
    onGameStarted(payload: GameStartedPayload) {
      this.$set(this.games, this.nexItemId, {
        id: this.nexItemId,
        home: { ...payload.home, score: 0 },
        away: { ...payload.away, score: 0 },
        started: new Date().getTime(),
      });
      this.nexItemId = this.nexItemId + 1;
    },
  },
});
</script>
<template>
  <div class="score-board">
    <game-list
      :games="gamesArraySorted"
      @game-ended="onGameEnded"
      @score-change="onScoreChange"
    />
    <single-game-form @start-game="onGameStarted" />
  </div>
</template>
<style lang="scss" scoped>
$gap: 40px;

.score-board {
  display: flex;
  flex-direction: column;
  gap: $gap;
  justify-content: center;
  align-items: center;
}
</style>
