<template>
  <section class="commonSection what_wedo">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h4 class="sub_title">how do we works</h4>
          <h2 class="sec_title">Digital Experience</h2>
          <p class="sec_desc">
            We are committed to providing our customers with exceptional service while<br> offering our employees the best training.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 col-sm-12">
          <div class="videoWrap">
            <img src="/images/home_1/3.jpg" alt="">
            <div class="play_video">
              <a class="video_popup" href="https://www.youtube.com/watch?v=A7ZkZazfvao"><i class="fa fa-play"></i></a>
              <h2>Watch Video</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-5 col-md-4">
          <h4 class="sub_title">don’t miss out our latest updates</h4>
          <h2 class="sec_title">Subscribe us</h2>
        </div>
        <div class="col-lg-8 col-sm-7 col-md-8">
          <form action="" method="post" class="subscribefrom">
            <input type="email" placeholder="Enter your email" name="email">
            <button class="common_btn red_bg" type="submit" name="submit"><span>Subscribe now</span></button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "WhatWeDo",
      mounted() {
        $('.video_popup').magnificPopup({
          type: 'iframe'
        });
      }
    }
</script>

<style scoped>

</style>
