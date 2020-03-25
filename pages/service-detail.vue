<template>
  <div>
    <PageBanner pageTitle="Service Detail" />
    <ServiceDetail />
    <CallToAction />
  </div>
</template>

<script>
  import PageBanner from "~/components/pages/PageBanner";
  import ServiceDetail from "~/components/pages/ServiceDetail";
  import CallToAction from "~/components/home/CallToAction";
  export default {
    components: {
      PageBanner,
      ServiceDetail,
      CallToAction,

    },
    head(){
      return {
        title: "Meipaly | Service Detail"
      }
    }
  }
</script>
