<template>
  <header>
    <div class="header">
      <b-navbar toggleable="lg" type="light">
        <!-- <b-navbar toggleable="lg" type="light" class="fixed-top"> -->
        <b-navbar-brand href="/StoreMain">
          <img src="../assets/header/logo.png" alt="logo" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse">
          <a href="/StoreQR" id="storeQR">
            <FontAwesomeIcon :icon="faQrcode" />
          </a>
          <a id="fabars">
            <FontAwesomeIcon :icon="faBars" />
          </a>
        </b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="/StoreMain" class="ml-auto">HOME</b-nav-item>
            <b-nav-item href="/StoreQR" class="ml-auto color"
              >QR코드</b-nav-item
            >
            <b-nav-item href="/" class="ml-auto color" @click="reset"
              >로그아웃</b-nav-item
            >
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </header>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
const storage = window.sessionStorage;

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      itemcount: 0,
      faBars,
      faQrcode,
    };
  },
  methods: {
    reset: () => {
      localStorage.clear();
      storage.clear();
    },
  },
  beforeCreate() {
    //아이디가 user가 아닐경우, address가 없을 경우, address가 20바이트가 아닐 경우
    //ID가 STORE일 경우, STORE페이지로 이동
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const address = localStorage.getItem("address");

    if (token && address) {
      if (role == "STORE") return true;
      else if (role == "USER") this.$router.push("/Main");
      else {
        localStorage.clear();
        this.$router.push("/");
      }
    } else {
      localStorage.clear();
      this.$router.push("/");
    }
  },
};
</script>

<style>
@font-face {
  font-family: "BCcardL";
  src: url("../fonts/BCcardL.ttf") format("woff");
  font-weight: normal;
  font-style: normal;
}

@media (max-width: 840px) {
  .navbar-brand {
    width: 75%;
  }
}

@media (min-width: 370) {
  /* header {
    padding-bottom: 50px;
  } */
}

@media (max-width: 840px) {
  .nav-link {
    font-size: 17px;
  }
  .navbar a img {
    max-width: 46%;
  }
}

/*------------------------------ navigation---------------------------------*/
#storeQR {
  color: #1158aece;
}

#fabars {
  color: #1158aece;
  margin-left: 25px;
  /* 7fb6bb */
}

.navbar {
  background-color: #ffffff;
}

/* .navbar-brand img {
  margin-left: 14px;
} */

.navbar-brand img {
  max-width: 33%;
  height: auto;
}

.header {
  font-family: BCcardL;
  /* margin-bottom: 5.5rem; */
  /* padding-bottom: 50px; */
}
/* 화면 조정 필요(full화면과 핸드폰 화면 차이 있음.)*/

/* .navbar-brand {
  padding-left: 20px;
} */

.nav-link {
  border-bottom: #1158aece solid 3px;
  color: #1158aece;
}

/* .navbar-collapse {
  padding-left: 9px;
  padding-bottom: 0.5rem;
  padding-right: 13px;
} */

.navbar-nav {
  margin: 0 25px;
  font-size: 25px;
  line-height: 20px;
  font-weight: 600;
  text-transform: uppercase;
  /* padding: 0 0 3px 0; */
  position: relative;
}

li {
  margin: 1px;
  padding: 4px;
  list-style: none;
}
/*---------------------------------------nav 끝--------------------------------------- */
</style>
