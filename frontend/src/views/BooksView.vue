<template>
  <section>
    <div class="container">
      <SectionHeader title="Books" text="We declare long prop names using camelCase because this avoids" />
      <BookList :books="books" />
    </div>
  </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
import BookList from '@/components/BookList.vue';
import books from "@/db.js";
export default {
  name: "BooksView",
  components: {
    SectionHeader,
    BookList
  },
  data() {
    return {
      books: books
    }
  }
}
</script>

<style scoped>
.auth-box {
  margin-top: -30px;
}
</style>