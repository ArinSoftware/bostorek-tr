<template>
  <div class="container">
    <SectionHeader :title="book.title" :text="book.author" />
    <div class="d-flex">
      <font-awesome-icon
        icon="arrow-left"
        size="xl"
        class="mb-2"
        style="cursor: pointer; color: var(--secondary-color)"
        @click="goToBackBooks"
      />
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="image-box">
          <img class="img-fluid" src="../../template/images/b_detail.jpg" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="d-flex flex-column h-100 justify-content-between">
          <div class="mb-3">
            <p>
              {{ book.description }}
            </p>
          </div>
          <div class="d-flex flex-column">
            <div class="row border-bottom pb-2">
              <div class="col-lg-6"><strong>Page</strong></div>
              <div class="col-lg-6">{{ book.pageNumber }}</div>
            </div>
            <div class="row border-bottom pb-2">
              <div class="col-lg-6"><strong>Rating</strong></div>
              <div class="col-lg-6">
                {{ averageRating }} - ({{ ratingCount }} rates)
              </div>
            </div>
            <div class="row border-bottom pb-2">
              <div class="col-lg-6"><strong>Upload Date</strong></div>
              <div class="col-lg-6">{{ book.updatedAt }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-md-6">
        <div class="box">
          <div v-if="isLoggedIn">
            <div v-if="!isUserAlreadyRated">
              <h3 style="color: var(--primary-color)">Rate The Book</h3>
              <form @submit.prevent="addRate">
                <!-- Rating Input -->
                <div class="mb-3">
                  <input
                    type="number"
                    id="rating"
                    class="form-control w-50"
                    min="1"
                    max="10"
                    placeholder="Rate (1-10)"
                    required
                    v-model="userRate"
                  />
                </div>

                <!-- Submit Button -->
                <button type="submit" class="btn btn-primary">Rate</button>
              </form>
            </div>

            <div v-else>Your Rate: {{ userRating }}</div>
          </div>

          <router-link v-else to="/login">
            <p style="color: var(--secondary-color)">
              Log in to leave a rate for the book
            </p>
          </router-link>
        </div>
      </div>
    </div>
    <hr v-if="isLoggedIn" />
    <div class="row mt-3">
      <div class="col-md-12">
        <div class="box">
          <div v-if="isLoggedIn">
            <h3 style="color: var(--primary-color)">Comment The Book</h3>
            <form @submit.prevent="addComment">
              <!-- Comment Text Area -->
              <div class="mb-3">
                <textarea
                  id="comment"
                  class="form-control"
                  rows="4"
                  placeholder="Enter your comment"
                  required
                  v-model="commentContent"
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button type="submit" class="btn btn-primary">Comment</button>
            </form>
          </div>

          <router-link v-else to="/login">
            <p style="color: var(--secondary-color)">
              Log in to leave a comment
            </p>
          </router-link>
        </div>
      </div>
    </div>
    <hr />
    <div class="row my-3">
      <div class="col-md-12">
        <div class="box">
          <h3 style="color: var(--primary-color)">Comments</h3>
          <div>
            <div
              class="card mb-4"
              v-for="comment in commentsForBook"
              :key="comment._id"
            >
              <div class="card-body">
                <p>
                  {{ comment.content }}
                </p>

                <div class="d-flex justify-content-between">
                  <div class="d-flex flex-row align-items-center">
                    <p class="small mb-0 ms-2">
                      {{ comment.postedBy.username }}
                    </p>
                  </div>
                  <div
                    class="d-flex flex-row align-items-center"
                    style="gap: 10px"
                  >
                    <p class="small text-muted mb-0">Upvote?</p>
                    <font-awesome-icon :icon="['far', 'thumbs-up']" />
                    <p class="small text-muted mb-0">3</p>
                  </div>
                </div>
              </div>
            </div>
            <!--             <div class="card mb-4">
              <div class="card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div class="d-flex justify-content-between">
                  <div class="d-flex flex-row align-items-center">
                    <p class="small mb-0 ms-2">Username</p>
                  </div>
                  <div
                    class="d-flex flex-row align-items-center"
                    style="gap: 10px"
                  >
                    <p class="small mb-0">Upvoted</p>
                    <font-awesome-icon
                      :icon="['fas', 'thumbs-up']"
                      style="color: var(--secondary-color)"
                    />
                    <p class="small text-muted mb-0">4</p>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
import { useBookStore } from '@/stores/bookStore.js';
import { useAuthStore } from '@/stores/authStore.js';
import { useCommentStore } from '@/stores/commentStore.js';
import { useRatingStore } from '@/stores/ratingStore.js';
import { mapState, mapActions } from 'pinia';
export default {
  name: 'BookDetailView',
  components: {
    SectionHeader,
  },
  data() {
    return {
      book: null,
      loading: true,
      commentContent: '',
      userRate: null,
    };
  },
  created() {
    this.selectBook();
    this.fetchCommentsForBook(this.$route.params.id);
    this.fetchRatingsForBook(this.$route.params.id);
  },
  methods: {
    ...mapActions(useCommentStore, ['addNewComment', 'fetchCommentsForBook']),
    ...mapActions(useRatingStore, ['addNewRate', 'fetchRatingsForBook']),
    async addComment() {
      try {
        const bookId = this.$route.params.id;
        const content = this.commentContent;
        const userId = this.user._id;

        await this.addNewComment({
          bookId,
          content,
          userId,
        });

        this.commentContent = '';

        await this.fetchCommentsForBook(this.$route.params.id);
      } catch (error) {
        console.log(error);
      }
    },

    async addRate() {
      try {
        const bookId = this.$route.params.id;
        const rate = this.userRate;
        const userId = this.user._id;

        await this.addNewRate({
          bookId,
          rate,
          userId,
        });

        this.userRate = null;

        await this.fetchRatingsForBook(this.$route.params.id);
      } catch (error) {}
    },
    goToBackBooks() {
      this.$router.push({ name: 'books' });
    },
    selectBook() {
      const bookId = this.$route.params.id;
      this.book = this.selectedBook(bookId);
      this.loading = false;
    },
  },
  computed: {
    ...mapState(useBookStore, ['selectedBook']),
    ...mapState(useAuthStore, ['user', 'isLoggedIn']),
    ...mapState(useCommentStore, ['commentsForBook']),
    ...mapState(useRatingStore, ['ratingsForBook']),

    averageRating() {
      if (this.ratingsForBook.length > 0) {
        const totalRating = this.ratingsForBook.reduce(
          (sum, rating) => sum + rating.rate,
          0
        );

        return (totalRating / this.ratingsForBook.length).toFixed(1);
      } else {
        return 0;
      }
    },

    ratingCount() {
      return this.ratingsForBook ? this.ratingsForBook.length : 0;
    },

    isUserAlreadyRated() {
      if (!this.user) {
        return false;
      }

      return this.ratingsForBook.some(
        (rating) => rating.ratedBy._id === this.user._id
      );
    },

    userRating() {
      const userRatingObj = this.ratingsForBook.find(
        (rating) => rating.ratedBy._id === this.user._id
      );

      return userRatingObj ? userRatingObj.rate : null;
    },
  },
};
</script>

<style scoped>
.image-box {
  height: 300px;
  overflow: hidden;
}
.image-box img {
  width: 100% !important;
}

.btn-primary {
  height: 36px;
  min-width: 120px;
  border-radius: 16px;
}
.box {
  border: 1px solid #e2e3e5;
  border-radius: 10px;
  padding: 20px;
}
</style>
