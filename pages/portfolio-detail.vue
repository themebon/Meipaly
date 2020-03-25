<template>
  <div>
    <PageBanner pageTitle="Portfolio Detail" />
    <PortfolioDetail />
  </div>
</template>
<script>
  import PageBanner from "~/components/pages/PageBanner";
  import PortfolioDetail from "~/components/pages/PortfolioDetail";
  export default {
    components: {
      PageBanner,
      PortfolioDetail
    },
    head(){
      return {
        title: "Meipaly | Portfolio Detail"
      }
    }
  }
</script>
