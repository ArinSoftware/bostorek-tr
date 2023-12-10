import { defineStore } from 'pinia';
import axios from 'axios';

export const useRatingStore = defineStore('ratingStore', {
  state: () => ({
    ratings: [],
    ratingsForBook: [],
  }),
  actions: {
    async addNewRate(newRate) {
      try {
        const response = await axios.post(
          'http://localhost:3000/api/v1/ratings',
          newRate
        );

        this.ratings.push(response.data.rating);
      } catch (error) {
        throw error.response.data;
      }
    },

    async fetchRatingsForBook(bookId) {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/ratings/book/${bookId}`
        );

        this.ratingsForBook = response.data.ratings;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
