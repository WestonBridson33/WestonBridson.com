<template>
  <section>
    <div class="heading secondary--text">
      <h1>Portfolio</h1>
    </div>
    <div class="secondary" style="min-height: 0.3em; min-width: 0.3em"></div>
    <section class="currentProj py-8">
      <v-row class="d-flex justify-center">
        <h2 class="secondary--text">Current Project</h2>
      </v-row>
      <v-row class="d-flex justify-center">
        <let-there-be-light-card></let-there-be-light-card>
      </v-row>
    </section>
    <v-row class="d-flex justify-center ">
      <h2 class="secondary--text pb-7">Past Projects</h2>
    </v-row>
    <section class="monster-slayer pb-8 mb-8">
      <v-row class="d-flex justify-center">
        <monster-slayer-card></monster-slayer-card>
      </v-row>
    </section>
    <section class="town-builder pb-8">
      <v-row class="d-flex justify-center">
        <town-builder-card></town-builder-card>
      </v-row>
    </section>
  </section>
</template>

<script>
import LetThereBeLightCard from "../projectCards/LetThereBeLightCard.vue";
import MonsterSlayerCard from "../projectCards/MonsterSlayerCard.vue";
import TownBuilderCard from "../projectCards/TownBuilderCard.vue";
export default {
  components: {
    LetThereBeLightCard,
    MonsterSlayerCard,
    TownBuilderCard,
  },
};
</script>

<style scoped>
.heading {
  font-family: pristina;
  font-size: 3.5em;
  text-align: center;
  padding-top: 0.4em;
}
h2 {
  font-family: pristina;
  font-size: 3.3em;
  padding-top: 0.6em;
}
h3 {
  font-family: pristina;
  font-size: 3em;
  padding-top: 0.6em;
  text-align: center;
}
</style>
