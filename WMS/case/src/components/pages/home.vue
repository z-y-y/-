<template>
  <div class="wrapper">
    <v-header class="header"></v-header>
    <v-main class="main"></v-main>
  </div>
</template>

<script type='text/ecmascript-6'>
import vHeader from "../views/header";
import vMain from "../views/main";
export default {
  components: {
    vHeader,
    vMain
  },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  mounted() {}
};
</script>
<style scoped lang='stylus'>
@import '../../common/stylus/index.styl'
.wrapper
  width 100vw
  height 100vh
  display flex
  flex-direction column
</style>
