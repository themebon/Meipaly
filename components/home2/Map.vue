<template>
  <section class="gmapsection">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 noPadding">
          <div class="gmap" id="gmap"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "Map",
      mounted() {
        //Google map
        if ($('#gmap').length > 0) {
          var contact_map
          contact_map = new GMaps({
            el: '#gmap',
            lat: 40.728157,
            lng: -74.077644,
            scrollwheel: false,
            zoom: 10,
            zoomControl: false,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false
          });
          contact_map.addMarker({
            lat: 40.728157,
            lng: -74.077644,
            icon: "images/marker.png",
            animation: google.maps.Animation.DROP
          });

          var styles = [
            {
              "featureType" : "road",
              "stylers" : [
                {"color" : "#ffffff"}
              ]
            }, {
              "featureType" : "water",
              "stylers" : [
                {"color" : "#ededed"}
              ]
            }, {
              "featureType" : "landscape",
              "stylers" : [
                {"color" : "#f7f7f7"}
              ]
            }, {
              "elementType" : "labels.text.fill",
              "stylers" : [
                {"color" : "transparent"}
              ]
            }, {
              "featureType" : "poi",
              "stylers" : [
                {"color" : "#e5e5e5"}
              ]
            }, {
              "elementType" : "labels.text",
              "stylers" : [
                {"saturation" : 1},
                {"weight" : 0.1},
                {"color" : "#818181"}
              ]
            }
          ];
          contact_map.addStyle({
            styledMapName : "Styled Map",
            styles : styles,
            mapTypeId : "map_style"
          });
          contact_map.setStyle("map_style");
        }
      }
    }
</script>

<style scoped>

</style>
