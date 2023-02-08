<script lang="ts">
import ScoreBoard from "./components/pages/score-board/ScoreBoard.vue";

export default {
  name: "App",
  components: { ScoreBoard },
};
</script>
<template>
  <div id="app">
    <score-board />
  </div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
