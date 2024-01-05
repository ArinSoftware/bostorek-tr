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
                    <div
                      class="d-flex flex-row align-items-center"
                      style="gap: 10px"
                      v-if="!user"
                    >
                      <p class="small mb-0">Login for upvote!</p>
                      <font-awesome-icon
                        :icon="['fas', 'thumbs-up']"
                        style="color: var(--secondary-color)"
                      />
                    </div>
                    <div
                      class="d-flex flex-row align-items-center"
                      style="gap: 10px; cursor: pointer"
                      v-else-if="
                        !comment.upvotes.includes(user._id) &&
                        comment.postedBy._id !== user._id
                      "
                      @click="upvote(comment._id)"
                    >
                      <p class="small mb-0">Upvote?</p>
                      <font-awesome-icon :icon="['far', 'thumbs-up']" />
                    </div>

                    <div
                      class="d-flex flex-row align-items-center"
                      style="gap: 10px; cursor: pointer"
                      v-else-if="
                        comment.upvotes.includes(user._id) &&
                        comment.postedBy._id !== user._id
                      "
                      @click="downvote(comment._id)"
                    >
                      <p class="small mb-0">Upvoted</p>
                      <font-awesome-icon
                        :icon="['fas', 'thumbs-up']"
                        style="color: var(--secondary-color)"
                      />
                    </div>

                    <div
                      v-else
                      class="d-flex flex-row align-items-center"
                      style="gap: 10px"
                    >
                      <p class="small mb-0">
                        You can't upvote for your comment
                      </p>
                      <font-awesome-icon
                        :icon="['fas', 'thumbs-up']"
                        style="color: var(--secondary-color)"
                      />
                    </div>

                    <p class="small text-muted mb-0">
                      {{ comment.upvotes.length }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionHeader from '@/components/SectionHeader.vue';
import { useBookStore } from '@/stores/bookStore.js';
import { useAuthStore } from '@/stores/authStore.js';
import { useCommentStore } from '@/stores/commentStore.js';
import { useRatingStore } from '@/stores/ratingStore.js';
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const book = ref(null);
const loading = ref(true);
const commentContent = ref('');
const userRate = ref(null);

const bookStore = useBookStore();
const authStore = useAuthStore();
const commentStore = useCommentStore();
const ratingStore = useRatingStore();

const route = useRoute();
const router = useRouter();

const upvote = async (commentId) => {
  try {
    await commentStore.upvoteComment(commentId);

    await commentStore.fetchCommentsForBook(route.params.id);
  } catch (error) {}
};
const downvote = async (commentId) => {
  try {
    await commentStore.downvoteComment(commentId);

    await commentStore.fetchCommentsForBook(route.params.id);
  } catch (error) {}
};

const addComment = async () => {
  try {
    const bookId = route.params.id;
    const content = commentContent.value;
    const userId = authStore.user._id;

    await commentStore.addNewComment({
      bookId,
      content,
      userId,
    });

    commentContent.value = '';

    await commentStore.fetchCommentsForBook(route.params.id);
  } catch (error) {
    console.log(error);
  }
};

const addRate = async () => {
  try {
    const bookId = route.params.id;
    const rate = userRate.value;
    const userId = authStore.user._id;

    await ratingStore.addNewRate({
      bookId,
      rate,
      userId,
    });

    userRate.value = null;

    await ratingStore.fetchRatingsForBook(route.params.id);
  } catch (error) {}
};

const goToBackBooks = () => {
  router.push({ name: 'books' });
};

const selectBook = () => {
  const bookId = route.params.id;
  book.value = bookStore.selectedBook(bookId);
  loading.value = false;
};

const averageRating = computed(() => {
  if (ratingStore.ratingsForBook.length > 0) {
    const totalRating = ratingStore.ratingsForBook.reduce(
      (sum, rating) => sum + rating.rate,
      0
    );

    return (totalRating / ratingStore.ratingsForBook.length).toFixed(1);
  } else {
    return 0;
  }
});

const ratingCount = computed(() => {
  return ratingStore.ratingsForBook ? ratingStore.ratingsForBook.length : 0;
});

const isUserAlreadyRated = computed(() => {
  if (!authStore.user) {
    return false;
  }

  return ratingStore.ratingsForBook.some(
    (rating) => rating.ratedBy._id === authStore.user._id
  );
});

const userRating = computed(() => {
  const userRatingObj = ratingStore.ratingsForBook.find(
    (rating) => rating.ratedBy._id === authStore.user._id
  );

  return userRatingObj ? userRatingObj.rate : null;
});

const isLoggedIn = computed(() => authStore.isLoggedIn);
const commentsForBook = computed(() => commentStore.commentsForBook);
const user = computed(() => authStore.user);

selectBook();
commentStore.fetchCommentsForBook(route.params.id);
ratingStore.fetchRatingsForBook(route.params.id);
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
