<template>
    <div>
      <header class="header_01" :class="[this.$route.name == 'index-2' ? 'black_color' : '']" id="header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-2 col-sm-3 col-md-3">
              <div class="logo">
                <a href="/">
                  <img v-if="this.$route.name == 'index-2'" src="/images/logo2.png" alt="">
                  <img v-else="this.$route.name == 'index'" src="/images/logo.png" alt="">
                </a>
              </div>
            </div>
            <div class="col-lg-8 col-sm-7 col-md-7">
              <nav class="mainmenu text-center">
                <ul>
                  <li class="menu-item-has-children">
                    <a href="/">Home</a>
                    <ul class="sub-menu">
                      <li><nuxt-link to="/">Home 01</nuxt-link></li>
                      <li><nuxt-link to="/index-2">Home 02</nuxt-link></li>
                      <li><nuxt-link to="/index-3">Home 03</nuxt-link></li>
                    </ul>
                  </li>
                  <li><nuxt-link to="/about">About</nuxt-link></li>
                  <li class="menu-item-has-children"><nuxt-link to="/services">Services</nuxt-link>
                    <ul class="sub-menu">
                      <li><nuxt-link to="/service-detail">Service Detail</nuxt-link></li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children"><nuxt-link to="/portfolio">Portfolio</nuxt-link>
                    <ul class="sub-menu">
                      <li><nuxt-link to="/portfolio">Portfolio v1</nuxt-link></li>
                      <li><nuxt-link to="/portfolio-2">Portfolio v2</nuxt-link></li>
                      <li><nuxt-link to="/portfolio-detail">Portfolio Detail</nuxt-link></li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children"><nuxt-link to="/blog">Blog</nuxt-link>
                    <ul class="sub-menu">
                      <li><nuxt-link to="/blog">Blog v1</nuxt-link></li>
                      <li><nuxt-link to="/blog-2">Blog v2</nuxt-link></li>
                      <li><nuxt-link to="/blog-3">Blog v3</nuxt-link></li>
                      <li><nuxt-link to="/blog-single">Blog Single</nuxt-link></li>
                    </ul>
                  </li>
                  <li><nuxt-link to="/contact">Contact</nuxt-link></li>
                </ul>
              </nav>
            </div>
            <div class="col-lg-2 col-sm-2 col-md-2">
              <div class="navigator text-right">
                <a class="search searchToggler" href="javascript:void(0);"><i class="mei-magnifying-glass"></i></a>
                <a href="javascript:void(0);" class="menu mobilemenu hidden-sm hidden-md hidden-lg hidden-xs"><i class="mei-menu"></i></a>
                <a id="open-overlay-nav" class="menu hamburger" href="javascript:void(0);"><i class="mei-menu"></i></a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="searchFixed popupBG">
        <div class="container-fluid">
          <a href="" id="sfCloser" class="sfCloser"></a>
          <div class="searchForms">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 col-lg-offset-2">
                  <form method="post" action="#">
                    <input type="text" name="s" class="searchField" placeholder="Search here..."/>
                    <button type="submit"><i class="fa fa-search"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="popup popup__menu">
        <a href="" id="close-popup" class="close-popup"></a>
        <div class="container mobileContainer">
          <div class="row">
            <div class="col-lg-12 text-left">
              <div class="logo2">
                <a href="/">
                  <img v-if="this.$route.name == 'index-2'" src="/images/logo2.png" alt="">
                  <img v-else="this.$route.name == 'index'" src="/images/logo.png" alt="">
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="popup-inner">
                <div class="dl-menu__wrap dl-menuwrapper">
                  <ul class="dl-menu dl-menuopen">
                    <li class="menu-item-has-children">
                      <a href="javascript:void(0);">home</a>
                      <ul class="dl-submenu">
                        <li><nuxt-link to="/">Home 01</nuxt-link></li>
                        <li><nuxt-link to="/index-2">Home 02</nuxt-link></li>
                        <li><nuxt-link to="/index-3">Home 03</nuxt-link></li>
                      </ul>
                    </li>
                    <li><nuxt-link to="/about">About</nuxt-link></li>
                    <li class="menu-item-has-children"><a href="javascript:void(0);">services</a>
                      <ul class="dl-submenu">
                        <li><nuxt-link to="/services">Service</nuxt-link></li>
                        <li><nuxt-link to="/service-detail">Service Detail</nuxt-link></li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="javascript:void(0);">Portfolio</a>
                      <ul class="dl-submenu">
                        <li><nuxt-link to="/portfolio">Portfolio v1</nuxt-link></li>
                        <li><nuxt-link to="/portfolio-2">Portfolio v2</nuxt-link></li>
                        <li><nuxt-link to="/portfolio-detail">Portfolio Detail</nuxt-link></li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="javascript:void(0);">Blog</a>
                      <ul class="dl-submenu">
                        <li><nuxt-link to="/blog">Blog v1</nuxt-link></li>
                        <li><nuxt-link to="/blog-2">Blog v2</nuxt-link></li>
                        <li><nuxt-link to="/blog-3">Blog v3</nuxt-link></li>
                        <li><nuxt-link to="/blog-single">Blog Single</nuxt-link></li>
                      </ul>
                    </li>
                    <li><nuxt-link to="/contact">Contact</nuxt-link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-sm-6 col-xs-12 text-left">
              <ul class="footer__contacts text-left">
                <li>Phone: 666 888 000</li>
                <li>Email: needhelp@meipaly.com</li>
                <li>Address: 66 Broklyn Street, New York United States of America</li>
              </ul>
            </div>
            <div class="col-lg-6 col-sm-6 col-xs-12 col-xs-12">
              <div class="popUp_social text-right">
                <ul>
                  <li><a href="#"><i class="fa fa-twitter"></i>Twitter</a></li>
                  <li><a href="#"><i class="fa fa-facebook-square"></i>Facebook</a></li>
                  <li><a href="#"><i class="fa fa-youtube-play"></i>Youtube</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Header",
      mounted() {

        // Serach popup
        if ($(".searchToggler").length > 0)
        {
          var todg = true;
          $(".searchToggler").on("click", function (e) {
            e.preventDefault();
            if (todg)
            {
              $(".searchFixed").fadeIn("slow");
              todg = false;
            }
            else
            {
              $(".searchFixed").fadeOut("slow");
              todg = true;
            }
          });

          $(document).mouseup(function (e) {
            var container = $(".searchForms");

            if (!container.is(e.target) && container.has(e.target).length === 0)
            {
              $(".searchFixed").fadeOut("slow");
              todg = true;
            }
          });
          $("#sfCloser").on("click", function (e) {
            e.preventDefault();
            $(".searchFixed").fadeOut("slow");
            todg = true;
          });
        }
        $(function () {
          $('.singleShopWrap').themeWar();
        });


        //Menu PopUp
        $(document).ready(function () {
          $("#close-popup").on('click', function (e) {
            e.preventDefault();
            $("body").removeClass("menu__open show-overlay-nav");
          });
          $(".hamburger").on("click", function () {
            $(this).toggleClass("is_active"), $("body").toggleClass("menu__open");
          }), $(document).keyup(function (e) {
            27 === e.keyCode && $(".menu__open .hamburger").click();
          }), $("#open-overlay-nav").on("click", function () {
            $("body").toggleClass("show-overlay-nav");
          }), $(".dl-menu__wrap").dlmenu({
            animationClasses: {
              classin: "dl-animate-in-3",
              classout: "dl-animate-out-3"
            }
          });
        });

        //Fixed Header
        $(window).on('scroll', function () {
          if ($(window).scrollTop() > 40)
          {
            $("#header").addClass('fixedHeader animated flipInX');
          } else
          {
            $("#header").removeClass('fixedHeader animated flipInX');
          }
          scroll_topmenu();
        });


        //Mobile Menu
        if ($('.mobilemenu').length > 0) {
          $('.mobilemenu').on('click', function () {
            var w = $(window).width();
            $(this).toggleClass('active');
            $('.mainmenu > ul').slideToggle('slow');
          });
          if ($(window).width() < 768)
          {
            $('.mainmenu > ul li.menu-item-has-children > a').on('click', function (e) {
              e.preventDefault();
              $(this).parent().toggleClass('active');
              $(this).parent().children('.sub-menu').slideToggle('slow');
            });
          }
        }

        //Active Menu Scroll
        $('.mainmenu ul li.scroll > a').on('click', function () {
          $('html, body').animate({scrollTop: $(this.hash).offset().top - 68}, 1000, 'easeOutCubic');
          return false;
        });

        $('.dl-menu__wrap ul li.scroll > a').on('click', function () {

          if (!$(this).parent().hasClass('menu-item-has-children'))
          {
            $('html, body').animate({scrollTop: $(this.hash).offset().top - 68}, 1000, 'easeOutCubic', function () {
              $("body").removeClass("menu__open show-overlay-nav");
            });
            return false;
          } else {
            $('html, body').animate({scrollTop: $(this.hash).offset().top - 68}, 1000, 'easeOutCubic');
          }
        });
        function scroll_topmenu() {

          var contentTop = [];
          var contentBottom = [];
          var winTop = $(window).scrollTop();
          var rangeTop = 200;
          var rangeBottom = 500;

          $('.mainmenu').find('.scroll > a').each(function () {
            var atr = $(this).attr('href');
            if ($(atr).length > 0)
            {
              contentTop.push($($(this).attr('href')).offset().top);
              contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
            }
          });

          $.each(contentTop, function (i) {
            if (winTop > contentTop[i] - rangeTop) {
              $('.mainmenu li.scroll').removeClass('active').eq(i).addClass('active');
            }
          });
        }
      }
    }
</script>

<style scoped>

</style>
