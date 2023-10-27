import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    user: null,
  }),

  getters: {},

  actions: {
    async register(newUserData) {
      try {
        const response = await axios.post(
          'http://localhost:3000/api/v1/auth/register',
          newUserData
        );
        console.log('response', response);
      } catch (error) {
        console.error('Error at getting user', error);
      }
    },

    async login(userData) {
      try {
        const response = await axios.post(
          'http://localhost:3000/api/v1/auth/login',
          userData
        );
        console.log('response', response);
        this.user = response.data.user;
      } catch (error) {
        console.error('Error at login user', error);
      }
    },
  },
});
