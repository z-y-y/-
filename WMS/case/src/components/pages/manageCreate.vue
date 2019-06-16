<template>
  <div class="wrapper">
    <el-form ref="form" label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="user.name" :disabled="id!='0'"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="user.pass" type="password" :disabled="id!='0'"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="confirm" type="password" :disabled="id!='0'"></el-input>
      </el-form-item>
      <el-form-item label="属性">
        <el-input v-model="user.prop"></el-input>
      </el-form-item>
      <el-form-item label="日期">
        <el-date-picker style="width:100%" type="date" v-model="user.time" placeholder="选择日期"></el-date-picker>
      </el-form-item>
    </el-form>
    <div class="div1">
      <el-button type="primary" plain @click="create()" v-if="id==0">新建</el-button>
      <el-button type="primary" plain @click="update()" v-if="id!=0">修改</el-button>
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
        prop: "",
        time: ""
      },
      confirm: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    create() {
      if (this.user.pass != this.confirm) {
        this.$message({
          showClose: true,
          message: "密码和确认密码不一致",
          type: "warning"
        });
      } else {
        this.$http({
          url: API.addManage,
          params: this.user
        }).then(d => {
          if (!reg.checkPwd(this.user.pass)) {
            this.$message({
              message:
                "密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线",
              type: "warning"
            });
            return;
          }
          // console.log(d);
          if (d.data.code == -1) {
            fn.errorCallback(this, d);
          }
          if (d.data.isok) {
            this.$message({
              showClose: true,
              message: d.data.info,
              type: "success"
            });
            this.$router.replace("/home/manage");
          }
        });
      }
    },
    update() {
      delete this.user._id;
      this.$http({
        url: API.updateManage,
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
          this.$router.replace("/home/manage");
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
      console.log("新建");
    } else {
      this.$http({
        url: API.findManage,
        params: {
          id: this.id
        }
      }).then(d => {
        // console.log(d);
        if (d.data.code == -1) {
          fn.errorCallback(this, d);
        }
        this.user = d.data.data[0];
        this.confirm = d.data.data[0].pass;
        console.log(this.confirm);
      });
    }
  }
};
</script>
<style scoped lang='stylus'>
.wrapper
  width 90%
  margin 30px auto
  .div1
    button
  text-align center
</style>
