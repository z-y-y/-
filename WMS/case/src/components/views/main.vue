<template>
  <div class="main">
    <v-left class="left"></v-left>
    <v-right class="right"></v-right>
  </div>
</template>

<script type='text/ecmascript-6'>
import vLeft from "../views/left";
import vRight from "../views/right";
export default {
  components: {
    vLeft,
    vRight
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
.main
  flex 1
  display flex
</style>