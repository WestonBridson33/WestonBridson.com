<template>
  <section>
    <v-row v-if="!$vuetify.breakpoint.mdAndDown">
      <v-col cols="7" class="secondary--text">
        <div class="text-center" style="max-width: 100%">
          <div>
            <h2 style="font-size: 4em">Aspiring</h2>
          </div>
          <v-row>
            <v-col>
              <span @mouseenter="gameDevActive" @mouseleave="deactivate"
                ><h3>Game Developer</h3>
                <transition name="slide"
                  ><span v-if="gameDevIcons" class="d-flex game-dev-icons"
                    ><v-img
                      class="mt-6 ml-7"
                      src="../../assets/cSharpIcon.svg"
                      width="2.5em"
                      height="3.5em"
                    ></v-img
                    ><v-img
                      class="mt-6 ml-9"
                      src="../../assets/unity3d-icon.svg"
                      width="3.5em"
                      height="3.5em"
                    ></v-img></span></transition
              ></span>
            </v-col>
            <v-col>
                <span @mouseenter="webDevActive" @mouseleave="deactivate"
                  ><h3>Web Developer</h3>

                  <transition name="slide"
                    ><span v-if="webDevIcons" class="d-flex web-dev-icons"
                      ><v-img
                        class="mt-6 ml-6"
                        src="../../assets/logo.png"
                        width="2.5em"
                        height="2.5em"
                      ></v-img
                      ><v-img
                        class="mt-6 ml-6"
                        src="../../assets/postgresql-icon.svg"
                        width="2.5em"
                        height="2.5em"
                      ></v-img
                      ><v-img
                        class="mt-6 ml-6"
                        src="../../assets/amazon_aws-icon.svg"
                        width="2.5em"
                        height="2.5em"
                      ></v-img></span></transition
                ></span>
              </v-col>
          </v-row>
          <v-row class="d-flex" style="min-height: 20em">
            <div v-if="gameDevIcons" class="text-left">
              <vue-typed-js
                class="about-me"
                :typeSpeed="5"
                :strings="[gameDevText]"
              >
                <article class="typing"></article>
              </vue-typed-js>
            </div>
            <div v-if="webDevIcons" class="text-left">
                <vue-typed-js
                  ref="typed"
                  class="about-me"
                  :typeSpeed="5"
                  :strings="[webDevText]"
                >
                  <article class="typing"></article>
                </vue-typed-js>
              </div>
            <!-- <div v-else style="min-height: 20em"><p></p></div> -->
          </v-row>
          <v-row class="d-flex justify-center">
            <div class="text-center">
              <vue-typed-js class="quote" :typeSpeed="5" :strings="[text]">
                <article class="typing"></article>
              </vue-typed-js>
            </div>
          </v-row>
        </div>
      </v-col>
      <v-col class="mt-0" style="padding-bottom: 0.33em; padding-top: 0.8em">
        <img
          src="https://i.ibb.co/fQfZPg8/Profile-Pic.jpg"
          alt="Profile-Pic of Weston Bridson in Colorado"
          width="550"
          border="0"
        />
      </v-col>
    </v-row>
    <div
      class="secondary mt-0"
      style="min-height: 0.2em; min-width: 0.3em"
    ></div>
    <section id="portfolio">
      <div class="heading secondary--text primary darken-4" :class="$vuetify.breakpoint.mdAndDown ? 'py-2' : 'py-6'">
        <h1 :style="$vuetify.breakpoint.mdAndDown ? 'font-size: .6em' : ''" >Portfolio</h1>
      </div>
      <div class="secondary" style="min-height: 0.3em; min-width: 0.3em"></div>
      <section class="currentProj">
        <p v-if="$vuetify.breakpoint.mdAndDown" class="text-center pt-9 secondary--text">*for best experience view on desktop</p>
        <v-row class="d-flex justify-center pb-5">
          <h2 class="secondary--text" :class="$vuetify.breakpoint.mdAndDown ? 'pt-0' : 'pt-13'" :style="$vuetify.breakpoint.mdAndDown ? 'font-size: 3em' : ''">Latest Project</h2>
        </v-row>
        <v-row class="d-flex justify-center">
          <let-there-be-light-card></let-there-be-light-card>
        </v-row>
      </section>
      <v-row class="d-flex justify-center">
        <h2 class="secondary--text pb-7" :style="$vuetify.breakpoint.mdAndDown ? 'font-size: 3em' : ''">Past Projects</h2>
      </v-row>
      <section class="monster-slayer">
        <v-row class="d-flex justify-center">
          <monster-slayer-card></monster-slayer-card>
        </v-row>
      </section>
      <section class="town-builder">
        <v-row class="d-flex justify-center">
          <town-builder-card></town-builder-card>
        </v-row>
      </section>
      <section class="canteen">
        <v-row class="d-flex justify-center">
          <canteen-card></canteen-card>
        </v-row>
      </section>
    </section>
    <section id="contact">
      <div
        class="secondary mt-0"
        style="min-height: 0.3em; min-width: 0.3em"
      ></div>
      <div class="heading secondary--text primary darken-4 pt-6 pb-6">
        <h1 :style="$vuetify.breakpoint.mdAndDown ? 'font-size: .8em' : ''">Contact</h1>
      </div>
      <div class="secondary" style="min-height: 0.3em; min-width: 0.3em"></div>
    </section>
    <div>
      <contact-form></contact-form>
    </div>
  </section>
