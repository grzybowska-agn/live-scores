<script lang="ts">
import Vue from "vue";
import GameList from "@/components/molecules/game-list/GameList.vue";
import { mockData } from "@/mocks/mock-data";
import { TeamLocation, Game } from "@/types";
import { sortGames } from "./helpers";

interface ScoreChangePayload {
  gameId: number;
  location: TeamLocation;
  score: number;
}

export default Vue.extend({
  name: "ScoreBoard",
  components: { GameList },
  data() {
    return {
      games: mockData,
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
  },
});
</script>
<template>
  <div>
    <game-list
      :games="gamesArraySorted"
      @game-ended="onGameEnded"
      @score-change="onScoreChange"
    />
  </div>
</template>
