<script lang="ts">
import { Game } from "@/types";
import Vue, { PropType } from "vue";
import SingleScoreEditable from "@/components/molecules/single-score-editable/SingleScoreEditable.vue";

export default Vue.extend({
  name: "SingleGame",
  components: {
    SingleScoreEditable,
  },
  props: {
    game: {
      type: Object as PropType<Game>,
      required: true,
    },
  },
  methods: {
    onScoreChange(value: number): void {
      this.$emit("score-change", value);
    },
    onFinishGame(): void {
      this.$emit("game-ended", this.game.id);
    },
  },
});
</script>
<template>
  <div class="game">
    <div v-for="team in game.teams" class="game__wrapper" :key="game.id">
      <single-score-editable
        :name="team.name"
        :location="team.location"
        :score="team.score"
        class="game__item"
        :class="{ 'game__item--first': team.location === 'away' }"
        @score-change="onScoreChange"
      />
      <button @click="onFinishGame" data-test-id="game-button">Finish</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$padding: 12px;
$border: 1px solid red;

.game {
  &__wrapper {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    border: $border;
    padding: $padding;
    width: 100%;

    &__item {
      order: 2;

      &--first {
        order: 1;
      }
    }
  }
}
</style>
