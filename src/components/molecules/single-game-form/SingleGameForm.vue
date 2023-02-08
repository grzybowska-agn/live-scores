<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SingleGameForm",
  data() {
    return {
      home: "",
      away: "",
    };
  },
  methods: {
    onClick(): void {
      this.$emit("start-game", {
        home: this.home,
        away: this.away,
      });
      this.home = "";
      this.away = "";
    },
  },
});
</script>
<template>
  <div class="single-game-form">
    <label>
      Home team
      <input
        class="single-game-form__input"
        v-model="home"
        data-test-id="single-game-form-input"
      />
    </label>
    <label>
      Away team
      <input
        class="single-game-form__input"
        v-model="away"
        data-test-id="single-game-form-input"
      />
    </label>
    <button
      class="single-game-form__button"
      @click="onClick"
      :disabled="!home || !away"
      data-test-id="single-game-form-button"
    >
      Start game
    </button>
  </div>
</template>
<style lang="scss" scoped>
$gap: 8px;
$border: 1px solid red;
$background-color: white;

.single-game-form {
  display: flex;
  gap: $gap;

  &__input,
  &__button {
    border: $border;
    background-color: $background-color;
  }
}
</style>
