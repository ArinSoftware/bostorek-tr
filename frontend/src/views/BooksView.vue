<template>
  <section>
    <div class="container">
      <SectionHeader
        title="Books"
        text="We declare long prop names using camelCase because this avoids"
      />
      <BookList :books="paginatedBooks" />
      <PaginationWidget
        :currentPage="currentPage"
        :totalPages="totalPages"
        @page-changed="updatePage"
      />
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/SectionHeader.vue';
import BookList from '@/components/BookList.vue';
import PaginationWidget from '@/components/widgets/PaginationWidget.vue';
import { useBookStore } from '@/stores/bookStore.js';
import { ref, computed } from 'vue';

const currentPage = ref(1);
const itemsPerPage = 8;

const bookStore = useBookStore();

const totalPages = computed(() => {
  return Math.ceil(bookStore.books.length / itemsPerPage);
});

const paginatedBooks = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return bookStore.books.slice(startIndex, endIndex);
});

const updatePage = (page) => {
  currentPage.value = page;
};
</script>

<!-- <script>


  methods: {
    updatePage(page) {
      this.currentPage = page;
    },
  },
};
</script> -->

<style scoped>
.auth-box {
  margin-top: -30px;
}
</style>
