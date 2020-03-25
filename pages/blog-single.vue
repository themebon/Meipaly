<template>
  <div>
    <PageBanner pageTitle="Blog Single" />
    <BlogDetail />
  </div>
</template>
<script>
  import PageBanner from "~/components/pages/PageBanner";
  import BlogDetail from "~/components/pages/BlogDetail";
  export default {
    components: {
      BlogDetail,
      PageBanner
    },
    head(){
      return {
        title: "Meipaly | Blog Single"
      }
    }
  }
</script>
