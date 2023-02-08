<script lang="ts">
import { Game, TeamLocation } from "@/types";
import Vue, { PropType } from "vue";
import SingleGame from "@/components/molecules/single-game/SingleGame.vue";

export default Vue.extend({
  name: "GameList",
  components: {
    SingleGame,
  },
  props: {
    games: {
      type: Array as PropType<Game[]>,
      required: true,
    },
  },
  methods: {
    onScoreChange(
      value: { score: number; location: TeamLocation },
      gameId: number
    ): void {
      this.$emit("score-change", {
        ...value,
        gameId,
      });
    },
    onGameEnded(value: number): void {
      this.$emit("game-ended", value);
    },
  },
});
</script>
<template>
  <div class="game-list">
    <single-game
      v-for="game in games"
      :game="game"
      :key="game.id"
      @game-ended="onGameEnded"
      @score-change="(payload) => onScoreChange(payload, game.id)"
    />
  </div>
</template>
<style lang="scss" scoped>
$gap: 20px;
$width: 400px;

.game-list {
  display: flex;
  flex-direction: column;
  gap: $gap;
  width: $width;
  margin: 0 auto;
}
</style>
