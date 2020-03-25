<template>
  <section class="commonSection blogPage">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-sm-8">
          <div class="row">
            <div class="col-lg-6 col-sm-12 col-md-6">
              <div class="latestBlogItem">
                <div class="lbi_thumb">
                  <img src="/images/blog/1.jpg" alt="">
                </div>
                <div class="lbi_details">
                  <a href="#" class="lbid_date">26 NOV</a>
                  <h2><nuxt-link to="/blog-single">basic rules of running web  agency business</nuxt-link></h2>
                  <nuxt-link class="learnM" to="/blog-single">Learn More</nuxt-link>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-12 col-md-6">
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
            <div class="col-lg-6 col-sm-12 col-md-6">
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
            <div class="col-lg-6 col-sm-12 col-md-6">
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
            <div class="col-lg-6 col-sm-12 col-md-6">
              <div class="latestBlogItem">
                <div class="lbi_thumb">
                  <img src="/images/blog/5.jpg" alt="">
                </div>
                <div class="lbi_details">
                  <a href="#" class="lbid_date">9 NOV</a>
                  <h2><nuxt-link to="/blog-single">We build and activate brands insight</nuxt-link></h2>
                  <nuxt-link class="learnM" to="/blog-single">Learn More</nuxt-link>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-12 col-md-6">
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
        <div class="col-lg-4 col-sm-4 sidebar">
          <aside class="widget search-widget">
            <form method="post" action="#" class="searchform">
              <input type="search" placeholder="Search here..." name="s" id="s">
            </form>
          </aside>
          <aside class="widget recent_posts">
            <h3 class="widget_title">Latest Posts</h3>
            <div class="meipaly_post_widget">
              <div class="mpw_item">
                <img src="/images/blog/11.jpg" alt="">
                <a href="#">basic rules of running web agency</a>
              </div>
              <div class="mpw_item">
                <img src="/images/blog/11.jpg" alt="">
                <a href="#">Introducing latest mopaly features</a>
              </div>
              <div class="mpw_item">
                <img src="/images/blog/13.jpg" alt="">
                <a href="#">become the best sale marketer</a>
              </div>
            </div>
          </aside>
          <aside class="widget categories">
            <h3 class="widget_title">Categories</h3>
            <div class="meipaly_categorie_widget">
              <ul>
                <li><a href="#">Business</a></li>
                <li><a href="#">Introductions</a></li>
                <li><a href="#">One Page Template</a></li>
                <li><a href="#">Parallax Effects</a></li>
                <li><a href="#">New Technologies</a></li>
                <li><a href="#">Video Backgrounds</a></li>
              </ul>
            </div>
          </aside>
          <aside class="widget">
            <h3 class="widget_title">Tags:</h3>
            <div class="meipaly_tagcloude_widget">
              <a href="#">Business,</a> <a href="#">Agency,</a> <a href="#">Digital,</a> <a href="#">Technology,</a>
              <a href="#">Parallax,</a> <a href="#">Innovative,</a> <a href="#">Professional,</a>
              <a href="#">Experience,</a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "BlogThree"
    }
</script>

<style scoped>

</style>
