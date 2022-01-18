<template>
  <section>
    <div id="detailed-heading" class="text-center">
      <h2 class="heading secondary--text">Let There Be Light</h2>
    </div>
    <div class="text-center">
      <iframe
        width="1000"
        height="580em;"
        src="https://www.youtube.com/embed/6JUUDjMevVg?autoplay=1&mute=1&playlist=6JUUDjMevVg&loop=1&controls=0"
        frameborder="2"
      ></iframe>
    </div>
    <div class="text-center pt-6">
      <v-btn large dark :disabled="true">Demo Coming soon!</v-btn>
    </div>
    <div class="d-flex justify-center">
      <article id="detailed-article" class="secondary--text py-16">
        {{ text }}
      </article>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
      text: `\t\t\tThe project you are currently viewing is the reason I became a programmer. At a very young age I became infatuated with video games
      and their ability to bring worlds to life and tell stories in a very unique way. Naturally I hoped to be able to create my own games some day.
      As I grew, I decided that I wanted my games to bring people a sense of love, hope, and peace, or in other words, light. The source of this
      light for me was the Catholic faith, another very big part of my life.

      \t\t
      `
  }),
};
</script>
<style scoped>
#detailed-heading {
  font-family: pristina;
  font-size: 3.5em;
  text-align: center;
  padding-top: 0.4em;
}
#detailed-article {
  white-space: pre;
  max-width: 55%;
}
</style>