<template>
  <section>
    <div class="container">
      <SectionHeader title="Books" text="We declare long prop names using camelCase because this avoids" />
    </div>
  </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
export default {
  name: "BooksView",
  components: {
    SectionHeader
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped></style>