<template>
  <div>
    <PageBanner pageTitle="Blog v3" />
    <BlogThree />
  </div>
</template>
<script>
  import PageBanner from "~/components/pages/PageBanner";
  import BlogThree from "~/components/pages/BlogThree";
  export default {
    components: {
      PageBanner,
      BlogThree,

    },
    head(){
      return {
        title: "Meipaly | Blog V3"
      }
    }
  }
</script>