</template>

<script>
import LetThereBeLightCard from "../projectCards/LetThereBeLightCard.vue";
import MonsterSlayerCard from "../projectCards/MonsterSlayerCard.vue";
import TownBuilderCard from "../projectCards/TownBuilderCard.vue";
import CanteenCard from "../projectCards/CanteenCard.vue";
import ContactForm from "../UI/ContactForm.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    LetThereBeLightCard,
    MonsterSlayerCard,
    TownBuilderCard,
    CanteenCard,
    ContactForm,
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
  data: () => ({
    webDevIcons: false,
    gameDevIcons: false,
    text: "You are limited only by your own ambition",
    webDevText:
      "After studying the subject at Illinois State University, I became a full time web developer. I still have a lot to learn, but I love what I do. I specialize in front-end development",
    gameDevText:
      "At a very young age I became infatuated with video games and their ability to bring worlds to life and tell stories in a very unique way. Naturally I hoped to be able to create my own games some day." + 
      " Below is a brief look into the steps I have taken to make that hope a reality"
  }),
  computed: {
    ...mapGetters(["scrollPosY"]),
    // text(){
    //   if(this.webDevIcons){
    //     return 'web dev';
    //   } else if (this.gameDevIcons){
    //     return 'game dev';
    //   } else {
    //     return 'developer';
    //   }
    // }
  },
  methods: {
    webDevActive() {
      this.webDevIcons = true;
    },
    gameDevActive() {
      this.gameDevIcons = true;
    },
    deactivate() {
      this.webDevIcons = false;
      this.gameDevIcons = false;
    },
    test() {
      // console.log(this.$refs.typed.$props);
      // // this.$refs.typed.$props
      // if(this.webDevIcons){
      //   this.$refs.typed.$props.strings[0] = 'web'
      // }
    },
  },
  mounted() {
    this.deactivate();
    this.$store.commit("setScrollHeight", document.body.scrollHeight);
    if (this.scrollPosY) {
      window.scrollTo(0, this.scrollPosY);
    }
  },
};
</script>

<style scoped>
.heading {
  font-family: "Quintessential";
  font-size: 5em;
  text-align: center;
}
.web-dev-icons {
  position: absolute;
  left: 44.8em;
}
.game-dev-icons {
  position: absolute;
  left: 11em;
}
.about-me {
  white-space: pre-wrap;
  max-width: 30em;
  margin-top: 6em;
  margin-left: 6em;
  font-family: "sitkBanner";
  font-size: 1.7em;
}
.quote {
  margin-top: 6em;
  font-family: "sitkBanner";
  font-size: 1.7em;
}
h2 {
  font-family: "Quintessential";
  font-size: 3.3em;
  padding-top: 0.6em;
}
h3 {
  font-family: "Quintessential";
  font-size: 3em;
  padding-top: 0.6em;
  text-align: center;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}

.slide-enter-to,
.slide-leave {
  opacity: 1;
  transform: translateY(0px);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.45s ease;
}
</style>
