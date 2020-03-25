<template>
  <div>
    <Header />
      <nuxt />
    <Footer />
  </div>
</template>

<style>
</style>
<script>
  import Header from "~/components/Header";
  import Footer from "~/components/Footer";
  export default {
    components: {
      Header,
      Footer
    },
    head(){
      return {
        title: "Meipaly - Vue Nuxt Digital Services Agency Template"
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    }

  }
</script>
