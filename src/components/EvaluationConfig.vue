<template>
  <el-container>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="模型名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="测评类型">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="领导评分" name="type"></el-checkbox>
          <el-checkbox label="自评" name="type"></el-checkbox>
          <el-checkbox label="互评" name="type"></el-checkbox>
          <el-checkbox label="下级单位评分" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="总分">
        <el-input v-model="form.score"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="button" @click="open">新增大类</el-button>
        <!--@click="open"-->
        <div class="custom-tree-container">
          <div class="block">
            <p>模型类别</p>
            <el-tree :data="data"
                     node-key="id"
                     default-expand-all=""
                     :expand-on-click-node="false">
              <span class="custom-tree-node" slot-scope="{ node, data }">
                <span>{{ node.label }}</span>
                &nbsp;&nbsp;&nbsp;<span>最大分</span>
                <!--<el-input v-model="input" placeholder="请输入分值" style="height:10px;"></el-input>-->
                &nbsp;<input type="text" style="width:50px" />
                &nbsp;&nbsp;&nbsp;<span>最小分</span>
                &nbsp;<input type="text" style="width:50px" />
                <!--&nbsp;&nbsp;&nbsp;<el-input v-model="input" placeholder="请输入分值"style="height:10px;"></el-input>-->
                &nbsp;&nbsp;&nbsp;
                <span>
                  <el-button type="text"
                             size="mini"
                             @click="() => append(data)">
                    添加小类
                  </el-button>
                  <el-button type="text"
                             size="mini"
                             @click="() => remove(node, data)">
                    删除
                  </el-button>
                </span>
            
              </span>
            </el-tree>
          </div>
        </div>


        <br />
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    </el-container>
</template>

<script>
  let id = 1000;
  export default {
    data() {
      const data = [{
        id: 1,
        label: '主题教育',
        children: [{
          id: 5,
          label: '担当作为'
        }, {
          id: 6,
          label: '马上就办'
        },
        {
          id: 7,
          label: '反对四风'
        }
          ,
        {
          id: 8,
          label: '廉洁奉公'
        }

        ]
      }, {
        id: 2,
        label: '反对四风',
        children: [{
          id: 9,
          label: '廉洁奉公'
        }]
      }];


      return {
        data: JSON.parse(JSON.stringify(data)),
        data: JSON.parse(JSON.stringify(data)),
        form: {
          name: '',
          type: [],
          score:''
        }
      }
    },
    methods: {

      append(data) {
        
        this.$prompt('请输入小类名称', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '添加成功'
          });
          const newChild = { id: id++, label: value, children: [] }; 
          if (!data.children) {
            this.$set(data, 'children', []);
          }
         
          data.children.push(newChild);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });

      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },

      //renderContent(h, { node, data, store }) {
      //  return (
      //    <span class="custom-tree-node">
      //      <span>{node.label}</span>
      //      <span>


      //      </span>
      //    </span>);
      //},

      onSubmit() {
        console.log('submit!');
      }
      ,
      open() {
        this.$prompt('请输入大类名称', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '添加成功 '
          });

          const newChild = { id: id++, label: value, children: [] };
          console.log(newChild);
          //if (!data.children) {
            
          //  this.$set(data, 'children', []);
          //}
        
          //data.children.push(newChild);
          data.append(newChild);
  
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      }
    }
  }
</script>
