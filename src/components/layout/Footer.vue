<template>
   <section>
    <v-footer
      padless
    >
      <v-card
        flat
        tile
        width="100%"
        class="primary darken-4 text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            icon
            @click="click(icon)"
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="secondary--text">
         Built by <strong>Weston Bridson</strong> using VueJS - Copyright <v-icon small color="secondary">mdi-copyright</v-icon> - {{ new Date().getFullYear() }}
        </v-card-text>
      </v-card>
    </v-footer>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data: () => ({
      icons: [
        'mdi-home',
        'mdi-email',
        'mdi-youtube',
      ],
    }),
    computed: {
    ...mapGetters(["scrollHeight"]),
  },
    methods:{
      click(icon){
        switch(icon){
          case "mdi-home":{
            this.$router.push('/home');
            window.scrollTo(0,0);
            break;
          }
          case "mdi-email": {
            this.$router.push('/home');
            this.$store.commit('setScrollPosY', this.scrollHeight);
            break;
          }
          case "mdi-youtube": {
            window.open("https://www.youtube.com/channel/UCajQvErWE9m8wGozJo3BnOA")
          }
        }
      }
    }
  }
</script>