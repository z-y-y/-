<template>
  <div class="wrapper">
    <el-button type="primary" plain class="btn1" @click="toCreate(0)" v-if="isAdmin !='2'">新建</el-button>
    <div class="box">
      <el-table :data="tableData">
        <el-table-column type="index" label="序号" width="180"></el-table-column>
        <el-table-column prop="ip" label="ip" width="180"></el-table-column>
        <el-table-column prop="door" label="机房" width="90"></el-table-column>
        <el-table-column label="状态" width="90">
          <template slot-scope="scope">
            <span>{{scope.row.status=="1"?"空闲":"已出售"}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button round type="primary" @click="toCreate(scope.row.id)" v-if="isAdmin!='2'">修改</el-button>
            <el-button
              round
              type="primary"
              @click="shop(scope.row.id)"
              v-if="isAdmin =='2'"
              :disabled="scope.row.status=='0'"
            >购买</el-button>
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
      this.$router.push("/home/device/create/" + n);
    },
    shop(id) {
      this.$http({
        url: API.updateDevice,
        params: {
          id: id,
          status: "0"
        }
      }).then(d => {
        if (d.data.code == -1) {
          fn.errCallback(this, d);
        }
        if (d.data.isok) {
          this.$message({
            message: "购买成功",
            type: "success"
          });
          this.init();
        } else {
          this.$message({
            message: "购买失败，请重试",
            type: "warning"
          });
        }
      });
    },
    del(id) {
      this.$http({
        url: API.delDevice,
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
        url: API.findDevice
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
