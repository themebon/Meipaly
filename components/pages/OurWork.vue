<template>
  <section class="commonSection our_work">
    <div class="videoWrap_2">
      <img src="/images/about/3.jpg" alt="">
      <div class="play_video">
        <a class="video_popup" href="https://www.youtube.com/watch?v=A7ZkZazfvao"><i class="fa fa-play"></i></a>
        <h2>Watch Video</h2>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-sm-6">
        </div>
        <div class="col-lg-6 col-sm-6">
          <div class="ab_detail_wrap">
            <h4 class="sub_title">the only design you need</h4>
            <h2 class="sec_title">Make amazing websites without touching cod</h2>
            <p class="sec_desc">
              Tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien nunc amet ultrices,
              dolores sit ipsum velit purus aliquet, massa fringilla leo orci. Lorem ipsum
              dolors sit amet elit magnis amet ultrices purus aliquet.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "OurWork",
      mounted() {
        $('.video_popup').magnificPopup({
          type: 'iframe'
        });
      }
    }
</script>

<style scoped>

</style>
