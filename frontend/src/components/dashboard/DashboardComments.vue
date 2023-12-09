<template>
  <div class="row">
    <div class="col">
      <table class="table">
        <thead>
          <tr>
            <th>Content</th>
            <th>Book</th>
            <th class="text-center">Edit</th>
            <th class="text-center">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="comment in commentsByUser" :key="comment._id">
            <td>{{ comment.content }}</td>
            <td>{{ comment.book.title }}</td>
            <td class="text-center">
              <font-awesome-icon
                :icon="['far', 'pen-to-square']"
                class="text-warning"
                style="cursor: pointer"
              />
            </td>
            <td class="text-center">
              <font-awesome-icon
                :icon="['fas', 'trash']"
                class="text-danger"
                style="cursor: pointer"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { useCommentStore } from '@/stores/commentStore.js';
import { useAuthStore } from '@/stores/authStore.js';
import { mapActions, mapState } from 'pinia';
export default {
  name: 'DashboardComments',
  methods: {
    ...mapActions(useCommentStore, ['fetchCommentsByUser']),
  },
  computed: {
    ...mapState(useCommentStore, ['commentsByUser']),
    ...mapState(useAuthStore, ['user']),
  },
  created() {
    this.fetchCommentsByUser(this.user._id);
  },
};
</script>

<style lang="scss" scoped></style>
