<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  mounted() {},
  beforeRouteEnter(to, from, next) {
    // console.log(to);
    var isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin == "0") {
      next();
    } else {
      window.open("http://localhost:8080", "_self");
    }
  }
};
</script>
<style scoped>
.wrapper {
}
</style>
