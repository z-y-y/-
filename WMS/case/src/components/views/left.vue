<template>
  <div class="wrapper">
    <router-link to="/home/manage" active-class="select" v-if="isAdmin=='0'">管理员管理</router-link>
    <router-link to="/home/user" active-class="select" v-if="isAdmin!='2'">用户管理</router-link>
    <router-link to="/home/inform" active-class="select">通知</router-link>
    <router-link to="/home/device" active-class="select">设备管理</router-link>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  components: {},
  props: {},
  data() {
    return {
      isAdmin: ""
    };
  },
  watch: {},
  computed: {},
  methods: {},
  mounted() {
    this.isAdmin = localStorage.getItem("isAdmin");
  }
};
</script>
<style scoped lang='stylus'>
@import '../../common/stylus/index.styl'
.wrapper
  background $leftColor
  width 200px
  padding-top 30px
  a
    color #ffffff
    font-size 16px
    display block
    text-align center
    line-height 50px
    &:hover
      background #7CCD7C
  .select
    background #bbffaa
</style>
