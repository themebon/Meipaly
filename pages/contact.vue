<template>
  <div>
    <PageBanner pageTitle="Contact" />
    <Contact />
    <Map />
    <ClientsTwo />
  </div>
</template>

<script>
  import PageBanner from "~/components/pages/PageBanner";
  import Contact from "~/components/pages/Contact";
  import Map from "~/components/home2/Map";
  import ClientsTwo from "~/components/home2/ClientsTwo";
  export default {
    components: {
      Contact,
      PageBanner,
      Map,
      ClientsTwo,
    },
    head(){
      return {
        title: "Meipaly | Contact"
      }
    }
  }
</script>
