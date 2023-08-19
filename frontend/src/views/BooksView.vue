<template>
  <section>
    <div class="container">
      <SectionHeader title="Books" text="We declare long prop names using camelCase because this avoids" />
      <BookList :books="paginatedBooks" />
      <Pagination :currentPage="currentPage" :totalPages="totalPages" @page-changed="updatePage" />
    </div>
  </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
import BookList from '@/components/BookList.vue';
import Pagination from '@/components/Pagination.vue';
import books from "@/db.js";
export default {
  name: "BooksView",
  components: {
    SectionHeader,
    BookList,
    Pagination
  },
  data() {
    return {
      books: books,
      currentPage: 1,
      itemsPerPage: 8
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.books.length / this.itemsPerPage)
    },
    paginatedBooks() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.books.slice(startIndex, endIndex);
    }
  },
  methods: {
    updatePage(page) {
      this.currentPage = page
    }
  }

}
</script>

<style scoped>
.auth-box {
  margin-top: -30px;
}
</style>