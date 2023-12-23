import { defineStore } from 'pinia';
import axios from 'axios';
import { useBookStore } from './bookStore.js';

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
      const bookStore = useBookStore();
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/ratings/book/${bookId}`
        );

        this.ratingsForBook = response.data.ratings;

        const bookIndex = bookStore.books.findIndex(
          (book) => book._id === bookId
        );

        if (bookIndex !== -1) {
          bookStore.books[bookIndex].ratings = response.data.ratings;
        } else {
          console.warn(`Book with id: ${bookId} not found`);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
