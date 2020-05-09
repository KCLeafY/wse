<template>
  <el-container>
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
  </el-container>
</template>

<script>
  let id = 1000;

  export default {
  data() {
  const data = [{
  id: 2,
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
  id: 3,
  label: '反对四风',
  children: [{
  id: 7,
  label: '廉洁奉公'
  }, {
  id: 8,
  label: '二级 3-2',
  }]
  }];
  return {
  data: JSON.parse(JSON.stringify(data)),
  data: JSON.parse(JSON.stringify(data))
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

  renderContent(h, { node, data, store }) {
  return (
  <span class="custom-tree-node">
    <span>{node.label}</span>
    <span>
      
     
    </span>
  </span>);
  }
  }
  };
</script>

<style>
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>
