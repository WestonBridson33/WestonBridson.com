<template>
  <section>
    <div class="back-xs" v-if="$vuetify.breakpoint.xs" >
      <v-btn icon @click="$router.push('/home')"><v-icon large color="secondary">mdi-arrow-left-circle-outline</v-icon></v-btn>
    </div>
    <div class="back-sm" v-else-if="$vuetify.breakpoint.sm">
      <v-btn icon @click="$router.push('/home')"><v-icon large color="secondary">mdi-arrow-left-circle-outline</v-icon></v-btn>
    </div>
    <div class="back" v-else>
      <v-btn icon @click="$router.push('/home')"><v-icon large color="secondary">mdi-arrow-left-circle-outline</v-icon></v-btn>
    </div>
    <div class="detailed-heading-xs text-center" v-if="$vuetify.breakpoint.xs">
      <h2 class="secondary--text">Let There Be Light</h2>
    </div>
    <div class="detailed-heading-sm text-center" v-else-if="$vuetify.breakpoint.sm">
      <h2 class="secondary--text">Let There Be Light</h2>
    </div>
    <div class="detailed-heading text-center" v-else>
      <h2 class="secondary--text">Let There Be Light</h2>
    </div>
    <div class="text-center" v-if="$vuetify.breakpoint.xs">
      <iframe
        width="350"
        height="180"
        src="https://www.youtube.com/embed/6JUUDjMevVg?autoplay=0&mute=1&playlist=6JUUDjMevVg&loop=1&controls=1"
        frameborder="2"
      ></iframe>
    </div>
    <div class="text-center" v-else-if="$vuetify.breakpoint.sm">
      <iframe
        width="700"
        height="450;"
        src="https://www.youtube.com/embed/6JUUDjMevVg?autoplay=1&mute=1&playlist=6JUUDjMevVg&loop=1&controls=0"
        frameborder="2"
      ></iframe>
    </div>
    <div class="text-center" v-else>
      <iframe
        width="1000"
        height="580em;"
        src="https://www.youtube.com/embed/6JUUDjMevVg?autoplay=1&mute=1&playlist=6JUUDjMevVg&loop=1&controls=0"
        frameborder="2"
      ></iframe>
    </div>
    <div class="text-center pt-6" v-if="!$vuetify.breakpoint.smAndDown">
      <v-row>
        <v-col class="text-right">
          <v-btn large dark :disabled="true">Demo Coming soon!</v-btn>
        </v-col>
        <v-col class="text-left">
          <router-link to="/dev-log" style="text-decoration: none;">
            <v-btn large dark width="15.5em" class="secondary--text">View Dev-Log</v-btn>
          </router-link>
        </v-col>
      </v-row>
    </div>
    <div class="text-center pt-6" v-else>
          <v-btn large dark :disabled="true" class="mb-6">Demo Coming soon!</v-btn><br>
          <router-link to="/dev-log" style="text-decoration: none;">
            <v-btn large dark width="15.5em" class="secondary--text">View Dev-Log</v-btn>
          </router-link>
    </div>
    <div class="d-flex justify-center">
      <v-card color="primary darken-4" class="pa-4 mt-16 mb-9" elevation="0">
        <article class="detailed-article-xs secondary--text py-16" v-if="$vuetify.breakpoint.xs">
          {{ text }}
        </article>
        <article class="detailed-article-sm secondary--text py-16" v-else-if="$vuetify.breakpoint.sm">
          {{ text }}
        </article>
        <article class="detailed-article secondary--text py-16" v-else>
          {{ formattedText }}
        </article>
      </v-card>
    </div>
    <div id="contact">
      <div v-if="$vuetify.breakpoint.xs" class="heading-xs secondary--text">
        <h2>Share Feedback</h2>
      </div>
      <div v-else-if="$vuetify.breakpoint.sm" class="heading-sm secondary--text">
        <h2>Share Feedback</h2>
      </div>
      <div v-else class="heading secondary--text">
        <h2>Share Feedback</h2>
      </div>
      <contact-form></contact-form>
    </div>
  </section>
