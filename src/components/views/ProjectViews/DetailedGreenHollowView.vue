<template>
    <section>
        <div class="back-xs" v-if="$vuetify.breakpoint.xs">
            <v-btn icon @click="$router.push('/home')"><v-icon large
                    color="secondary">mdi-arrow-left-circle-outline</v-icon></v-btn>
        </div>
        <div class="back-sm" v-else-if="$vuetify.breakpoint.sm">
            <v-btn icon @click="$router.push('/home')"><v-icon large
                    color="secondary">mdi-arrow-left-circle-outline</v-icon></v-btn>
        </div>
        <div class="back" v-else>
            <v-btn icon @click="$router.push('/home')"><v-icon large
                    color="secondary">mdi-arrow-left-circle-outline</v-icon></v-btn>
        </div>
        <div class="detailed-heading-xs text-center" v-if="$vuetify.breakpoint.xs">
            <h2 class="secondary--text">Green Hollow</h2>
        </div>
        <div class="detailed-heading-sm text-center" v-else-if="$vuetify.breakpoint.sm">
            <h2 class="secondary--text">Green Hollow</h2>
        </div>
        <div class="detailed-heading text-center" v-else>
            <h2 class="secondary--text">Green Hollow</h2>
        </div>
        <div class="text-center" v-if="$vuetify.breakpoint.xs">
            <iframe width="350" height="180"
                src="https://www.youtube.com/embed/oRDmIZT9H9s?si=bQgdyXkHMpaIEXti&loop=1&controls=1&autoplay=1&mute=1"
                frameborder="2" allow="autoplay; picture-in-picture"></iframe>
        </div>
        <div class="text-center" v-else-if="$vuetify.breakpoint.sm">
            <iframe width="700" height="450;"
                src="https://www.youtube.com/embed/oRDmIZT9H9s?si=bQgdyXkHMpaIEXti&loop=1&controls=1&autoplay=1&mute=1"
                frameborder="2"></iframe>
        </div>
        <div class="text-center" v-else>
            <iframe width="1000" height="580em;"
                src="https://www.youtube.com/embed/oRDmIZT9H9s?si=bQgdyXkHMpaIEXti&loop=1&controls=1&autoplay=1&mute=1"
                frameborder="2"></iframe>
        </div>
        <div class="text-center pt-6" v-if="!$vuetify.breakpoint.smAndDown">
                    <v-btn href="https://gospelsandgames.itch.io/green-hollow" @click.capture.stop target="_blank"
                        large 
                        dark 
                        :disabled="false" 
                        class="secondary--text">
                            View Download Page
                    </v-btn>
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
        formattedText: `\t\t\tYou are looking at my entry for the Brackeys Game Jam 2023.1. I had one week to make a game with the theme of "An End is a New Beginning."
        Green Hollow was my result. This game jam was my first and it was very eye opening experience. 

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

.back-xs {
    position: absolute;
    top: .2%;
}
</style>