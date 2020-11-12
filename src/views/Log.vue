<template>
  <div>
    <el-table
      :data="allLogList"
      style="width: 100%"
      :header-cell-style="{ textAlign: 'center' }"
      :cell-style="{ textAlign: 'center' }"
      stripe
      border
    >
      <el-table-column
        prop="createTime"
        label="请求时间"
      ></el-table-column>
      <el-table-column prop="uid" label="用户uid" ></el-table-column>
      <el-table-column
        prop="userName"
        label="用户昵称"
      ></el-table-column>
            <el-table-column prop="ip" label="ip地址"> </el-table-column>
      <el-table-column prop="url" label="请求URL" ></el-table-column>
      <el-table-column
        prop="method"
        label="响应方法"
      ></el-table-column>
      <el-table-column
        prop="requestMode"
        label="请求方式"
      ></el-table-column>
      <el-table-column
        prop="operation"
        label="接口功能"
      ></el-table-column>
    </el-table>
    <div class="page1">
            <el-pagination
                    :page-size=5
                    @current-change="currentChange"
                    background
                    layout="prev, pager, next"
                    :total=Number(this.amount)>
            </el-pagination>
        </div>
  </div>
</template>

<script>
import http from "../http/userHttp";
export default {
  data() {
    return {
      logList: [],
      allLogList: [],
      amount: "",
      page: "",
    };
  },
  methods: {
    async getLogList(page) {
      let logList = await http.findLogList(page);
      this.allLogList = logList.data.result;
      this.amount = logList.data.amount;
      // console.log(this.amount);
      // this.dyList=dyList.data.result;
      // console.log(dyList);
    },
    currentChange(page){
        this.getLogList(page);
        this.page=page;
    }
  },
  mounted() {
    this.getLogList(1);
  },
};
</script>

<style scoped>

.page1 {
    display: flex;
    flex-direction: row-reverse;
    margin: 20px 40px;
}


</style>
