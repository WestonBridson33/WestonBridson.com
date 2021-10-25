<template>
  <section>
    <v-carousel >
      <v-carousel-item
        v-for="(item, i) in images"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  </section>
</template>

<script>
export default {
  data: () => ({
    images: [
      {
        name: "meOnRock",
        src:"https://i.ibb.co/sj5Jd5L/MeOnRock.jpg"
      },
      {
          name: "plantingBushes",
          src: "https://i.ibb.co/RzKq7rx/planting-Bushes.jpg",
      },
      {
          name: "waterfall",
          src: "https://i.ibb.co/tZWKCy5/Water-Fall.jpg"
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