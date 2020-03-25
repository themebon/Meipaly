<template>
  <div>
    <SliderThree />
    <AboutAgency />
    <WhatWeDo />
    <ServicesTwo />
    <TestimonialTwo />
    <Portfolio />
    <Funfact />
    <Team />
    <Clients />
    <Testimonial />
    <BlogHome />
    <Map />
    <Quote />
    <ClientsTwo />
  </div>
</template>
<script>
  import SliderThree from "~/components/home3/SliderThree";
  import AboutAgency from "~/components/home/AboutAgency";
  import WhatWeDo from "~/components/home/WhatWeDo";
  import ServicesTwo from "~/components/home2/ServicesTwo";
  import TestimonialTwo from "~/components/home2/TestimonialTwo";
  import Portfolio from "~/components/home/Portfolio";
  import Funfact from "~/components/home/Funfact";
  import Team from "~/components/home/Team";
  import Clients from "~/components/home/Clients";
  import Testimonial from "~/components/home/Testimonial";
  import BlogHome from "~/components/home/BlogHome";
  import Map from "~/components/home2/Map";
  import Quote from "~/components/home2/Quote";
  import ClientsTwo from "~/components/home2/ClientsTwo";
  export default {
    components: {
      SliderThree,
      AboutAgency,
      WhatWeDo,
      ServicesTwo,
      TestimonialTwo,
      Portfolio,
      Funfact,
      Team,
      Clients,
      Testimonial,
      BlogHome,
      Map,
      Quote,
      ClientsTwo,
    },
    head(){
      return {
        title: "Meipaly | Home V3"
      }
    }
  }
</script>
