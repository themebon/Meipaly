<template>
  <section class="commonSection client">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h4 class="sub_title">our clients</h4>
          <h2 class="sec_title">they trust us</h2>
          <p class="sec_desc">
            We are committed to providing our customers with exceptional service while<br> offering our employees the best training.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="client_slider">
            <div class="singleClient">
              <a href="#">
                <img src="/images/client/1.png" alt=""/>
              </a>
            </div>
            <div class="singleClient">
              <a href="#">
                <img src="/images/client/2.png" alt=""/>
              </a>
            </div>
            <div class="singleClient">
              <a href="#">
                <img src="/images/client/3.png" alt=""/>
              </a>
            </div>
            <div class="singleClient">
              <a href="#">
                <img src="/images/client/4.png" alt=""/>
              </a>
            </div>
            <div class="singleClient">
              <a href="#">
                <img src="/images/client/5.png" alt=""/>
              </a>
            </div>
            <div class="singleClient">
              <a href="#">
                <img src="/images/client/1.png" alt=""/>
              </a>
            </div>
            <div class="singleClient">
              <a href="#">
                <img src="/images/client/2.png" alt=""/>
              </a>
            </div>
            <div class="singleClient">
              <a href="#">
                <img src="/images/client/3.png" alt=""/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "Clients",
      mounted() {
        if ($('.client_slider').length > 0) {
          $('.client_slider').owlCarousel({
            items: 4,
            margin: 30,
            autoplay: true,
            nav: false,
            responsive: {
              0: {
                items: 1
              },
              560: {
                items: 2
              },
              768: {
                items: 3
              },
              992: {
                items: 4
              }
            }
          });
        }
      }

    }
</script>

<style scoped>

</style>
