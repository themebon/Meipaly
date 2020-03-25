<template>
  <div>
    <PageBanner pageTitle="Blog v2" />
    <BlogTwo />
  </div>
</template>
<script>
  import PageBanner from "~/components/pages/PageBanner";
  import BlogTwo from "~/components/pages/BlogTwo";
  export default {
    components: {
      PageBanner,
      BlogTwo
    },
    head(){
      return {
        title: "Meipaly | Blog V2"
      }
    }
  }
</script>
