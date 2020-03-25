<template>
  <section class="service_section commonSection">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h4 class="sub_title red_color">Services we are offering</h4>
          <h2 class="sec_title white">We design digital products that<br> help grow businesses.</h2>
          <p class="sec_desc color_aaa">
            We are committed to providing our customers with exceptional service<br> while offering our employees the best training.
          </p>
        </div>
      </div>
      <div class="row custom_column">
        <div class="col-lg-3 col-sm-4 col-md-3">
          <nuxt-link to="/service-detail" class="icon_box_1 text-center">
            <div class="flipper">
              <div class="front">
                <i class="mei-web-design"></i>
                <h3>Website Development</h3>
              </div>
              <div class="back">
                <i class="mei-web-design"></i>
                <h3>Website Development</h3>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="col-lg-3 col-sm-4 col-md-3">
          <nuxt-link to="/service-detail" class="icon_box_1 text-center">
            <div class="flipper">
              <div class="front">
                <i class="mei-computer-graphic"></i>
                <h3>Graphic Designing</h3>
              </div>
              <div class="back">
                <i class="mei-computer-graphic"></i>
                <h3>Graphic Designing</h3>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="col-lg-3 col-sm-4 col-md-3">
          <nuxt-link to="/service-detail" class="icon_box_1 text-center">
            <div class="flipper">
              <div class="front">
                <i class="mei-development-1"></i>
                <h3>Digital Marketing</h3>
              </div>
              <div class="back">
                <i class="mei-development-1"></i>
                <h3>Digital Marketing</h3>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="col-lg-3 col-sm-4 col-md-3">
          <nuxt-link to="/service-detail" class="icon_box_1 text-center">
            <div class="flipper">
              <div class="front">
                <i class="mei-development"></i>
                <h3>SEo & Content Writing</h3>
              </div>
              <div class="back">
                <i class="mei-development"></i>
                <h3>SEo & Content Writing</h3>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="col-lg-3 col-sm-4 col-md-3">
          <nuxt-link to="service_detail.html" class="icon_box_1 text-center">
            <div class="flipper">
              <div class="front">
                <i class="mei-app-development"></i>
                <h3>App Development</h3>
              </div>
              <div class="back">
                <i class="mei-app-development"></i>
                <h3>App Development</h3>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "Services"
    }
</script>

<style scoped>

</style>
