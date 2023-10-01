<template>
  <section>
    <Carousel :items="carouselItems" height="400px"></Carousel>
  </section>
</template>

<script>
import Carousel from "@/components/widgets/Carousel.vue";
import hero_1 from "@/assets/images/hero_1.jpg";
import hero_2 from "@/assets/images/hero_2.jpg";
import hero_3 from "@/assets/images/hero_3.jpg";

export default {
  name: "HomeView",
  components: { Carousel },
  data() {
    return {
      carouselItems: [
        { imageUrl: hero_1, subtitle: 'Liberte', title: 'Lorem Ipsum Dolor Sit Amet', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { imageUrl: hero_2, subtitle: 'Egalite', title: 'Excepteur Sint Occaecat Cupidatat', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { imageUrl: hero_3, subtitle: 'Fraternite', title: 'Neque Porro Quisquam Est', description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.' }
      ],
    };
  }
}
</script>

<style lang="scss" scoped></style>