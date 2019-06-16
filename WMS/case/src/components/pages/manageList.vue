<template>
  <div class="wrapper">
    <el-button type="primary" plain class="btn1" @click="toCreate(0)">新建</el-button>
    <div class="box">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" label="序号" width="180"></el-table-column>
        <el-table-column prop="name" label="账号" width="180"></el-table-column>
        <el-table-column prop="prop" label="属性" width="180"></el-table-column>
        <el-table-column label="时间">
          <template slot-scope="scope">
            <span>{{scope.row.time.substr(0,10)}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button round type="primary" @click="toCreate(scope.row.id)">修改</el-button>
            <!--传:idx给子组件 -->
            <!-- 用自定义事件@del接收 del组件传过来的id进行删除-->
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
      this.$router.push("/home/manage/create/" + n);
    },
    del(id) {
      this.$http({
        url: API.delManage,
        params: { id: id }
      }).then(d => {
        if (d.data.code == -1) {
          fn.errorCallback(this, d);
        }
        if (d.data.isok) {
          this.$message({
            showClose: true,
            message: d.data.info,
            type: "success"
          });
          this.init();
        }
      });
    },
    init() {
      this.$http({
        //get请求不需要参数
        url: API.findManage
      }).then(d => {
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
