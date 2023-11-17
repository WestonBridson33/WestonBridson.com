<template>
  <base-detailed-project-view
    title="A Simplified Canteen"
    :source="require('@/Resources/Videos/ASimplifiedCanteen.mp4')"
    :text="formattedText"
  ></base-detailed-project-view>
</template>

<script>
import BaseDetailedProjectView from "../../UI/BaseDetailedProjectView.vue";
export default {
  components: {
    BaseDetailedProjectView,
  },
  data: () => ({
    formattedText: `
        \tMy first taste of coding was Java 101 at Illinois Central Community College back in Fall of 2016. My professor had ` + 
        `an exciting scene from "School House of Rock" playing as he waited for everyone to find their way to class. Once ` + 
        `class had finally started, he started asking questions about different coding languages. The student sitting to my right ` + 
        `answered the first couple of questions without hesitation and soon started to act as if he were bored with these basic ` + 
        `questions. I, on the other hand, had just discovered that code is written in many different languages. Most of what I ` + 
        `had just heard was complete gibberish and I was starting to think that I was in the wrong place. My professor then ` + 
        `started walking us through the famous "Hello World" example project. Today that project sounds like it shouldn't be ` + 
        `intimidating in any way, but the different features of the Net Beans IDE, the strange words making up the class ` + 
        `declaration and main method and the different colored words were all totally foreign to me and my professor made no ` + 
        `mention of them. He didn't want to overwhelm us trying to explain what all of that stuff meant, but I got the false ` + 
        `impression that I should already know what all of that is. After we had finished the example project I raised my hand ` + 
        `and let the professor know that I had never looked code a day in my life, and asked if I was in the right place. ` + 
        `Thankfully, he assured me that this course was designed for people at that level and that it was normal to be confused ` + 
        `after day one. I was not the only student who let out a big sigh of relief to that answer.

        \tAfter about a month, I was really started to enjoy coding. I often found myself doing more than my assignments ` + 
        `required just to see what I would work. As fun as it was, I still saw it as "homework." It would be about a full 2 years ` + 
        `of hearing people tell me "To be a good programmer, you need to be coding all of the time," before I finally created ` + 
        `something on my own. I decided that I liked programming and I wanted to be good at it. But what would I create? ` + 
        `Well what pushed me towards programming in the first place? That would be an interest in game development. So I ` + 
        `looked towards my favorite game at the time, "Monster Hunter World."

        \t"Monster Hunter World" had a restaurant called "The Canteen." Before players set out to hunt a massive monster, ` + 
        `they would first want to visit "The Canteen" to fill their stomachs. At this restaurant, players could choose a bunch of ` + 
        `different meals or create their own. Depending on what was chosen, the player would get different boosts to their stats ` + 
        `for the duration of their next hunt. I'm not sure why, but I loved this idea. "A Simplified Canteen" was my attempt to ` + 
        `recreate a simpler version of this system. 

        \tSince "A Simplified Canteen" was not a game with players, I created a class called "player" and gave it variables ` + 
        `such as name, Health, Attack, ect. I then created several text menus that waited for the user to input a number ` + 
        `representing their desired selection. The user would repeat this process for Entre, Side, Veggie, and Drink. Each menu ` + 
        `choice would alter a different stat. After confirming their selection, the program would show the user the altered ` + 
        `stats. And, that's all there was to the project. 

        \tThis project was so simple it almost isn't worth displaying here, but it was my first creation. The first thing that I ` + 
        `could call "mine." I was so proud of it that I ran the program over and over again just to see the different results I ` + 
        `would get. I showed it to all of my friends, though most of them weren't to sure what they were looking at. This ` + 
        `program was the first time I truly felt like a programer and that's why it deserves to be on this portfolio.
      `,
  }),
};
</script>
