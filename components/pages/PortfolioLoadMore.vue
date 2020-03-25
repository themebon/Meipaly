<template>
  <section class="commonSection porfolioPage">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="folio_mixing">
            <ul>
              <li class="filter active" data-filter="all">All</li>
              <li class="filter" data-filter="graphic">graphic</li>
              <li class="filter" data-filter="branding">branding</li>
              <li class="filter" data-filter="marketing">marketing</li>
              <li class="filter" data-filter="logos">logo</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row" id="Grid">
        <div class="custom">
          <div class="col-lg-4 col-sm-6 col-md-4 mix logos branding">
            <div class="singlefolio">
              <img src="/images/portfolio/1.jpg" alt=""/>
              <div class="folioHover">
                <a class="cate" href="#">Graphic</a>
                <h4><nuxt-link to="/portfolio-detail">Design Styles</nuxt-link></h4>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-md-4 mix marketing graphic">
            <div class="singlefolio">
              <img src="/images/portfolio/2.jpg" alt=""/>
              <div class="folioHover">
                <a class="cate" href="#">Graphic</a>
                <h4><nuxt-link to="/portfolio-detail">Design Styles</nuxt-link></h4>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-md-4 mix marketing logos">
            <div class="singlefolio">
              <img src="/images/portfolio/3.jpg" alt=""/>
              <div class="folioHover">
                <a class="cate" href="#">Graphic</a>
                <h4><nuxt-link to="/portfolio-detail">Design Styles</nuxt-link></h4>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-md-4 mix branding graphic">
            <div class="singlefolio">
              <img src="/images/portfolio/4.jpg" alt=""/>
              <div class="folioHover">
                <a class="cate" href="#">Graphic</a>
                <h4><nuxt-link to="/portfolio-detail">Design Styles</nuxt-link></h4>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-md-4 mix branding marketing">
            <div class="singlefolio">
              <img src="/images/portfolio/5.jpg" alt=""/>
              <div class="folioHover">
                <a class="cate" href="#">Graphic</a>
                <h4><nuxt-link to="/portfolio-detail">Design Styles</nuxt-link></h4>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-md-4 mix logos graphic">
            <div class="singlefolio">
              <img src="/images/portfolio/6.jpg" alt=""/>
              <div class="folioHover">
                <a class="cate" href="#">Graphic</a>
                <h4><nuxt-link to="/portfolio-detail">Design Styles</nuxt-link></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt_30">
        <div class="col-lg-12 text-center">
          <a class="common_btn red_bg" href="#"><span>Load More</span></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "PortfolioLoadMore",
      mounted() {
        $('#Grid').themeWar();
        $('.Grid').themeWar();
      }
    }
</script>

<style scoped>

</style>
