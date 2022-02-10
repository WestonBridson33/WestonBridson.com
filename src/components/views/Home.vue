<template>
  <section>
    <v-row>
      <v-col cols="7" class="d-flex justify-center align-center secondary--text">
        <div class="text-center">
          <div>
            <span><h2>ASPIRING</h2><v-img src="../../assets/logo.png" width="30"></v-img></span>
          </div>
          <div>
            <h3>Web Developer</h3>
          </div>
          <div>
            <h3>Game Developer</h3>
          </div>
        </div>
      </v-col>
      <v-col class="mt-0" style="padding-bottom: .33em; padding-top: .8em">
        <img src="https://i.ibb.co/fQfZPg8/Profile-Pic.jpg" alt="Profile-Pic of Weston Bridson in Colorado" width="550" border="0" />
      </v-col>
    </v-row>
    <div class="secondary mt-0" style="min-height: 0.3em; min-width: 0.3em"></div>
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
import { mapGetters } from "vuex";
export default {
  components: {
    LetThereBeLightCard,
    MonsterSlayerCard,
    TownBuilderCard,
    CanteenCard,
  },
  // <img src="https://i.ibb.co/dPCSR9S/580-F0109-3-E59-42-DF-8221-1-F8-B00-C6-F088.jpg" alt="580-F0109-3-E59-42-DF-8221-1-F8-B00-C6-F088" border="0">
  // <img src="https://i.ibb.co/2NJwQLH/20210517-144852.jpg" alt="20210517-144852" border="0">
  // <img src="https://i.ibb.co/m6Pf3hB/20210517-144854.jpg" alt="20210517-144854" border="0">
  // <img src="https://i.ibb.co/nzMSDZ3/0927201553b-HDR.jpg" alt="0927201553b-HDR" border="0">
  // <img src="https://i.ibb.co/12GBhRF/Decorating.jpg" alt="Decorating" border="0">
  // <img src="https://i.ibb.co/6H53LFq/Decorating2.jpg" alt="Decorating2" border="0">
  // <img src="https://i.ibb.co/TkMjxGB/Dinner.jpg" alt="Dinner" border="0">
  // <img src="https://i.ibb.co/W3wdY3P/Holy-Weston.jpg" alt="Holy-Weston" border="0">
  // <img src="https://i.ibb.co/QXVRZ8H/IMG-2105.jpg" alt="IMG-2105" border="0">
  // <img src="https://i.ibb.co/dbm13TX/Mountain-Background.jpg" alt="Mountain-Background" border="0">
  // <img src="https://i.ibb.co/v1dStbP/Mountain-Squad.jpg" alt="Mountain-Squad" border="0">
  // <img src="https://i.ibb.co/zVWf3wv/Movie-Night.jpg" alt="Movie-Night" border="0">
  // <img src="https://i.ibb.co/s5Md55j/planting-Bushes.jpg" alt="planting-Bushes" border="0">
  // <img src="https://i.ibb.co/Rcsh2B3/planting-Bushes-2.jpg" alt="planting-Bushes-2" border="0">
  // <img src="https://i.ibb.co/dbm13TX/Mountain-Background.jpg" alt="Mountain-Background" border="0">
  data: () => ({}),
  computed: {
    ...mapGetters(["scrollPosY"]),
  },
  mounted() {
    if (this.scrollPosY) {
      window.scrollTo(0, this.scrollPosY);
    }
  },
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
