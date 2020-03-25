<template>
  <div>
    <PageBanner pageTitle="About Us" />
    <AboutAgency />
    <TestimonialTwo />
    <Team />
    <OurWork />
    <WhyChooseUs />
    <CallToAction />
  </div>
</template>
<script>
  import PageBanner from "~/components/pages/PageBanner";
  import AboutAgency from "~/components/home/AboutAgency";
  import TestimonialTwo from "~/components/home2/TestimonialTwo";
  import Team from "~/components/home/Team";
  import OurWork from "~/components/pages/OurWork";
  import WhyChooseUs from "~/components/home2/WhyChooseUs";
  import CallToAction from "~/components/home/CallToAction";
  export default {
    components: {
      PageBanner,
      AboutAgency,
      TestimonialTwo,
      Team,
      OurWork,
      WhyChooseUs,
      CallToAction
    },
    head(){
      return {
        title: "Meipaly | About Us"
      }
    }
  }
</script>
