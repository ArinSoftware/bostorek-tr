<template>
  <div class="position-relative w-100">
    <Transition name="fade" mode="out-in">
      <div :key="selectedItem.imageUrl" class="position-relative">
        <img
          :src="selectedItem.imageUrl"
          class="w-100"
          :style="{ height: height, objectFit: 'cover' }"
        />
        <div
          class="custom-carousel-caption position-absolute top-0 start-0 bottom-0 end-0 d-flex justify-content-center text-light p-4 align-items-center"
        >
          <div class="container">
            <h6
              class="fw-bold text-uppercase"
              style="color: var(--secondary-color)"
            >
              {{ selectedItem.subtitle }}
            </h6>
            <h1 class="display-4">{{ selectedItem.title }}</h1>
            <p class="lead">{{ selectedItem.description }}</p>
          </div>
        </div>
      </div>
    </Transition>
    <div class="custom-carousel-controls position-absolute d-flex gap-1">
      <button
        @click="prevItem"
        class="border-0 rounded-circle d-flex justify-content-center align-items-center"
      >
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button
        @click="nextItem"
        class="border-0 rounded-circle d-flex justify-content-center align-items-center"
      >
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  height: {
    type: String,
    default: '100%',
  },
});

const currentItemIndex = ref(0);
const selectedItem = ref(null);

selectedItem.value = props.items[0];

const nextItem = () => {
  currentItemIndex.value = (currentItemIndex.value + 1) % props.items.length;
  selectedItem.value = props.items[currentItemIndex.value];
};

const prevItem = () => {
  currentItemIndex.value =
    (currentItemIndex.value - 1 + props.items.length) % props.items.length;
  selectedItem.value = props.items[currentItemIndex.value];
};
</script>

<style scoped>
.custom-carousel-caption {
  background-color: rgba(0, 0, 0, 0.7);
}

.custom-carousel-controls {
  bottom: -22.5px;
}

.custom-carousel-controls button {
  background-color: var(--secondary-color);
  width: 50px;
  height: 50px;
  transition: all 0.3s ease;
}

.custom-carousel-controls button:hover {
  background-color: var(--primary-color);
  transform: scale(1.1);
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 1rem;
  height: 1rem;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter-active {
  transition: all 1s ease;
}
</style>
