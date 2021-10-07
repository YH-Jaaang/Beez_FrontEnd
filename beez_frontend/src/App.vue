<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  // mathods: {
  //   getServerSideProps({ req, res, params }) {
  //     if (!req.headers.referer) {
  //       res.statusCode = 302;
  //       res.setHeader("Location", `/<link>`); // Replace <link> with your url link
  //       res.end();
  //     }
  //     return { props: {} };
  //   },
  // },
};
</script>
