<template>
  <section>
    <v-carousel height="52em" cycle>
      <v-carousel-item v-for="(item, i) in images" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>
    <div class="secondary" style="min-height: 0.3em; min-width: 0.3em"></div>
    <section id="portfolio" class="pt-6">
      <div class="heading secondary--text">
        <h1>Portfolio</h1>
      </div>
      <div class="secondary" style="min-height: 0.3em; min-width: 0.3em"></div>
      <section class="currentProj ">
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
      <section class="monster-slayer ">
        <v-row class="d-flex justify-center">
          <monster-slayer-card></monster-slayer-card>
        </v-row>
      </section>
      <section class="town-builder">
        <v-row class="d-flex justify-center">
          <town-builder-card></town-builder-card>
        </v-row>
      </section>
      <section class="canteen ">
        <v-row class="d-flex justify-center">
          <canteen-card></canteen-card>
        </v-row>
      </section>
    </section>
  </section>
</template>

<script>
import LetThereBeLightCard from "../projectCards/LetThereBeLightCard.vue";
import MonsterSlayerCard from "../projectCards/MonsterSlayerCard.vue";
import TownBuilderCard from "../projectCards/TownBuilderCard.vue";
import CanteenCard from "../projectCards/CanteenCard.vue";
export default {
  components: {
    LetThereBeLightCard,
    MonsterSlayerCard,
    TownBuilderCard,
    CanteenCard,
  },
  data: () => ({
    images: [
      {
        name: "meOnRock",
        src: "https://i.ibb.co/sj5Jd5L/MeOnRock.jpg",
      },
      {
        name: "plantingBushes",
        src: "https://i.ibb.co/RzKq7rx/planting-Bushes.jpg",
      },
      {
        name: "waterfall",
        src: "https://i.ibb.co/tZWKCy5/Water-Fall.jpg",
      },
      {
        name: "mountain",
        src: "https://i.ibb.co/FmXKNJH/Mountain.jpg",
      },
      {
        name: "waterfall2",
        src: "https://i.ibb.co/YbZkTv3/Water-Fall2.jpg",
      },
    ],
  }),
};
</script>

<style scoped>
.heading {
  font-family: pristina;
  font-size: 5em;
  text-align: center;
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
