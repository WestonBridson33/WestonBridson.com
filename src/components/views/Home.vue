<template>
  <section>
    <v-carousel height="52em" cycle>
      <v-carousel-item
        v-for="(item, i) in images"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <div class="about-me secondary--text">
      <v-row>
        <v-col class="d-flex justify-center">
          <h1>About Me</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-center">
          <article >
            Hello! My name is Weston Bridson. I am a web developer at GROWMARK
            INC. in Normal IL. I am currently working on a web application that
            will be used to manage all of the company's other internal web
            applications. What started out as a simple redesign has turned into
            a full scale project that I hope will save my co-workers a lot of
            time and energy.
          </article>
        </v-col>
      </v-row>
    </div>
    <div class="hobbies secondary--text">
      <v-row>
        <v-col class="d-flex justify-center">
          <h1>Hobbies</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-center">
          <article >
            Hello! My name is Weston Bridson. I am a web developer at GROWMARK
            INC. in Normal IL. I am currently working on a web application that
            will be used to manage all of the company's other internal web
            applications. What started out as a simple redesign has turned into
            a full scale project that I hope will save my co-workers a lot of
            time and energy.
          </article>
        </v-col>
      </v-row>
    </div>
    <div class="contact">

    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    images: [
      {
        name: "meOnRock",
        src: "https://i.ibb.co/sj5Jd5L/MeOnRock.jpg",
      },
      {
        name: "plantingBushes",
        src: "https://i.ibb.co/RzKq7rx/planting-Bushes.jpg",
      },
      {
        name: "waterfall",
        src: "https://i.ibb.co/tZWKCy5/Water-Fall.jpg",
      },
      {
        name: "mountain",
        src: "https://i.ibb.co/FmXKNJH/Mountain.jpg",
      },
      {
        name: "waterfall2",
        src: "https://i.ibb.co/YbZkTv3/Water-Fall2.jpg",
      },
    ],
  }),
};
</script>

<style scoped>
.hobbies, .about-me {
  padding-top: 5em;
  padding-left: 10em;
  padding-right: 10em;
  font-size: 2em;
  font-family: sitkBanner;
}
.contact{
  padding-top: 15em;
}
h1{
  font-family: pristina;
}
</style>