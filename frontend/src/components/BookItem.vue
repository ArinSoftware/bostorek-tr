<template>
  <div class="card border-0 shadow position-relative">
    <img src="../../template/images/b1.jpg" class="card-img-top" />
    <div class="card-body">
      <div class="auth-box">
        <span
          style="background-color: var(--primary-color)"
          class="py-1 px-3 text-white rounded-pill"
        >
          {{ book.author }}
        </span>
      </div>
      <h5 class="card-title mt-3 fw-semibold">{{ book.title }}</h5>
      <p class="card-text">{{ truncatedText }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <a href="#" class="card-link">Read More</a>
        <p
          style="background-color: var(--primary-color)"
          class="py-1 px-2 text-white badge mb-0"
        >
          {{ book.createdAt }}
        </p>
      </div>
    </div>
    <span
      :class="ratingBadgeClass"
      class="position-absolute top-0 start-100 translate-middle p-2 text-light rounded-circle border border-2 border-light custom-center"
    >
      {{ averageRating }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'BookItem',
  props: {
    book: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    averageRating() {
      if (this.book.ratings.length > 0) {
        const totalRating = this.book.ratings.reduce(
          (sum, rating) => sum + rating.rate,
          0
        );

        return (totalRating / this.book.ratings.length).toFixed(1);
      } else {
        return '-';
      }
    },
    ratingBadgeClass() {
      if (this.averageRating > 7 || this.averageRating === '-') {
        return 'bg-success';
      } else if (this.averageRating > 4) {
        return 'bg-warning';
      } else {
        return 'bg-danger';
      }
    },
    truncatedText() {
      if (this.book.description.length > 80) {
        return this.book.description.slice(0, 80) + '...';
      }

      return this.book.description;
    },
  },
};
</script>

<style scoped>
.card-text {
  min-height: 70px;
}
.custom-center {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
