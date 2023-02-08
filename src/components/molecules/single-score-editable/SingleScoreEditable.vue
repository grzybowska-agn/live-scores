<script lang="ts">
import Vue, { PropType } from "vue";
import SingleScore from "@/components/atoms/single-score/SingleScore.vue";
import { TeamLocation } from "@/types";

export default Vue.extend({
  name: "SingleScoreEditable",
  components: {
    SingleScore,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String as PropType<TeamLocation>,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
  },
  methods: {
    onClick(value: number) {
      this.$emit("score-change", value);
    },
  },
});
</script>
<template>
  <div class="single-score-editable">
    <single-score :name="name" :location="location" :score="score" />
    <div class="single-score-editable__controls">
      <button
        @click="() => onClick(score + 1)"
        data-test-id="single-score-editable-button-add"
      >
        +
      </button>
      <button
        @click="() => onClick(score - 1)"
        :disabled="score === 0"
        data-test-id="single-score-editable-button-subtract"
      >
        -
      </button>
    </div>
  </div>
</template>
<style lang="scss">
$big-gap: 20px;
$small-gap: 5px;

.single-score-editable {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: $big-gap;
  width: 100%;

  &__controls {
    display: flex;
    gap: $small-gap;
  }
}
</style>
