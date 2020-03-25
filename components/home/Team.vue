<template>
  <section class="commonSection team">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h4 class="sub_title">meet the team</h4>
          <h2 class="sec_title">expert people</h2>
          <p class="sec_desc">
            We are committed to providing our customers with exceptional service while<br> offering our employees the best training.
          </p>
        </div>
      </div>
    </div>
    <div class="team_slider">
      <div class="singleTM">
        <div class="tm_img">
          <img src="/images/team/1.jpg" alt="">
          <div class="tm_overlay">
            <div class="team_social">
              <a href="#"><span>Facebook</span></a>
              <a href="#"><span>Twitter</span></a>
              <a href="#"><span>Youtube</span></a>
            </div>
            <a href="#" class="common_btn"><span>learn more</span></a>
          </div>
        </div>
        <div class="detail_TM">
          <h5>kevin smith</h5>
          <h6>co founder</h6>
        </div>
      </div>
      <div class="singleTM">
        <div class="tm_img">
          <img src="/images/team/2.jpg" alt="">
          <div class="tm_overlay">
            <div class="team_social">
              <a href="#"><span>Facebook</span></a>
              <a href="#"><span>Twitter</span></a>
              <a href="#"><span>Youtube</span></a>
            </div>
            <a href="#" class="common_btn"><span>learn more</span></a>
          </div>
        </div>
        <div class="detail_TM">
          <h5>Jessica Brown</h5>
          <h6>General Manager</h6>
        </div>
      </div>
      <div class="singleTM">
        <div class="tm_img">
          <img src="/images/team/3.jpg" alt="">
          <div class="tm_overlay">
            <div class="team_social">
              <a href="#"><span>Facebook</span></a>
              <a href="#"><span>Twitter</span></a>
              <a href="#"><span>Youtube</span></a>
            </div>
            <a href="#" class="common_btn"><span>learn more</span></a>
          </div>
        </div>
        <div class="detail_TM">
          <h5>Mike Hardson</h5>
          <h6>Senior Designer</h6>
        </div>
      </div>
      <div class="singleTM">
        <div class="tm_img">
          <img src="/images/team/4.jpg" alt="">
          <div class="tm_overlay">
            <div class="team_social">
              <a href="#"><span>Facebook</span></a>
              <a href="#"><span>Twitter</span></a>
              <a href="#"><span>Youtube</span></a>
            </div>
            <a href="#" class="common_btn"><span>learn more</span></a>
          </div>
        </div>
        <div class="detail_TM">
          <h5>Rose Ford</h5>
          <h6>Marketing manager</h6>
        </div>
      </div>
      <div class="singleTM">
        <div class="tm_img">
          <img src="/images/team/5.jpg" alt="">
          <div class="tm_overlay">
            <div class="team_social">
              <a href="#"><span>Facebook</span></a>
              <a href="#"><span>Twitter</span></a>
              <a href="#"><span>Youtube</span></a>
            </div>
            <a href="#" class="common_btn"><span>learn more</span></a>
          </div>
        </div>
        <div class="detail_TM">
          <h5>John Albert</h5>
          <h6>Brand Officer</h6>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "Team",
      mounted() {
        if ($('.team_slider').length > 0) {
          $('.team_slider').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            dots: true,
            arrows: false,
            centerMode: true,
            centerPadding: '350px',
            responsive: [
              {
                breakpoint: 1600,
                settings: {
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 4
                }
              },
              {
                breakpoint: 1199,
                settings: {
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 991,
                settings: {
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 600,
                settings: {
                  centerMode: true,
                  centerPadding: '30px',
                  slidesToShow: 1
                }
              }
            ]
          });
        }
      }
    }
</script>

<style scoped>

</style>
