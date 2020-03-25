<template>
  <section class="pageBanner">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="banner_content text-center">
            <h4><nuxt-link to="/">home</nuxt-link> - {{ pageTitle }}</h4>
            <h2>{{ pageTitle }}</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "PageBanner",
      props: {
        pageTitle: {
          type: String
        }
      }
    }
</script>

<style scoped>

</style>
