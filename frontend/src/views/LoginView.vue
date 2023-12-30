<template>
  <section class="full-section-height">
    <div class="container">
      <form @submit.prevent="submitForm">
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
              autocomplete="off"
              :class="{
                'is-valid': isEmailValid,
                'is-invalid':
                  (!isEmailValid && showEmailWarningMessage) ||
                  notFoundEmail === formData.email,
              }"
              @focus="showEmailWarningMessage = true"
              @blur="showEmailWarningMessage = false"
            />
            <span
              v-if="showEmailWarningMessage && !isEmailValid"
              class="text-danger small"
              >Please provide a valid email!</span
            >
            <span
              v-if="notFoundEmail === formData.email"
              class="text-danger small"
              >{{ `${notFoundEmail} is not found!` }}</span
            >
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
              :class="{
                'is-valid': isPasswordValid,
                'is-invalid':
                  (!isPasswordValid && showPasswordWarningMessage) ||
                  !isPasswordMatch,
              }"
              @focus="showPasswordWarningMessage = true"
              @blur="showPasswordWarningMessage = false"
              @input="isPasswordMatch = true"
            />
            <span
              v-if="showPasswordWarningMessage && !isPasswordValid"
              class="text-danger small"
              >Password must be between 4 and 10 characters!</span
            >
            <span v-if="!isPasswordMatch" class="text-danger small"
              >Your password is not true!</span
            >
          </div>
        </div>

        <!-- Submit Button -->
        <div class="row justify-content-center">
          <div class="col-md-6 col-8 mb-3">
            <button type="submit" class="btn btn-primary w-100">Login</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore.js';
import { useToast } from 'vue-toastification';
import { ref, reactive, computed } from 'vue';
import { useRouter } from 'vue-router';

const formData = reactive({
  email: '',
  password: '',
});

const showEmailWarningMessage = ref(false);
const showPasswordWarningMessage = ref(false);
const notFoundEmail = ref(null);
const isPasswordMatch = ref(true);

const authStore = useAuthStore();
const router = useRouter();

const submitForm = async () => {
  try {
    await authStore.login(formData);

    const toast = useToast();

    toast.success('You will be redirected to the dashboard page', {
      position: 'top-right',
      timeout: 3500,
      closeButton: 'button',
      icon: true,
      rtl: false,
    });

    setTimeout(() => {
      router.push('/dashboard');
    }, 2000);
  } catch (data) {
    const { error } = data;

    if (error === 'User not found!') {
      notFoundEmail.value = formData.email;
    } else if (error === 'Your password is not true') {
      isPasswordMatch.value = false;
    }
  }
};

const isFormValid = computed(() => isEmailValid.value && isPasswordValid.value);
const isEmailValid = computed(() =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
);

const isPasswordValid = computed(
  () => formData.password.length >= 4 && formData.password.length <= 10
);
</script>

<style lang="scss" scoped></style>
