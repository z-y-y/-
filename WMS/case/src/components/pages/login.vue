<template>
  <div class="wrapper">
    <div class="con">
      <div class="div1">
        <p class="p1">登录</p>
      </div>
      <div class="div2">
        <el-select v-model="user.type" placeholder="请选择" class="ipt1">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-input placeholder="请输入内容" v-model="user.name" clearable class="ipt2"></el-input>
        <el-input placeholder="请输入密码" v-model="user.pass" show-password class="ipt2"></el-input>
        <el-row>
          <el-button type="primary" class="btn" @click="login()">登录</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import API from "../../common/js/API";
import reg from "../../common/js/reg";
export default {
  components: {},
  props: [],
  data() {
    return {
      user: {
        type: "",
        name: "",
        pass: ""
      },
      options: [
        {
          value: "0",
          label: "超级管理员"
        },
        {
          value: "1",
          label: "普通管理员"
        },
        {
          value: "2",
          label: "用户"
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    login() {
      // console.log(this.user);
      if (!reg.checkEmpty(this.user)) {
        this.$message({
          message: "所有的都是必选项",
          type: "warning"
        });
        return;
      }
      var user = this.$qs.stringify(this.user);
      this.$http({
        url: API.login,
        method: "post",
        data: user
      })
        .then(d => {
          // console.log(d);

          if (d.data.isok) {
            this.$message({
              showClose: true,
              message: d.data.info,
              type: "success"
            });
            //用户输入的用户名
            localStorage.setItem("username", this.user.name);
            //登录的用户在当前系统的角色
            localStorage.setItem("isAdmin", d.data.isAdmin);
            this.$router.replace("/home");
          } else {
            this.$message({
              showClose: true,
              message: d.data.info,
              type: "warning"
            });
          }
        })
        .catch(c => {
          console.log(c);
        });
    }
  },
  mounted() {}
};
</script>
<style scoped lang='stylus'>
@import '../../common/stylus/index.styl'
.wrapper
  width $bodywidth
  height $bodyheight
  background $bodyBgcolor
  .con
    background $bgColor
    con()
  .div1
    height 85px
    .p1
      font-size 40px
      text-align center
      line-height 95px
      color #ff1493
  .div2
    width 345px
    .ipt1
      width 80%
      margin-left 60px
      margin-top 10px
      display block
    .ipt2
      width 80%
      margin-left 60px
      display block
      margin-top 10px
    .btn
      margin-left 50%
      margin-top 15px
      text-align center
</style>
