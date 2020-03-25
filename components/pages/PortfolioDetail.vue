<template>
  <div>
    <section class="commonSection porfolioDetail">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-sm-7 col-md-8">
            <div class="portDetailThumb">
              <img src="/images/portfolio/7.jpg" alt="">
            </div>
            <div class="portDetailThumb">
              <img src="/images/portfolio/8.jpg" alt="">
            </div>
          </div>
          <div class="col-lg-4 col-sm-5 col-md-4">
            <div class="singlePortfoio_content">
              <h3>Design Styles</h3>
              <p>
                Tincidunt elit magnis nulla facilisis sagittis sapien nunc amet ultrices dolores sit ipsum velit purus
                aliquet massa fringilla leo orci. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet,
                massa fringilla leo orci dolors sit amet elit amet.
              </p>
            </div>
            <div class="singlePortfoio_content">
              <h4>Clients:</h4>
              <p>Jessica Brown</p>
            </div>
            <div class="singlePortfoio_content">
              <h4>Category:</h4>
              <p><a href="#">Graphic,</a> <a href="#">Illustrations</a></p>
            </div>
            <div class="singlePortfoio_content">
              <h4>Date:</h4>
              <p>8 Nov, 2018</p>
            </div>
            <div class="singlePortfoio_content">
              <h4>Follow:</h4>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Youtube</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="nextprevPagination">
              <div class="row">
                <div class="col-lg-6 col-sm-6 col-xs-6 text-left">
                  <a class="prevFolio" href="#"><i class="fa fa-angle-left"></i>Previous</a>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-6 text-right">
                  <a class="nextFolio" href="#">Next<i class="fa fa-angle-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="commonSection relatedPortfolio">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h4 class="sub_title">our portfolio</h4>
            <h2 class="sec_title">related work</h2>
            <p class="sec_desc">
              We are committed to providing our customers with exceptional service while<br> offering our employees the best training.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="related_slider">
              <div class="singlefolio">
                <img src="/images/portfolio/1.jpg" alt=""/>
                <div class="folioHover">
                  <a class="cate" href="#">Graphic</a>
                  <h4><a href="/portfolio-detail">Design Styles</a></h4>
                </div>
              </div>
              <div class="singlefolio">
                <img src="/images/portfolio/2.jpg" alt=""/>
                <div class="folioHover">
                  <a class="cate" href="#">Graphic</a>
                  <h4><a href="/portfolio-detail">Design Styles</a></h4>
                </div>
              </div>
              <div class="singlefolio">
                <img src="/images/portfolio/3.jpg" alt=""/>
                <div class="folioHover">
                  <a class="cate" href="#">Graphic</a>
                  <h4><a href="/portfolio-detail">Design Styles</a></h4>
                </div>
              </div>
              <div class="singlefolio">
                <img src="/images/portfolio/4.jpg" alt=""/>
                <div class="folioHover">
                  <a class="cate" href="#">Graphic</a>
                  <h4><a href="/portfolio-detail">Design Styles</a></h4>
                </div>
              </div>
              <div class="singlefolio">
                <img src="/images/portfolio/5.jpg" alt=""/>
                <div class="folioHover">
                  <a class="cate" href="#">Graphic</a>
                  <h4><a href="/portfolio-detail">Design Styles</a></h4>
                </div>
              </div>
              <div class="singlefolio">
                <img src="images/portfolio/6.jpg" alt=""/>
                <div class="folioHover">
                  <a class="cate" href="#">Graphic</a>
                  <h4><a href="/portfolio-detail">Design Styles</a></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
    export default {
      name: "PortfolioDetail",
      mounted() {
        if ($('.related_slider').length > 0) {
          $('.related_slider').owlCarousel({
            items: 3,
            autoplay: true,
            margin: 30,
            nav: false,
            dots: false,
            responsive: {
              0: {
                items: 1
              },
              600: {
                items: 2
              },
              991: {
                items: 3
              }
            }
          });
        }
      }
    }
</script>

<style scoped>

</style>
