<template>
  <section>
    <div class="heading secondary--text">
      <h1>Portfolio</h1>
    </div>
    <div class="secondary" style="min-height: 0.3em; min-width: 0.3em"></div>
    <section class="currentProj">
      <v-row class="d-flex justify-center">
        <h2 class="secondary--text">Current Project</h2>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-card
          color="primary darken-4 secondary--text"
          elevation="14"
          width="80%"
          class="text-center"
        >
          <h3>Let There Be Light</h3>
          <iframe
            width="1000"
            height="580em;"
            src="https://www.youtube.com/embed/6JUUDjMevVg?autoplay=1&mute=1&playlist=6JUUDjMevVg&loop=1&controls=0"
            frameborder="2"
          ></iframe>
          <article>

          </article>
        </v-card>
      </v-row>
      <v-row> </v-row>
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