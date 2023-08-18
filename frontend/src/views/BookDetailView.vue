<template>
  <section>
    <div class="container">
      <SectionHeader title="Book Detail" text="We declare long prop names using camelCase because this avoids" />
      <button>Back</button>
      <div class="row mb-4">
        <div class="col-lg-6">
          <img class="card-img-top" src="../../template/images/b_detail.jpg" />
        </div>
        <div class="col-lg-6 details-wrapper">
          <p class="lead description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, facilis quisquam.
            Dolore
            possimus iusto quia impedit natus, voluptates nemo nisi!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, facilis quisquam.
            Dolore
            possimus iusto quia impedit natus, voluptates nemo nisi!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, facilis quisquam.
            Dolore
            possimus iusto quia impedit natus, voluptates nemo nisi!</p>
          <div class="mb-4">
            <div class="row border-bottom pb-2">
              <div class="col-lg-6"><strong>Page</strong></div>
              <div class="col-lg-6">278</div>
            </div>
            <div class="row border-bottom pb-2">
              <div class="col-lg-6"><strong>Category</strong></div>
              <div class="col-lg-6">Fiction</div>
            </div>
            <div class="row border-bottom pb-2">
              <div class="col-lg-6"><strong>Rating</strong></div>
              <div class="col-lg-6">7.8</div>
            </div>
            <div class="row border-bottom pb-2">
              <div class="col-lg-6"><strong>Upload Date</strong></div>
              <div class="col-lg-6">19 Jan 2019</div>
            </div>
          </div>

          <div class="comments-section">
            <h3 class="diplay-6 mb-2">Comments</h3>
            <div class="card mb-4">
              <div class="card-body">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, suscipit.</p>
                <div class="d-flex justify-content-between">
                  <p class="fw-bold fst-italic">John Doe</p>
                  <div class="d-flex align-items-center">
                    <p>Upvote</p>
                    <p class="ps-2"><strong>8</strong></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-4">
              <div class="card-body">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, suscipit.</p>
                <div class="d-flex justify-content-between">
                  <p class="fw-bold fst-italic">John Doe</p>
                  <div class="d-flex align-items-center">
                    <p>Upvote</p>
                    <p class="ps-2"><strong>8</strong></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-4">
              <div class="card-body">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, suscipit.</p>
                <div class="d-flex justify-content-between">
                  <p class="fw-bold fst-italic">John Doe</p>
                  <div class="d-flex align-items-center">
                    <p>Upvote</p>
                    <p class="ps-2"><strong>8</strong></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-4">
              <div class="card-body">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, suscipit.</p>
                <div class="d-flex justify-content-between">
                  <p class="fw-bold fst-italic">John Doe</p>
                  <div class="d-flex align-items-center">
                    <p>Upvote</p>
                    <p class="ps-2"><strong>8</strong></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-4">
              <div class="card-body">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, suscipit.</p>
                <div class="d-flex justify-content-between">
                  <p class="fw-bold fst-italic">John Doe</p>
                  <div class="d-flex align-items-center">
                    <p>Upvote</p>
                    <p class="ps-2"><strong>8</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
export default {
  name: "BookDetailView",
  components: {
    SectionHeader
  }
}
</script>

<style scoped>
.details-wrapper {
  max-height: 740px;
  display: flex;
  flex-direction: column;
}

.comments-section {
  flex-grow: 1;
  overflow-y: auto;
}

.description {
  min-height: 150px;
  max-height: 250px;
  overflow-y: auto;
}
</style>