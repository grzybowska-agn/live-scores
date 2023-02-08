<script lang="ts">
import { Game, TeamLocation } from "@/types";
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
  computed: {
    teams() {
      return [this.game.home, this.game.away];
    },
  },
  methods: {
    onScoreChange(value: number, location: TeamLocation): void {
      this.$emit("score-change", { score: value, location });
    },
    onFinishGame(): void {
      this.$emit("game-ended", this.game.id);
    },
  },
});
</script>
<template>
  <div class="game">
    <div class="game__teams">
      <single-score-editable
        v-for="team in teams"
        :name="team.name"
        :location="team.location"
        :score="team.score"
        class="game__item"
        :class="{ 'game__item--first': team.location === 'away' }"
        :key="team.location"
        @score-change="(payload) => onScoreChange(payload, team.location)"
      />
    </div>

    <button @click="onFinishGame" data-test-id="game-button">Finish</button>
  </div>
</template>
<style lang="scss" scoped>
$padding: 12px;
$border: 1px solid red;
$gap: 5px;

.game {
  display: flex;
  align-items: center;
  gap: $gap;

  &__teams {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    border: $border;
    padding: $padding;
    width: 100%;
    gap: $gap;

    &__item {
      order: 2;

      &--first {
        order: 1;
      }
    }
  }
}
</style>
