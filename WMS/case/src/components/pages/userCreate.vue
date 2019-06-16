<template>
  <div class="wrapper">
    <el-form ref="form" label-width="80px" class="div2">
      <el-form-item label="账号">
        <el-input v-model="user.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="user.pass"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="confirm"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="user.tel"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="user.email"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio v-model="user.sex" label="男">男</el-radio>
        <el-radio v-model="user.sex" label="女">女</el-radio>
      </el-form-item>
      <el-form-item label="身份证号">
        <el-input v-model="user.idx" :disabled="id!='0'"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="user.des"></el-input>
      </el-form-item>
      <el-form-item label="日期">
        <el-date-picker style="width:100%" type="date" v-model="user.time" placeholder="选择日期"></el-date-picker>
      </el-form-item>
    </el-form>
    <div class="div1">
      <el-button type="primary" @click="add()" v-if="id=='0'">新建</el-button>
      <el-button type="primary" @click="update()" v-if="id!='0'">修改</el-button>
      <v-back></v-back>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import API from "../../common/js/API";
import fn from "../../common/js/fn";
import reg from "../../common/js/reg";
export default {
  components: {},
  props: {},
  data() {
    return {
      id: "",
      user: {
        name: "",
        pass: "",
        tel: "",
        email: "",
        sex: "",
        idx: "",
        des: "",
        time: ""
      },
      confirm: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    add() {
      if (!reg.checkEmpty(this.user)) {
        this.$message({
          message: "所有的都是必选项",
          type: "warning"
        });
        return;
      }
      if (!reg.checkPwd(this.user.pass)) {
        this.$message({
          message: "密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线",
          type: "warning"
        });
        return;
      }
      if (!reg.checkTel(this.user.tel)) {
        this.$message({
          message: "请输入正确的电话号码",
          type: "warning"
        });
        return;
      }
      if (!reg.checkEmail(this.user.email)) {
        this.$message({
          message: "请输入正确的邮箱",
          type: "warning"
        });
        return;
      }
      if (!reg.checkShenfenzheng(this.user.idx)) {
        this.$message({
          message: "请输入正确的身份证",
          type: "warning"
        });
        return;
      }
      if (!reg.checkHanzi(this.user.des)) {
        this.$message({
          message: "请输入汉字",
          type: "warning"
        });
        return;
      }

      if (this.user.pass != this.confirm) {
        this.$message({
          message: "密码和确认密码不一致",
          type: "warning"
        });
      } else {
        this.$http({
          url: API.addUser,
          params: this.user
        }).then(d => {
          if (d.data.code == -1) {
            fn.errCallback(this, d);
          }
          if (d.data.isok) {
            this.$message({
              message: d.data.info,
              type: "success"
            });
            this.$router.replace("/home/user");
          } else {
            this.$message({
              message: d.data.info,
              type: "warning"
            });
          }
        });
      }
    },
    update() {
      delete this.user._id;
      this.$http({
        url: API.updateUser,
        params: this.user
      }).then(d => {
        if (d.data.code == -1) {
          fn.errCallback();
        }
        if (d.data.isok) {
          this.$message({
            message: d.data.info,
            type: "success"
          });
          this.$router.replace("/home/user");
        } else {
          this.$message({
            message: d.data.info,
            type: "warning"
          });
        }
      });
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    if (this.id == "0") {
      //新建
    } else {
      //修改
      this.$http({
        url: API.findUser,
        params: {
          id: this.id
        }
      }).then(d => {
        // console.log(d);
        this.user = d.data.data[0];
        this.confirm = this.user.pass;
      });
    }
  }
};
</script>
<style scoped lang='stylus'>
.wrapper
  width 90%
  margin 30px auto
  overflow-y hidden
  .div1
    text-align center
</style>
