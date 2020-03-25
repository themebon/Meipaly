<template>
  <div>
    <PageBanner pageTitle="Portfolio v2" />
    <PortfolioPage />
  </div>
</template>
<script>

  import PageBanner from "~/components/pages/PageBanner";
  import PortfolioPage from "~/components/pages/PortfolioPage";
  export default {
    components: {
      PageBanner,
      PortfolioPage
    },
    head(){
      return {
        title: "Meipaly | Portfolio V2"
      }
    }
  }
</script>
