<template>
  <section class="commonSection testimonial_2">
    <div class="container">
      <div class="row">
        <div id="tabs" class="testimoniTab">
          <div class="col-lg-5 col-sm-5">
            <h4 class="sub_title color_aaa">our testimonials</h4>
            <h2 class="sec_title white">happy customers</h2>
            <ul class="slider_testimoial">
              <li class="active control_item">
                <a href="#tab_1" data-toggle="tab">
                  <span><img src="/images/home_1/t1.jpg" alt=""/></span>
                  <div class="author_detail">
                    <h5>Shirley Smith</h5>
                    <h6>Director</h6>
                  </div>
                </a>
              </li>
              <li class="control_item">
                <a href="#tab_2" data-toggle="tab">
                  <span><img src="/images/home_1/t2.jpg" alt=""/></span>
                  <div class="author_detail">
                    <h5>Mike hardson</h5>
                    <h6>co founder</h6>
                  </div>
                </a>
              </li>
              <li class="control_item">
                <a href="#tab_3" data-toggle="tab">
                  <span><img src="/images/home_1/t3.jpg" alt=""/></span>
                  <div class="author_detail">
                    <h5>Mike Smith</h5>
                    <h6>manager</h6>
                  </div>
                </a>
              </li>
              <li class="control_item">
                <a href="#tab_4" data-toggle="tab">
                  <span><img src="/images/home_1/t1.jpg" alt=""/></span>
                  <div class="author_detail">
                    <h5>Shirley Smith</h5>
                    <h6>Director</h6>
                  </div>
                </a>
              </li>
              <li class="control_item">
                <a href="#tab_5" data-toggle="tab">
                  <span><img src="/images/home_1/t2.jpg" alt=""/></span>
                  <div class="author_detail">
                    <h5>Mike hardson</h5>
                    <h6>manager</h6>
                  </div>
                </a>
              </li>
              <li class="control_item">
                <a href="#tab_6" data-toggle="tab">
                  <span><img src="/images/home_1/t3.jpg" alt=""/></span>
                  <div class="author_detail">
                    <h5>Mike Smith</h5>
                    <h6>manager</h6>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-7 col-sm-7">
            <div class="dots_owl"></div>
            <div class="tab-content clearfix">
              <div class="tab-pane fade in active testi_con" id="tab_1">
                <p>
                  “This is due to their excellent service, competitive pricing and customer support. It’s throughly
                  refresing to get such a personal touch. There are many variations of passages of available,
                  but the majority have suffered alteration in some form by injected hum
                </p>
                <span>25 nov, 2018</span>
              </div>
              <div class="tab-pane fade testi_con" id="tab_2">
                <p>
                  “It’s throughly refresing to get such a personal touch. There are many variations of passages of available,
                  This is due to their excellent service, competitive pricing and customer support.
                  but the majority have suffered alteration in some form by injected hum
                </p>
                <span>26 nov, 2018</span>
              </div>
              <div class="tab-pane fade testi_con" id="tab_3">
                <p>
                  “This is due to their excellent service, competitive pricing and customer support. It’s throughly
                  refresing to get such a personal touch. There are many variations of passages of available,
                  but the majority have suffered alteration in some form by injected hum
                </p>
                <span>27 nov, 2018</span>
              </div>
              <div class="tab-pane fade testi_con" id="tab_4">
                <p>
                  “This is due to their excellent service, competitive pricing and customer support. It’s throughly
                  refresing to get such a personal touch. There are many variations of passages of available,
                  but the majority have suffered alteration in some form by injected hum
                </p>
                <span>28 nov, 2018</span>
              </div>
              <div class="tab-pane fade testi_con" id="tab_5">
                <p>
                  “This is due to their excellent service, competitive pricing and customer support. It’s throughly
                  refresing to get such a personal touch. There are many variations of passages of available,
                  but the majority have suffered alteration in some form by injected hum
                </p>
                <span>29 nov, 2018</span>
              </div>
              <div class="tab-pane fade testi_con" id="tab_6">
                <p>
                  “This is due to their excellent service, competitive pricing and customer support. It’s throughly
                  refresing to get such a personal touch. There are many variations of passages of available,
                  but the majority have suffered alteration in some form by injected hum
                </p>
                <span>30 nov, 2018</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "TestimonialTwo",
      mounted() {
        if ($('.slider_testimoial').length > 0) {
          $('.slider_testimoial').owlCarousel({
            items: 3,
            autoplay: false,
            nav: false,
            dots: true,
            dotsContainer: '.dots_owl'
          });
        }
        if($('.slider_testimoial').length > 0){
          $('.slider_testimoial li.control_item').on('click', function(){
            var $this = $(this);
            var id = $('a', $this).attr('href');
            $('a[href="' + id + '"]', $this).tab('show');
            $('.slider_testimoial li.control_item').removeClass('active');
            $this.addClass('active');
          });
        }
      }
    }
</script>

<style scoped>

</style>
