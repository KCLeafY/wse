<template>
  <el-container>
    <el-table :data="tableData"
              border
              style="width: 50%">
      <el-table-column prop="OrgId"
                       label="ID"
                       width="120">
      </el-table-column>
      <el-table-column prop="ConfigName"
                       label="模型名称"
                       width="200">
      </el-table-column>
      <el-table-column prop="Status"
                       label="模型状态"
                       width="200">
      </el-table-column>
      <el-table-column prop="CreatedAt"
                       label="创建时间"
                       width="300">
      </el-table-column>
      <el-table-column prop="UpdatedAt"
                       label="修改时间"
                       width="300">
      </el-table-column>
      <el-table-column label="操作"
                       width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>


    </el-table>
  
  </el-container>

</template>

<script>
import Axios from "axios";

export default {
    
    methods: {
      handleClick(row) {
        console.log(row.OrgId);
        Axios.get("").then(response => {   
          this.tableData = data;
        }).catch(error => {
          console.log(error.response);
        })
        //var data = [{
        //  OrgId: '3',
        //  ConfigName: '测试模型3',
        //  Status: '启用',
        //  CreatedAt: '2020-05-06',
        //  UpdatedAt: '2020-05-06'
        //}];
      }
    },
    data() {
      return {
        tableData: [{
            OrgId: '1',
            ConfigName: '测试模型1',
            Status:'启用',
            CreatedAt: '2020-05-06',
            UpdatedAt: '2020-05-06'
          },
          {
              OrgId: '2',
              ConfigName: '测试模型2',
              Status: '启用',
              CreatedAt: '2020-05-06',
              UpdatedAt: '2020-05-06'
          }
        ]

      }
    },
  }
</script>
