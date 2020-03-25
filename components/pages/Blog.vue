<template>
  <section class="commonSection blogPage">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="latestBlogItem">
            <div class="lbi_thumb">
              <img src="/images/blog/1.jpg" alt="">
            </div>
            <div class="lbi_details">
              <a href="#" class="lbid_date">26 NOV</a>
              <h2><nuxt-link to="/blog-single">basic rules of running web  agency business</nuxt-link></h2>
              <a class="learnM" href="/blog-single">Learn More</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="latestBlogItem">
            <div class="lbi_thumb">
              <img src="/images/blog/2.jpg" alt="">
            </div>
            <div class="lbi_details">
              <a href="#" class="lbid_date">20 NOV</a>
              <h2><nuxt-link to="/blog-single">Become the best sale marketer</nuxt-link></h2>
              <nuxt-link class="learnM" to="/blog-single">Learn More</nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="latestBlogItem">
            <div class="lbi_thumb">
              <img src="/images/blog/3.jpg" alt="">
            </div>
            <div class="lbi_details">
              <a href="#" class="lbid_date">16 NOV</a>
              <h2><nuxt-link to="/blog-single">Introducing latest mopaly features</nuxt-link></h2>
              <nuxt-link class="learnM" to="/blog-single">Learn More</nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="latestBlogItem">
            <div class="lbi_thumb">
              <img src="/images/blog/4.jpg" alt="">
            </div>
            <div class="lbi_details">
              <a href="#" class="lbid_date">10 NOV</a>
              <h2><nuxt-link to="/blog-single">a deep understanding of our audience</nuxt-link></h2>
              <nuxt-link class="learnM" to="/blog-single">Learn More</nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="latestBlogItem">
            <div class="lbi_thumb">
              <img src="/images/blog/5.jpg" alt="">
            </div>
            <div class="lbi_details">
              <nuxt-link to="#" class="lbid_date">9 NOV</nuxt-link>
              <h2><nuxt-link to="/blog-single">We build and activate brands insight</nuxt-link></h2>
              <nuxt-link class="learnM" to="/blog-single">Learn More</nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="latestBlogItem">
            <div class="lbi_thumb">
              <img src="/images/blog/6.jpg" alt="">
            </div>
            <div class="lbi_details">
              <a href="#" class="lbid_date">7 NOV</a>
              <h2><nuxt-link to="/blog-single">experiences that connect with people</nuxt-link></h2>
              <nuxt-link class="learnM" to="/blog-single">Learn More</nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="meipaly_paginations text-center">
            <a class="prev" href="#"><i class="fa fa-angle-left"></i></a>
            <span class="current">01</span>
            <a href="#">02</a>
            <a href="#">5</a>
            <a class="next" href="#"><i class="fa fa-angle-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "Blog"
    }
</script>

<style scoped>

</style>
