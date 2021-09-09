<template>
  <header>
    <div class="header_body">
      <b-navbar toggleable="lg" type="light" class="fixed-top">
        <b-navbar-brand href="#">
          <img src="../assets/header/logo.png" alt="logo" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

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
export default {};
</script>

<style>
@font-face {
  font-family: "BCcardL";
  src: url("../fonts/BCcardL.ttf") format("woff");
  font-weight: normal;
  font-style: normal;
}

@media (max-width: 860px) {
  .navbar-brand {
    width: 75%;
  }
}

@media (max-width: 650px) {
  .nav-link {
    font-size: 17px;
  }
  .navbar-brand img {
    max-width: 45%;
  }
}

/*---------------------- navigation--------------*/
.navbar {
  background-color: #ffffff;
}

.navbar-brand img {
  padding: 10px 10px 10px 10px;
}

img {
  max-width: 33%;
  height: auto;
}

.header_body {
  font-family: BCcardL;
  margin-bottom: 6%;
}
.navbar-brand {
  padding-left: 20px;
}
.nav-link {
  border-bottom: #fbca47 solid 3px;
  color: #fbca47;
}

.navbar-collapse {
  padding-left: 33px;
  padding-bottom: 0.5rem;
  padding-right: 13px;
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
/*---------------------nav 끝--------------- */

.le_co i {
  color: #fbca47 !important;
}

.white_bg {
  background: #fff;
  border-radius: 50px;
  opacity: 0.9;
  padding: 40px 35px;
}

* {
  box-sizing: border-box !important;
}

html {
  scroll-behavior: smooth;
}

body {
  background: #fff;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: #fff;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  line-height: 1.80857;
  font-weight: normal;
}

.container {
  max-width: 1172px;
}

a {
  color: #1f1f1f;
  text-decoration: none !important;
  outline: none !important;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  letter-spacing: 0;
  font-weight: normal;
  position: relative;
  padding: 0 0 10px 0;
  font-weight: normal;
  line-height: normal;
  color: #fff;
  margin: 0;
}

h1 {
  font-size: 24px;
  font-family: "Raleway", sans-serif;
}

h2 {
  font-size: 22px;
}

h3 {
  font-size: 18px;
}

h4 {
  font-size: 16px;
}

h5 {
  font-size: 14px;
}

h6 {
  font-size: 13px;
}

*,
*::after,
*::before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

h1 a,
h2 a,
h3 a,
h4 a,
h5 a,
h6 a {
  color: #fff;
  text-decoration: none !important;
  opacity: 1;
}

button:focus {
  outline: none;
}

ul,
ol {
  margin: 0px;
  padding: 3px;
  list-style: none;
}

a {
  color: #222222;
  text-decoration: none;
  outline: none !important;
}

a,
.btn {
  text-decoration: none !important;
  outline: none !important;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

:focus {
  outline: 0;
}

.btn-custom {
  margin-top: 20px;
  background-color: transparent !important;
  border: 2px solid #ddd;
  padding: 12px 40px;
  font-size: 16px;
}

.lead {
  font-size: 18px;
  line-height: 30px;
  color: #767676;
  margin: 0;
  padding: 0;
}

.form-control:focus {
  border-color: #ffffff !important;
  box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25);
}

.badge {
  font-weight: 500;
}

blockquote {
  margin: 20px 0 20px;
  padding: 30px;
}
</style>
