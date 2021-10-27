<template>
  <section>
    <div class="heading secondary--text">
      <h1>Portfolio</h1>
    </div>
    <div class="secondary" style="min-height: .3em; min-width: .3em"></div>
    <section class="currentProj">
      <v-row class="d-flex justify-center">
        <h2 class="secondary--text">Current Project</h2>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-card
          color="primary darken-4 secondary--text"
          elevation="14"
          width="80%"
        >
          <h3>Let There Be Light</h3></v-card
        >
      </v-row>
    </section>
  </section>
</template>

<script>
export default {};
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