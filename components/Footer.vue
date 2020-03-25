<template>
  <div>
    <footer class="footer_1">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-sm-6 col-md-5">
          <aside class="widget aboutwidget">
            <a href="#"><img src="/images/foo_logo.png" alt=""></a>
            <p>
              Welcome to our web design agency. Lorem ipsum is simply free text dolor sit amet consectetur adipisicing elit.
              Tempore corrupti temporibus fuga earum asperiores, alias excepturi sit mpedit fugit laudantium.
            </p>
          </aside>
        </div>
        <div class="col-lg-4 col-sm-4 col-md-4">
          <aside class="widget contact_widgets">
            <h3 class="widget_title">contact</h3>
            <p>
              66 Broklyn Street, New York<br>
              United States of America
            </p>
            <p>P: 666 888 000</p>
            <p>E: <a href="#">needhelp@meipaly.com</a></p>
          </aside>
        </div>
        <div class="col-lg-3 col-sm-2 col-md-3">
          <aside class="widget social_widget">
            <h3 class="widget_title">social</h3>
            <ul>
              <li><a href="#"><i class="fa fa-twitter"></i>Twitter</a></li>
              <li><a href="#"><i class="fa fa-facebook-square"></i>Facebook</a></li>
              <li><a href="#"><i class="fa fa-youtube-play"></i>Youtube</a></li>
            </ul>
          </aside>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 col-sm-12 text-center">
          <div class="copyright">
            © copyright 2020 by <a href="#">Layerdrops.com</a>
          </div>
        </div>
      </div>
    </div>
  </footer>

    <!-- Bact To To -->
    <a id="backToTop" href="#" class=""><i class="fa fa-angle-double-up"></i></a>
    <!-- Bact To To -->


  </div>
</template>

<script>
    export default {
      name: "Footer",
      mounted() {

        var back = $("#backToTop"),
          body = $("body, html");
        $(window).on('scroll', function () {
          var h = $(window).height() / 2;
          if ($(window).scrollTop() > h)
          {
            back.addClass('showit');
          } else
          {
            back.removeClass('showit');
          }

        });
        body.on("click", "#backToTop", function (e) {
          e.preventDefault();
          body.animate({scrollTop: 0}, 800);
        });

      }
    }
</script>

<style scoped>

</style>
