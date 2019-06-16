<template>
  <div class="wrapper">
    <el-button type="primary" plain class="btn1" @click="toCreate(0)" v-if="isAdmin !='2'">新建</el-button>
    <div class="box">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" label="序号" width="180"></el-table-column>
        <el-table-column prop="tit" label="题目" width="180"></el-table-column>
        <el-table-column label="时间">
          <template slot-scope="scope">
            <span>{{scope.row.time.substr(0,10)}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button round type="primary" @click="toCreate(scope.row.id)">修改</el-button>
            <v-del :idx="scope.row.id" @del="del($event)" v-if="isAdmin !='2'"></v-del>
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
      tableData: [],
      isAdmin: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    toCreate(n) {
      this.$router.push("/home/inform/create/" + n);
    },
    del(id) {
      this.$http({
        url: API.delNews,
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
        url: API.findNews
      }).then(d => {
        console.log(d);
        if (d.data.code == -1) {
          fn.errorCallback(this, d);
        }
        this.tableData = d.data.data;
      });
    }
  },
  mounted() {
    this.init();
    this.isAdmin = localStorage.getItem("isAdmin");
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
