<template>
  <div>
    <el-container>

      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="测评名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="单位">
          <el-input v-model="form.depart"></el-input>
        </el-form-item>

        <el-form-item label="年度">
          <el-date-picker v-model="form.date3"
                          type="year"
                          placeholder="选择年" style="float:left">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="测评时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="开始时间" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-date-picker type="date" placeholder="结束时间" v-model="form.date2" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item label="下级单位负责人测评数">
          <el-input v-model="form.ComLeaderLeastEvalNum"></el-input>
        </el-form-item>

        <el-form-item label="下级单位部门负责人测评数" style="width:200px;">
          <el-input v-model="form.DepHeadLeastEvalNum" style="width:100px"></el-input>
        </el-form-item>



     
      </el-form>
      </el-container>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        form: {
          name: '',
      
        }
      }
    },
    created: function () {
        
    },
    methods: {
    
      onSubmit() {
        console.log('submit!');
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
