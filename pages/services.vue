<template>
  <div>
    <PageBanner pageTitle="Services" />
    <ServicesTwo />
    <Services />
    <WhatWeDoTwo />
    <Funfact />
    <Clients />
  </div>
</template>

<script>
  import PageBanner from "~/components/pages/PageBanner";
  import ServicesTwo from "~/components/home2/ServicesTwo";
  import Services from "~/components/home/Services";
  import WhatWeDoTwo from "~/components/home2/WhatWeDoTwo";
  import Funfact from "~/components/home/Funfact";
  import Clients from "~/components/home/Clients";
  export default {
    components: {
      PageBanner,
      ServicesTwo,
      Services,
      WhatWeDoTwo,
      Funfact,
      Clients,
    },
    head(){
      return {
        title: "Meipaly | Services"
      }
    }
  }
</script>
