<template>
  <div>
    <section class="error-section inner-wrapper text-center">
      <div class="container">
        <div class="content">
          <h1>404</h1>
          <h2>Oops! That page can’t be found</h2>
          <div class="text">Sorry, but the page you are looking for does not existing</div>
          <nuxt-link class="default-btn" to="/">
            <span class="txt">Go to home page</span>
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .error-section {
    margin-top: 200px;
  }
</style>
