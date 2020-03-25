<template>
  <div>
    <PageBanner pageTitle="Portfolio" />
    <PortfolioLoadMore />
  </div>
</template>
<script>
  import PageBanner from "~/components/pages/PageBanner";
  import PortfolioLoadMore from "~/components/pages/PortfolioLoadMore";
  export default {
    components: {
      PageBanner,
      PortfolioLoadMore
    },
    head(){
      return {
        title: "Meipaly | Portfolio"
      }
    }
  }
</script>
