import { defineStore } from 'pinia';
import axios from 'axios';

export const useCommentStore = defineStore('commentStore', {
  state: () => ({
    comments: [],
  }),
  actions: {
    async addNewComment(newComment) {
      console.log('newComment', newComment);
      try {
        const response = await axios.post(
          'http://localhost:3000/api/v1/comments',
          newComment
        );

        this.comments.push(response.data.comment);
      } catch (error) {
        throw error.response.data;
      }
    },
  },
});
