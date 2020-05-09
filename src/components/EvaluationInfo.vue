<template>
  <div>
    <div>
      <el-button style="float:left;margin-bottom:20px" @click="goToLink">新增测评</el-button>
    </div>
    <el-table ref="multipleTable" :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange">
      <!--<el-table-column type="selection" width="60"></el-table-column>-->
      <el-table-column prop="OrgId" label="编号" width="180"></el-table-column>
      <el-table-column prop="EvaluationCode" label="测评编码"></el-table-column>
      <el-table-column prop="EvaluationName" label="测评名称" width="500"></el-table-column>
      <el-table-column prop="Year" label="年度" width="180"></el-table-column>
      <el-table-column prop="BeginTime" label="开始时间" width="180"></el-table-column>
      <el-table-column prop="EndTime" label="结束时间" width="180"></el-table-column>
      <el-table-column prop="Status" label="状态" width="180"></el-table-column>
      <el-table-column prop="CreatedAt" label="创建时间" width="180"></el-table-column>
    </el-table>
    <el-pagination background
                   @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page="currentPage"
                   :page-sizes="[10, 50, 100, 200]"
                   :page-size="pageSize"
                   layout="total, sizes, prev, pager, next, jumper"
                   :total="total">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        keyword: "测评信息",
        total: 1,
        currentPage: 1,
        pageSize: 10,
        tableData: [{
          OrgId: '1',
          EvaluationCode: 'CP100001',
          EvaluationName: '测试测评信息1',
          Year: '2020',
          BeginTime: '2020-05-07',
          EndTime: '2020-05-07',
          Status: '草稿',
          CreatedAt: '2020-05-07'
        }]
        //,multipleSelection: []
      }
    },
    created: function () {
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      this.fetchData();
    },
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(function (row) {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      callbackFunction(result) {
        alert(result + "aaa");
      },
      fetchData() { //获取数据
        
        //this.$http.jsonp("http://localhost:8080/wproject/view/enterprise!getListByParam.action", {//跨域请求数据
        //  params: {
        //    keywords: this.keyword//输入的关键词
        //  },
        //  jsonpCallback: 'callbackFunction'//这里是callback
        //}).then(function (res) {//请求成功回调，请求来的数据赋给searchList数组
        //  this.total = res.body.count;
        //  this.currentPage = res.body.curr;
        //  this.tableData = res.body.data;
        //  console.info(res);
        //}, function (res) {//失败显示状态码
        //  alert("res.status:" + res.status)
        //})
      },
      handleSizeChange(val) {
        this.pageSize = val;
        this.currentPage = 1;
        this.fetchData(1, val);
        // console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        this.fetchData(val, this.pageSize);
        // console.log(`当前页: ${val}`);
      },
      goToLink() {
        this.$router.replace('/evalutioninfoadd')
      }

    }
  }
</script>
<style>
  .el-table th {
    text-align: center;
  }

  .el-table tbody tr td:first-child {
    text-align: center;
  }
</style>
