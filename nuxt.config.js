
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/images/favicon.png' },

      { rel: "stylesheet", href: "/css/bootstrap.css" },
      { rel: "stylesheet", href: "/css/owl.carousel.css" },
      { rel: "stylesheet", href: "/css/owl.theme.css" },
      { rel: "stylesheet", href: "/css/font-awesome.min.css" },
      { rel: "stylesheet", href: "/css/animate.css" },
      { rel: "stylesheet", href: "/css/magnific-popup.css" },
      { rel: "stylesheet", href: "/css/slick.css" },
      { rel: "stylesheet", href: "/css/icons.css" },
      { rel: "stylesheet", href: "/css/preset.css" },
      { rel: "stylesheet", href: "/css/theme.css" },
      { rel: "stylesheet", href: "/css/responsive.css" },
      { rel: "stylesheet", href: "/css/presets/color1.css" },
    ],

    script: [
      { src: "/js/jquery.js", type: "text/javascript", body: true },
      { src: "/js/bootstrap.min.js", type: "text/javascript", body: true },
      { src: "/js/modernizr.custom.js", type: "text/javascript", body: true },
      { src: "/js/gmaps.js", type: "text/javascript", body: true },
      { src: "https://maps.google.com/maps/api/js?key=AIzaSyDTPlX-43R1TpcQUyWjFgiSfL_BiGxslZU", type: "text/javascript", body: true },
      { src: "/js/dlmenu.js", type: "text/javascript", body: true },
      { src: "/js/jquery.magnific-popup.js", type: "text/javascript", body: true },
      { src: "/js/mixer.js", type: "text/javascript", body: true },
      { src: "/js/jquery.easing.1.3.js", type: "text/javascript", body: true },
      { src: "/js/owl.carousel.js", type: "text/javascript", body: true },
      { src: "/js/slick.js", type: "text/javascript", body: true },
      { src: "/js/jquery.appear.js", type: "text/javascript", body: true },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#e62b4a',
    height: '4px'
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],

  /*
  ** optimizedImages
  */
  optimizedImages: {
    optimizeImages: true
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
