<template>
  <el-button type="danger" @click="del()">删除</el-button>
</template>

<script type='text/ecmascript-6'>
export default {
  components: {},
  //接收来自manageList的del传过来的id
  props: ["idx"],
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    del() {
      this.$confirm("你确定要删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        //每个vue的删除不一样所以把接收到的id回传回去
        this.$emit("del", this.idx);
      });
    }
  },
  mounted() {}
};
</script>
<style scoped>
</style>
