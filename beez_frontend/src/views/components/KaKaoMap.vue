<template>
  <div>
    <div id="map"></div>
    <div class="button-group">
      <button @click="myLocation" style="mapButton">내 현재위치 찾기</button>
      <button @click="nearStore" style="mapButton">가장가까운 가게 찾기</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "KakaoMap",

  data() {
    return {
      map: null,
      storeList: [],
      markers: [],
      infowindow: null,
    };
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=57ecbdb0e485e592d3cb44820f46951c";
      document.head.appendChild(script);
    }
    /*------------------------------------------------------------*/
  },
  methods: {
    /*맵생성*/
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 5,
      };
      this.map = new kakao.maps.Map(container, options);
    },
    changeSize(size) {
      const container = document.getElementById("map");
      container.style.width = `${size}px`;
      container.style.height = `${size}px`;
      this.map.relayout();
    },
    /*주변 가게찾기*/

    async findStore() {
      var imgSrc =
        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
      var imgSize = new kakao.maps.Size(24, 35);
      var markerImage = new kakao.maps.MarkerImage(imgSrc, imgSize);
      let self = this;

      await axios
        .post("/api/StoreList")
        .then((res) => {
          res.data.forEach(function(pos) {
            var storeName = pos.storeName;
            var latlng = new kakao.maps.LatLng(pos.lat, pos.lon);

            var marker = new kakao.maps.Marker({
              map: self.map,
              position: latlng,
              title: storeName,
              image: markerImage,
            });
            var customOverlay = new kakao.maps.CustomOverlay({
              position: latlng,
              xAnchor: 0.5,
              yAnchor: 1.05,
            });

            var content = document.createElement("div");
            content.className = "overlaybox";
            content.appendChild(document.createTextNode(storeName));

            var buttonContainer = document.createElement("div");
            buttonContainer.className = "overlaycontent";
            // buttonContainer.appendChild(document.createTextNode(storeReview)))db에 저장한 리뷰변수로 이름만 바꾸면됨
            content.appendChild(buttonContainer);

            var closeBtn = document.createElement("button");
            closeBtn.appendChild(document.createTextNode("닫기"));

            buttonContainer.appendChild(closeBtn);

            closeBtn.onclick = function() {
              customOverlay.setMap(null);
            };

            kakao.maps.event.addListener(marker, "click", function() {
              customOverlay.setMap(self.map);
            });
            customOverlay.setContent(content);
          });
        })
        .catch
        //   (error) => {
        //   console.error("에러");
        // }
        ();
    },

    nearStore() {
      console.log("가장가까운가게찾기");
    },

    /*내위치 찾기 */

    displayMarker(locPosition, message) {
      const marker = new kakao.maps.Marker({
        map: this.map,
        position: locPosition,
      });

      const iwContent = message,
        iwRemoveable = true;

      const infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removeable: iwRemoveable,
      });

      infowindow.open(this.map, marker);
      this.map.setCenter(locPosition);
      console.log(locPosition);
    },

    myLocation() {
      let self = this;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          const lat = position.coords.latitude,
            lon = position.coords.longitude;
          const locPosition = new kakao.maps.LatLng(lat, lon),
            message =
              '<div class = "location" style = "padding:5px; "> 현재위치 </div>';

          self.displayMarker(locPosition, message);
          self.findStore();
        });
      } else {
        const locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
          message = "현재 위치를 찾을 수 없습니다.";
        this.displayMarker(locPosition, message);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
  width: 400px;
  height: 400px;
}

.button-group {
  margin: 10px 0px;
}

button {
  margin: 0 3px;
}
</style>
