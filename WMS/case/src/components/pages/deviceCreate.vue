<template>
  <div class="wrapper">
    <el-form ref="form" label-width="80px">
      <el-form-item label="ip">
        <el-input v-model="user.ip"></el-input>
      </el-form-item>
      <el-form-item label="机房">
        <el-input v-model="user.door"></el-input>
      </el-form-item>
      <el-form-item label="编号">
        <el-input v-model="user.num"></el-input>
      </el-form-item>
      <el-form-item label="宽带">
        <el-input v-model="user.width"></el-input>
      </el-form-item>
      <el-form-item label="状态" class="zhuangtai">
        <el-radio v-model="user.status" label="1">空闲</el-radio>
        <el-radio v-model="user.status" label="0">已出售</el-radio>
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
        ip: "",
        num: "",
        width: "",
        door: "",
        status: ""
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    add() {
      this.$http({
        url: API.addDevice,
        params: this.user
      }).then(d => {
        if (d.data.code == -1) {
          fn.errCallback(this, d);
        }
        if (!reg.checkEmpty(this.user)) {
          this.$message({
            message: "所有的都是必选项",
            type: "warning"
          });
          return;
        }
        if (d.data.isok) {
          this.$message({
            message: d.data.info,
            type: "success"
          });
          this.$router.replace("/home/device");
        } else {
          this.$message({
            message: d.data.info,
            type: "warning"
          });
        }
      });
    },
    update() {
      delete this.user._id;
      this.$http({
        url: API.updateDevice,
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
          this.$router.replace("/home/device");
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
    this.isAdmin = localStorage.getItem("isAdmin");
    this.id = this.$route.params.id;
    if (this.id == "0") {
      //新建
    } else {
      //修改
      this.$http({
        url: API.findDevice,
        params: {
          id: this.id
        }
      }).then(d => {
        this.user = d.data.data[0];
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
  .zhuangtai
    text-align left
</style>
