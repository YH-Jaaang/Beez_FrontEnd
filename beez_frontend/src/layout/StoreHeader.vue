<template>
  <header>
    <div class="header">
      <b-navbar toggleable="lg" type="light">
        <!-- <b-navbar toggleable="lg" type="light" class="fixed-top"> -->
        <b-navbar-brand href="/StoreMain">
          <img src="../assets/header/logo.png" alt="logo" />
        </b-navbar-brand>
        <b-navbar-button href="/StoreQR">
          <FontAwesomeIcon
            :icon="faQrcode"
            id="stroeQR"
            style="color:#100055"
          />
        </b-navbar-button>
        <b-navbar-toggle target="nav-collapse"
          ><FontAwesomeIcon :icon="faBars" id="fabars"
        /></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="/StoreMain" class="ml-auto">HOME</b-nav-item>
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
import VueCookies from "vue-cookies";

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      itemcount: 0,
      faBars,
    };
  },
  methods: {
    reset: () => {
      VueCookies.remove("Id");
      VueCookies.remove("Address");
    },
  },
  beforeCreate() {
    if (VueCookies.get("Id") == "user") this.$router.push("/Main");
    if (VueCookies.get("Id") != "business" || !VueCookies.get("Address")) {
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
<<<<<<< Updated upstream
<<<<<<< HEAD
<<<<<<< Updated upstream

=======
=======
>>>>>>> Stashed changes
#fabars {
  color: #1158aece;
  /* 7fb6bb */
}
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
#fabars {
  color: #fbca47;
  /* 7fb6bb */
}
>>>>>>> main
=======
>>>>>>> Stashed changes
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

.navbar-collapse {
  /* padding-left: 9px; */
  padding-bottom: 0.5rem;
  /* padding-right: 13px; */
}

.navbar-nav {
  margin: 0 25px;
  font-size: 25px;
  line-height: 20px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 0 3px 0;
  position: relative;
}

li {
  margin: 1px;
  padding: 4px;
  list-style: none;
}
/*---------------------------------------nav 끝--------------------------------------- */
</style>