</template>

<script>
import ContactForm from "../../UI/ContactForm.vue";

export default {
  components: { ContactForm },
  data: () => ({
      formattedText: `\t\t\tThe project you are currently viewing is the reason I became a programmer. At a very young age I became infatuated with video games
      and their ability to bring worlds to life and tell stories in a very unique way. Naturally I hoped to be able to create my own games some day.
      As I grew, my interest in games only increased and so did my interest in the Catholic faith. I was raised in the faith attending mass and CCD
      every Sunday. At a young age I developed the practice of praying daily, but didn't really start to develop my faith until high school. It wasn't
      until trying to select my major for college that I would decide that I wanted to create Catholic themed video games. Soon after making this
      decision, I began watching youtube tutorials on the subject. The next two years would be dedicated to practicing and learning all I could 
      about game development. The specific idea for "Let There Be Light" wouldn't come until my junior year.

      \t\tTo start my 3rd year of college, I transferred to Illinois State University. One of the first things I did there was introduce myself to the 
      St. John Paul II Catholic Newman Center on campus. A place that I would spend the majority of my time for the next 2 years, learning all that
      I could about the Catholic Faith and how to live it. In February of my junior year, after going on a retreat led by the Newman Center, I was fired
      up to finally start creating my first Catholic game.

      \t\tThe original Idea for "Let There Be Light" was to have the main action of the game be lighting torches to dispel the darkness around you. By 
      doing so, the light would be both protecting you from the dark, and leading you down the correct path. I had no plans of the player performing 
      any sort of attacks. I hoped this would give the player a sense of reliance on the light, which was meant to be an allegory for the power of God. 
      However, after creating a quick prototype, it was clear that making this idea fun would be challenging. I reminded myself that this would be my 
      first game and that I should keep it simple. So, after some more brain storming, I decided on a simple, action based platformer that would have 
      a "Dark Souls" style progression system. When thinking of player combat, I wanted to somehow keep that sense of reliance. 
      
      \t\tFrom the Newman Center, I had been learning a bit about the saints and how powerful prayer with them can be. Saints are people who were 
      very devoted to their faith and had a very close relationship with God. When we pray to saints, we are asking our brothers and sisters in Christ 
      to pray with us and for us. I thought this would be an interesting aspect of my faith to include in "Let There Be Light." Instead of weapons, the 
      player would find "saint pages." Each page would describe a particular saint and allow the player to ask for their intercession. Doing so would 
      grant the player an ability based on the saint. 

      \t\tOnce I had a solid plan for all of the different aspects of the game, it was time to start redesigning the prototype. Starting with just a 
      moveable player, a basic enemy, and a "Mega-Man" style attack, it was already much more entertaining. I kept developing the game for about a
      year. My schedule was not very consistent, but I made decent progress. After showing the game to some friends and receiving very positive 
      feedback, I decided to track the progress of the game on Youtube. I made a Youtube channel, as well as a twitter account and a facebook page.
      I have very little experience with facebook and twitter, so those platforms are a bit awkward for me. Youtube on the other hand, I quite enjoyed. 
      It is a lot of work though. I often have thoughts or updates that I want to share but can't find a great way to do so on those platforms. To 
      solve this, I have created the Dev-Log tab on this website where I can easily post whatever I want. Be sure to check it out if you are 
      interested in "Let There Be Light's" progress.

      \t\t
      `,
      
      text: "\t\t\tThe project you are currently viewing is the reason I became a programmer. At a very young age I became infatuated with video games and their ability to bring worlds to life and tell stories in a very unique way. Naturally I hoped to be able to create my own games some day. As I grew, my interest in games only increased and so did my interest in the Catholic faith. I was raised in the faith attending mass and CCD every Sunday. At a young age I developed the practice of praying daily, but didn't really start to develop my faith until high school. It wasn't until trying to select my major for college that I would decide that I wanted to create Catholic themed video games. Soon after making this decision, I began watching youtube tutorials on the subject. The next two years would be dedicated to practicing and learning all I could about game development. The specific idea for \"Let There Be Light\" wouldn't come until my junior year.\n\n" +
      "\t\tTo start my 3rd year of college, I transferred to Illinois State University. One of the first things I did there was introduce myself to the St. John Paul II Catholic Newman Center on campus. A place that I would spend the majority of my time for the next 2 years, learning all that I could about the Catholic Faith and how to live it. In February of my junior year, after going on a retreat led by the Newman Center, I was fired up to finally start creating my first Catholic game.\n\n" +
      "\t\tThe original Idea for \"Let There Be Light\" was to have the main action of the game be lighting torches to dispel the darkness around you. By doing so, the light would be both protecting you from the dark, and leading you down the correct path. I had no plans of the player performing any sort of attacks. I hoped this would give the player a sense of reliance on the light, which was meant to be an allegory for the power of God. However, after creating a quick prototype, it was clear that making this idea fun would be challenging. I reminded myself that this would be my first game and that I should keep it simple. So, after some more brain storming, I decided on a simple, action based platformer that would have a \"Dark Souls\" style progression system. When thinking of player combat, I wanted to somehow keep that sense of reliance.\n\n " +
      "\t\tFrom the Newman Center, I had been learning a bit about the saints and how powerful prayer with them can be. Saints are people who were very devoted to their faith and had a very close relationship with God. When we pray to saints, we are asking our brothers and sisters in Christ to pray with us and for us. I thought this would be an interesting aspect of my faith to include in \"Let There Be Light.\" Instead of weapons, the player would find \"saint pages.\" Each page would describe a particular saint and allow the player to ask for their intercession. Doing so would grant the player an ability based on the saint.\n\n" +
      "\t\tOnce I had a solid plan for all of the different aspects of the game, it was time to start redesigning the prototype. Starting with just a moveable player, a basic enemy, and a \"Mega-Man\" style attack, it was already much more entertaining. I kept developing the game for about a year. My schedule was not very consistent, but I made decent progress. After showing the game to some friends and receiving very positive feedback, I decided to track the progress of the game on Youtube. I made a Youtube channel, as well as a twitter account and a facebook page. I have very little experience with facebook and twitter, so those platforms are a bit awkward for me. Youtube on the other hand, I quite enjoyed. It is a lot of work though. I often have thoughts or updates that I want to share but can't find a great way to do so on those platforms. To solve this, I have created the Dev-Log tab on this website where I can easily post whatever I want. Be sure to check it out if you are interested in \"Let There Be Light's\" progress",
  }),
};
</script>
<style scoped>
.detailed-heading {
  font-family: Quintessential;
  font-size: 3.5em;
  text-align: center;
  padding-top: 0.1em;
  padding-bottom: .3em;
}
.detailed-article {
  white-space: pre;
  max-width: 55%;
  font-family: sitkBanner;
  font-size: 1.5em;
}
.heading {
  font-family: 'Quintessential';
  font-size: 3em;
  text-align: center;
}
.detailed-heading-sm {
  font-family: Quintessential;
  font-size: 2.8em;
  text-align: center;
  padding-top: 0.1em;
  padding-bottom: .3em;
}
.detailed-article-sm {
  white-space: pre-wrap;
  max-width: 34em;
  font-family: sitkBanner;
  font-size: 1.5em;
}
.heading-sm {
  font-family: 'Quintessential';
  font-size: 3em;
  text-align: center;
}
.detailed-heading-xs {
  font-family: Quintessential;
  font-size: 1.2em;
  text-align: center;
  padding-top: 0.3em;
  padding-bottom: .3em;
}
.detailed-article-xs {
  white-space: pre-wrap;
  max-width: 18em;
  font-family: sitkBanner;
  font-size: 1.5em;
}
.heading-xs {
  font-family: 'Quintessential';
  font-size: 2em;
  text-align: center;
}
.back-xs{
  position: absolute;
  top: .2%;
}
</style>