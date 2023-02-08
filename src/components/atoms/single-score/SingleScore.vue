<script lang="ts">
import type { TeamLocation } from "@/types";
import Vue, { PropType } from "vue";

export default Vue.extend({
  name: "SingleScore",
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
});
</script>
<template>
  <div class="single-score">
    <div class="single-score__name-wrapper">
      <div class="single-score__name" data-test-id="name">{{ name }}</div>
      <div class="single-score__location" data-test-id="location">
        ({{ location }})
      </div>
    </div>
    <div class="single-score__score" data-test-id="score">{{ score }}</div>
  </div>
</template>
<style lang="scss" scoped>
$gap: 5px;
.single-score {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__name-wrapper {
    display: flex;
    gap: $gap;
  }
}
</style>
