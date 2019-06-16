<template>
  <div class="right">
    <h1 class="h1">{{$route.name}}</h1>
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
  mounted() {}
};
</script>
<style scoped lang='stylus'>
.right
  flex 1
  overflow-y auto
  h1
    color #FF1493
    padding-left 30px
    padding-top 30px
    font-size 40px
</style>
