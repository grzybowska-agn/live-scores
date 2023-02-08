<script lang="ts">
import Vue from "vue";
import GameList from "@/components/molecules/game-list/GameList.vue";
import { mockData } from "@/mocks/mock-data";

export default Vue.extend({
  name: "ScoreBoard",
  components: { GameList },
  data() {
    return {
      games: mockData,
    };
  },
});
</script>
<template>
  <div>
    <game-list :games="games" />
  </div>
</template>
