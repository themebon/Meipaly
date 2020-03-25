<template>
  <div>
    <PageBanner pageTitle="Contact" />
    <Contact />
  </div>
</template>

<script>
  import PageBanner from "~/components/pages/PageBanner";
  import Contact from "~/components/pages/Contact";
  export default {
    components: {
      Contact,
      PageBanner
    },
    head(){
      return {
        title: "Meipaly | Contact"
      }
    }
  }
</script>
