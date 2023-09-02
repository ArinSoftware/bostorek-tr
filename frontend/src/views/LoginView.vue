<template>
  <section class="full-section-height">
    <div class="container">
      <form @submit.prevent="submitForm">
        <div class="row justify-content-center">
          <!-- Email Field (Medium and Larger Screens) -->
          <div class="col-md-6 col-8 mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" name="email" v-model.trim="formData.email" required>
          </div>
        </div>

        <!-- Password Field -->
        <div class="row justify-content-center">
          <div class="col-md-6 col-8 mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" name="password" v-model.trim="formData.password"
              required>
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

<script>
export default {
  name: "LoginView",
  data() {
    return {
      formData: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    submitForm() {
      console.log("login formData::", this.formData)
    }
  }
}
</script>

<style lang="scss" scoped></style>