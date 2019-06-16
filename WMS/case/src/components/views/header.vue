<template>
  <div class="wrapper">
    <div>
      <el-button type="primary" plain class="btn1" @click="logout()">退出登录</el-button>
      <p class="p1">欢迎:{{name}}</p>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import API from "../../common/js/API";
export default {
  components: {},
  props: {},
  data() {
    return {
      name: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    logout() {
      this.$http({
        url: API.exit
      }).then(d => {
        this.$message({
          message: d.data.info,
          type: "success"
        });
        this.$router.replace("/login");
        console.log(d);
      });
    }
  },
  mounted() {
    this.name = localStorage.getItem("username");
  }
};
</script>
<style scoped lang='stylus'>
@import '../../common/stylus/index.styl'
.wrapper
  height 130px
  background $hdColor
  .p1
    font-size 20px
    color #ffffff
    float right
    margin-top 50px
  .btn1
    float right
    margin 40px
</style>
