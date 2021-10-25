<template>
  <v-card>
      <router-link :to="path" style="text-decoration: none">
    <v-tabs color="secondary" dark style="min-width: 50em" grow height="8em">
      <v-tab @click="setPath('/home')" class="pristina secondary--text pl-0 pr-10">
        <v-img
          width="4em"
          height="4em"
          style="max-width: 4em"
          aspect-ratio="16/9"
          src="../../Resources/Images/SaintCard.png"
        ></v-img>
        <strong><p class="ma-0" style="font-size: 1.2em">Weston E. Bridson</p></strong></v-tab
      >
      <v-tab @click="setPath('/portfolio')" class="pristina secondary--text">Portfolio</v-tab>
      <v-tab @click="setPath('/resume')" class="pristina secondary--text">Resume</v-tab>
      <v-tab @click="setPath('/dev-log')" class="pristina secondary--text">Dev-log</v-tab>
      <v-tab @click="setPath('/contact')" class="pristina secondary--text">Contact</v-tab>
    </v-tabs>
    </router-link>
  </v-card>
</template>

<script>
export default {
    data: () => ({
        path: "",
    }),
    methods: {
        setPath(path){
            this.path = path;
        },
    }
}
</script>


<style scoped>
    .pristina{
        font-family: "Pristina";
        font-size: 1.7em;
    }
</style>