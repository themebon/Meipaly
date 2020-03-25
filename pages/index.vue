<template>
  <div>
    <SliderOne />
    <Services />
    <AboutAgency />
    <WhatWeDo />
    <Portfolio />
    <Funfact />
    <Team />
    <Clients />
    <Testimonial />
    <BlogHome />
    <CallToAction />
  </div>
</template>

<script>
  import SliderOne from "~/components/home/SliderOne";
  import Services from "~/components/home/Services";
  import AboutAgency from "~/components/home/AboutAgency";
  import WhatWeDo from "~/components/home/WhatWeDo";
  import Portfolio from "~/components/home/Portfolio";
  import Funfact from "~/components/home/Funfact";
  import Team from "~/components/home/Team";
  import Clients from "~/components/home/Clients";
  import Testimonial from "~/components/home/Testimonial";
  import BlogHome from "~/components/home/BlogHome";
  import CallToAction from "~/components/home/CallToAction";
  export default {
    components: {
      SliderOne,
      Services,
      AboutAgency,
      WhatWeDo,
      Portfolio,
      Funfact,
      Team,
      Clients,
      Testimonial,
      BlogHome,
      CallToAction,


    }
  }
</script>
