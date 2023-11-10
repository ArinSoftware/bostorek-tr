<template>
  <section style="min-height: calc(100vh - 130px)">
    <div class="container py-5">
      <ul class="nav nav-tabs" id="dashboardTab" role="tablist">
        <li class="nav-item" role="presentation" @click="activeTab = 'general'">
          <button
            class="nav-link"
            :class="{ active: activeTab === 'general' }"
            id="general-tab"
            data-bs-toggle="tab"
            data-bs-target="#general-tab-pane"
            type="button"
            role="tab"
            aria-controls="general-tab-pane"
            aria-selected="true"
          >
            General
          </button>
        </li>
        <li class="nav-item" role="presentation" @click="activeTab = 'books'">
          <button
            class="nav-link"
            :class="{ active: activeTab === 'books' }"
            id="books-tab"
            data-bs-toggle="tab"
            data-bs-target="#books-tab-pane"
            type="button"
            role="tab"
            aria-controls="books-tab-pane"
            aria-selected="false"
          >
            Books
          </button>
        </li>
      </ul>
      <div class="tab-content py-4" id="dashboardContent">
        <div
          class="tab-pane fade"
          :class="{ 'active show': activeTab === 'general' }"
          id="general-tab-pane"
          role="tabpanel"
          aria-labelledby="general-tab"
          tabindex="0"
        >
          <div class="row">
            <div class="col-lg-6">
              <h2 class="mb-4">User Information</h2>
              <form>
                <div class="mb-3">
                  <label for="username">Username</label>
                  <input
                    v-model="userInfo.username"
                    type="text"
                    id="username"
                    class="form-control"
                    :disabled="!editMode"
                  />
                </div>
                <div class="mb-3">
                  <label for="email">Email</label>
                  <input
                    v-model="userInfo.email"
                    type="email"
                    id="email"
                    class="form-control"
                    :disabled="!editMode"
                  />
                </div>
                <div class="mb-3">
                  <label for="password">Password</label>
                  <input
                    v-model="userInfo.password"
                    type="password"
                    id="password"
                    class="form-control"
                    :disabled="!editMode"
                  />
                </div>
                <button
                  @click="!editMode ? toggleEditMode() : saveUserInfo()"
                  type="button"
                  class="btn btn-primary"
                >
                  {{ editMode ? 'Save' : 'Edit' }}
                </button>
                <button
                  v-if="editMode"
                  style="
                    background-color: #ecc73c !important;
                    border-color: #ecc73c !important;
                  "
                  @click="cancelEditMode"
                  type="button"
                  class="btn btn-primary ms-3"
                >
                  Cancel
                </button>
              </form>
            </div>
            <div class="col-lg-6"></div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          :class="{ 'active show': activeTab === 'books' }"
          id="books-tab-pane"
          role="tabpanel"
          aria-labelledby="books-tab"
          tabindex="0"
        >
          {{ user }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useAuthStore } from '@/stores/authStore.js';
import { useUserStore } from '@/stores/userStore.js';
import { mapState, mapActions } from 'pinia';
import { useToast } from 'vue-toastification';
export default {
  name: 'DashboardView',
  data() {
    return {
      activeTab: 'general',
      userInfo: {
        username: '',
        email: '',
        password: '',
      },
      editMode: false,
    };
  },
  created() {
    this.userInfo.username = this.user.username;
    this.userInfo.email = this.user.email;
  },
  computed: {
    ...mapState(useAuthStore, ['user']),
  },
  methods: {
    ...mapActions(useUserStore, ['updateUserDetails']),
    ...mapActions(useAuthStore, ['logout']),

    toggleEditMode() {
      this.editMode = !this.editMode;
    },

    async saveUserInfo() {
      try {
        await this.updateUserDetails(this.userInfo);

        const toast = useToast();

        toast.success('Please login with new details', {
          position: 'top-right',
          timeout: 3500,
          closeButton: 'button',
          icon: true,
          rtl: false,
        });

        setTimeout(() => {
          this.logout();
        }, 4000);
      } catch (error) {}
    },
    cancelEditMode() {
      this.editMode = false;
      this.userInfo.username = this.user.username;
      this.userInfo.email = this.user.email;
      this.userInfo.password = '';
    },
  },
};
</script>

<style scoped>
.nav-link {
  color: var(--secondary-color);
  font-weight: bold;
}
.nav-tabs {
  border-color: var(--secondary-color);
}
.nav-link.active {
  color: var(--primary-color);
  background-color: var(--secondary-color);
  border-color: var(--secondary-color);
}
</style>
