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

export default {
  name: "BooksView",
  components: {
    SectionHeader,
    BookList,
    Pagination
  },
  data() {
    return {
      books: [],
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
    },

    async fetchBooks() {
      try {
        const respnse = await fetch('http://localhost:3000/api/v1/books');
        const data = await respnse.json();
        this.books = data;
      } catch (error) {

      }
    }
  },

  created() {
    this.fetchBooks();
  }

}
</script>

<style scoped>
.auth-box {
  margin-top: -30px;
}
</style>