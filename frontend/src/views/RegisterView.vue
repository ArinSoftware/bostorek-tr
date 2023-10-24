<template>
  <section class="full-section-height">
    <div class="container">
      <form @submit.prevent="submitForm">
        <div class="row justify-content-center">
          <!-- Username Field (Medium and Larger Screens) -->
          <div class="col-md-6 col-8 mb-3">
            <label for="username" class="form-label">Username</label>
            <input
              type="text"
              class="form-control"
              id="username"
              name="username"
              v-model.trim="formData.username"
              required
            />
          </div>
        </div>

        <div class="row justify-content-center">
          <!-- Email Field (Medium and Larger Screens) -->
          <div class="col-md-6 col-8 mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              v-model.trim="formData.email"
              required
            />
          </div>
        </div>

        <!-- Password Field -->
        <div class="row justify-content-center">
          <div class="col-md-6 col-8 mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              v-model.trim="formData.password"
              required
            />
          </div>
        </div>

        <!-- Submit Button -->
        <div class="row justify-content-center">
          <div class="col-md-6 col-8 mb-3">
            <button type="submit" class="btn btn-primary w-100">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { useAuthStore } from '@/stores/authStore.js';
import { mapActions } from 'pinia';
export default {
  name: 'RegisterView',
  data() {
    return {
      formData: {
        username: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions(useAuthStore, ['register']),
    async submitForm() {
      try {
        await this.register(this.formData);
        console.log('Registration successfull');
      } catch (error) {
        console.log('Registration failed', error);
      }
    },
  },
};
</script>

<style scoped></style>
