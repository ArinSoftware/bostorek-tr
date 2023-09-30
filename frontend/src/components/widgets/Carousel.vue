<template>
  <div class="position-relative w-100">
    <div v-for="(item, index) in items" :key="index">
      <div v-if="currentItemIndex === index" class="position-relative">
        <img :src="item.imageUrl" class="w-100" :style="{ objectFit: 'cover' }">
        <div
          class="custom-carousel-caption position-absolute top-0 start-0 bottom-0 end-0 d-flex justify-content-center text-light p-4 align-items-center">
          <div class="container">
            <h6 class="fw-bold text-uppercase" style="color: var(--secondary-color);">{{ item.subtitle }}</h6>
            <h1 class="display-4">{{ item.title }}</h1>
            <p class="lead">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="custom-carousel-controls">
      <button @click="prevItem">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button @click="nextItem">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentItemIndex: 0
    }
  },
  methods: {
    nextItem() {
      this.currentItemIndex = (this.currentItemIndex + 1) % this.items.length;
    },
    prevItem() {
      this.currentItemIndex = (this.currentItemIndex - 1 + this.items.length) % this.items.length;
    }
  }
}
</script>

<style scoped>
.custom-carousel-caption {
  background-color: rgba(0, 0, 0, .7);
}
</style>