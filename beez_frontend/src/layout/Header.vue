<template>
  <header>
    <div class="header">
      <b-navbar toggleable="lg" type="light">
        <!-- <b-navbar toggleable="lg" type="light" class="fixed-top"> -->
        <b-navbar-brand href="/Main">
          <img src="../assets/header/logo.png" alt="logo" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"
          ><FontAwesomeIcon :icon="faBars" style="color:#fbca47"
        /></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="/Main" class="ml-auto">HOME</b-nav-item>
            <b-nav-item href="/" class="ml-auto" @click="reset"
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
//const storage = window.sessionStorage;

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
      localStorage.clear();
    },
  },

  beforeCreate() {
    //아이디가 user가 아닐경우, address가 없을 경우, address가 20바이트가 아닐 경우
    //ID가 business일 경우, business페이지로 이동
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (token && token.length === 155) {
      if (role == "USER") return true;
      else if (role == "STORE") this.$router.push("/StoreMain");
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
  /* margin: 1px; */
  /* padding: 4px; */
  list-style: none;
}
/*---------------------------------------nav 끝--------------------------------------- */
</style>
