<template>
  <div>
    <SliderTwo />
    <CallToAction design="style2" />
    <ServicesTwo />
    <Features />
    <Portfolio />
    <TestimonialTwo />
    <WhyChooseUs />
    <WhatWeDoTwo />
    <Testimonial />
    <BlogHome />
    <Map />
    <Quote />
    <ClientsTwo />

  </div>
</template>

<script>
  import SliderTwo from "~/components/home2/SliderTwo"
  import CallToAction from "~/components/home/CallToAction";
  import ServicesTwo from "~/components/home2/ServicesTwo";
  import Features from "~/components/home2/Features";
  import Portfolio from "~/components/home/Portfolio";
  import TestimonialTwo from "~/components/home2/TestimonialTwo";
  import WhyChooseUs from "~/components/home2/WhyChooseUs";
  import WhatWeDoTwo from "~/components/home2/WhatWeDoTwo";
  import Testimonial from "~/components/home/Testimonial";
  import BlogHome from "~/components/home/BlogHome";
  import Map from "~/components/home2/Map";
  import Quote from "~/components/home2/Quote";
  import ClientsTwo from "~/components/home2/ClientsTwo";
  export default {
    components: {
      SliderTwo,
      CallToAction,
      ServicesTwo,
      Features,
      Portfolio,
      TestimonialTwo,
      WhyChooseUs,
      WhatWeDoTwo,
      Testimonial,
      BlogHome,
      Map,
      Quote,
      ClientsTwo
    },
    head(){
      return {
        title: "Meipaly | Home 2"
      }
    }
  }
</script>

<style>


</style>
