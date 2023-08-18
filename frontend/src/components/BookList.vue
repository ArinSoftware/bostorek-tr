<template>
  <div class="row">
    <div class="col-sm-6 col-md-4 col-xl-3 mb-4" v-for="book in books" :key="book.id">
      <RouterLink :to="'/books/' + book.id">
        <BookItem :book="book" />
      </RouterLink>

    </div>
  </div>
</template>

<script>
import BookItem from '@/components/BookItem.vue';
import { RouterLink } from 'vue-router';
export default {
  name: "BookList",
  components: {
    BookItem,
    RouterLink
  },
  props: {
    books: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style lang="scss" scoped></style>