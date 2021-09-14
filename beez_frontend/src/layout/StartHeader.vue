<template>
  <header>
    <div class="header">
      <b-navbar toggleable="lg" type="light">
        <!-- <b-navbar toggleable="lg" type="light" class="fixed-top"> -->
        <b-navbar-brand href="#">
          <img src="../assets/header/logo.png" alt="logo" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"
          ><FontAwesomeIcon :icon="faBars" style="color:#fbca47"
        /></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="/" class="ml-auto">HOME</b-nav-item>
            <b-nav-item href="/" class="ml-auto">로그인</b-nav-item>
            <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <!-- <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right> -->
          <!-- Using 'button-content' slot -->
          <!-- <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav> -->
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
  created() {
    if (VueCookies.get("Address")) {
      const id = VueCookies.get("Id");
      if (id == "user") {
        this.$router.push("/Main");
      } else if (id == "business") {
        this.$router.push("/StoreMain");
      } else {
        VueCookies.remove("Id");
        VueCookies.remove("Address");
      }
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
  border-bottom: #fbca47 solid 3px;
  color: #fbca47;
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
