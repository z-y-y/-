<template>
  <div class="wrapper">
    <el-button type="primary" plain class="btn1" @click="toCreate(0)">新建</el-button>
    <div class="box">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" label="序号" width="180"></el-table-column>
        <el-table-column prop="name" label="账号" width="180"></el-table-column>
        <el-table-column prop="sex" label="性别" width="180"></el-table-column>
        <el-table-column prop="idx" label="身份证号"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button round type="primary" @click="toCreate(scope.row.id)">修改</el-button>
            <v-del :idx="scope.row.id" @del="del($event)"></v-del>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import API from "../../common/js/API";
import fn from "../../common/js/fn";
export default {
  components: {},
  props: {},
  data() {
    return {
      tableData: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    toCreate(n) {
      this.$router.push("/home/user/create/" + n);
    },
    del(id) {
      this.$http({
        url: API.delUser,
        params: {
          id: id
        }
      }).then(d => {
        if (d.data.code == -1) {
          fn.errCallback(this, d);
        }
        if (d.data.isok) {
          this.$message({
            message: d.data.info,
            type: "success"
          });
          this.init();
        } else {
          this.$message({
            message: d.data.info,
            type: "warning"
          });
        }
      });
    },
    init() {
      this.$http({
        url: API.findUser
      }).then(d => {
        // console.log("查询用户");
        // console.log(d);
        if (d.data.code == -1) {
          fn.errorCallback(this, d);
        }
        this.tableData = d.data.data;
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style scoped lang='stylus'>
.wrapper
  .btn1
    margin-left 30px
    margin-top 30px
  .box
    width 90%
    margin 20px auto
</style>
