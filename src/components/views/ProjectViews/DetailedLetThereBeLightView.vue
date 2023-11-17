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
        src="https://www.youtube.com/embed/a50JzYFBADs?si=v9ChvNdS9B0OloEK&loop=1&controls=1&autoplay=1&mute=1"
        frameborder="2"
        allow="autoplay; picture-in-picture"
      ></iframe>
    </div>
    <div class="text-center" v-else-if="$vuetify.breakpoint.sm">
      <iframe
        width="700"
        height="450;"
        src="https://www.youtube.com/embed/a50JzYFBADs?si=v9ChvNdS9B0OloEK&loop=1&controls=1&autoplay=1&mute=1"
        frameborder="2"
      ></iframe>
    </div>
    <div class="text-center" v-else>
      <iframe
        width="1000"
        height="580em;"
        src="https://www.youtube.com/embed/a50JzYFBADs?si=v9ChvNdS9B0OloEK&loop=1&controls=1&autoplay=1&mute=1"
        frameborder="2"
      ></iframe>
    </div>
    <div class="text-center pt-6" v-if="!$vuetify.breakpoint.smAndDown">
      <v-row>
        <v-col class="text-right">
          <v-btn href="https://gospelsandgames.itch.io/let-there-be-light" @click.capture.stop target="_blank" large dark :disabled="false" class="secondary--text">View Download Page</v-btn>
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
          {{ formattedText }}
        </article>
        <article class="detailed-article-sm secondary--text py-16" v-else-if="$vuetify.breakpoint.sm">
          {{ formattedText }}
        </article>
        <article class="detailed-article secondary--text py-16 px-6" v-else>
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
      formattedText: `\t\t\tThis is the first game that I ever planned to make public. I wanted to keep the game simple and just get the experience of a full development cycle. ` +
      `As for the setting, I drew a lot of inspiration from the John Paul II Catholic Newman Center on my school's campus. It was to be a materialization of one's spiritual struggle ` +
      `between good and evil. In my first draft, there would be no combat, but the player would navigate a dark and cold world via 2D platforming, using a lantern to light the way. ` + 
      `The player character's reliance on the lantern was meant to be an allegory for reliance on God. However, after building a quick prototype, I did not think it would be too fun. ` +
      `I wanted to add some sort of combat, but I wanted to keep that idea of the player character relying on powers outside of himself. 
      
      \t\tThe Subject of Catholic Saints was discussed quite frequently at the Newman Center. Thus the idea of the player character relying on them manifested in my head and eventually into the game. ` +
      `At first, I planned to pick some saints, and then make a series of attacks themed around each one. The player would be able to switch between their active attack style by finding ` +
      `and equipping saint pages. These pages would provide a short description of the saint and provide you with that saint's attacks. I first built attacks for St. Michael. He was the ` +
      `most obvious choice as he is often depicted wielding a flaming sword. I made a 3 hit combo attack and was really happy with how it turned out, but the amount of time that it took ` +
      `to draw those animation frames really took its toll on me. I had many more attacks to animate, and could not see myself doing so for more than 1 saint. So, eventually I decided to ` +
      `focus on fleshing out St. Micheal's move set and turn the idea of St. Pages into St. Cards. Rather than providing a new move set, these cards would provide a few buffs to ` +
      `the player character's stats. 

      /t/tAs for progression, I was planning to follow the Dark Souls formula of slaying enemies, gaining experience, pushing through levels to find checkpoints, and finding bosses ` +
      `to take down until you made it to the end of the game. I did get the level up system created and it ended up working pretty well. But, before I ever got around to designing levels ` +
      `or bosses, I ran out of juice. During the entirety of this game's development, I had struggled finding a consistent source of motivation to work on the game. Finally, while searching ` +
      `for the cause of this issue, I asked myself, "Do I even like this game?" To be honest, I didn't.
      
      \t\tDuring the inception of Let There Be Light and the thick of its development, I was very active at the Newman Center. I talked about the game quite a bit with the other members of the community and I ` + 
      `think that somewhere along the line, I started to make development decisions based on what I thought that community would like and approve of. Maybe I started doing that right from  ` +
      `the start. Now, I have always had the idea of trying to incorporate ideas from my faith into the games I create in someway. But I always imagined doing it subtly through themes, or ` +
      `symbolism. The lantern from my first draft, for example, conveyed a soft and simple message of "light disperses darkness." But at this point in development, I had no idea ` +
      `what the message was anymore. It felt like the goal of the game was to teach people about saints, which is not a mission I really felt called to pursue. As I looked at what I had created, ` +
      `I no longer felt any deep connection to it. It was time to move on.

      \t\tHowever, as much as I wanted to set the game aside and start something new, there was still a lot to be proud of. My controls felt great, my attacks looked awesome, and my progression system ` +
      `was fun. I decided that instead of stepping away from it forever immediately, I would transform it into something that could be completed in two weeks. Like a self imposed game jam. ` +
      `I created a spawn area for the player, a small arena, random enemy spawning functionality, and a score system. And just like that, Let There Be Light was now a rogue-lite. I play tested ` +
      `it extensively and even had some friends play test it. We all had a lot of fun and I was very happy to finally see people playing the game. It is far from perfect. The game would benefit ` +
      `greatly from having the ability to crouch under projectiles, and the ability to attack while airborne, but I could no longer justify spending the development time on those features.

      \t\tThough I may not be super happy with how the game turned out, I am still very proud of my accomplishment. It feels very good to finally have a game that I can call "Complete." If ` +
      `you would like to try it, the game can be downloaded completely free above! Thank you to everyone who supported me over the years. Without your encouragement, the game likely would ` +
      `not exist at all. Enjoy! 

      \t\t
      `,
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
  white-space: pre-wrap;
  max-width: 65em;
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