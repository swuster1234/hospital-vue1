<template>
  <div>
    <el-input v-model="searchText" placeholder="搜索关键词"></el-input>
    <el-button @click="filteredData">搜索</el-button>


    <el-table :data="filteredData" stripe="true" border="true" max-height="1025" :default-sort = "{prop: 'executeProjectMostDay', order: 'descending'}" style="width: 100%">
      <el-table-column prop="nurseId" label="护士ID" sortable></el-table-column>
      <el-table-column prop="patientServerCount" label="服务病人计数" sortable></el-table-column>
      <el-table-column prop="executeProjectMostDay" label="执行项目最多日期" sortable></el-table-column>
      <el-table-column prop="executeProjectMostPatientCount" label="执行项目最多患者数" sortable></el-table-column>
      <el-table-column prop="executeProjectMostDayCount" label="执行项目最多日计数"></el-table-column>
      <el-table-column prop="executeProjectMostName" label="执行项目最多名称"></el-table-column>
      <el-table-column prop="executeProjectMostCount" label="执行项目最多计数"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="editData(scope.row)">编辑</el-button>
          <el-button type="text" @click="deleteData(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-button @click="addData">新增</el-button>
    <el-button @click="exportData">导出数据</el-button>
    <div class="block">
      <!--      <span class="demonstration">完整功能</span>-->
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import {Table, Input, Button, TableColumn, Message, MessageBox} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {getAllData, addData, deleteData, updateData, exportData} from './api'; // 导入API调用方法
Vue.use(Table);
Vue.use(Input);
Vue.use(Button);
Vue.use(TableColumn);

export default {
  data() {
    return {
      data: [], // 初始化为空数组
      searchText: '', // 用于搜索的文本
      currentPage4: 4, // 当前页
      total: 0, // 总条数
      pageSize: 100 // 每页显示的条数
    };

  },
  computed: {
    // 计算当前页显示的数据
    currentPageData() {
      const start = (this.currentPage4 - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.filteredData.slice(start, end);
    },
      filteredData() {
        // 检查 searchText 是否为空
        if (this.searchText.trim() === '') {
          console.log(this.data)
          return this.data; // 如果 searchText 为空，则返回原始数据
        }
        // 使用 filter 方法进行模糊搜索
        return this.data.filter(item => {
          return item.name.toLowerCase().includes(this.searchText.toLowerCase());
        });
      }

  },
  methods: {
    fetchData() {
      getAllData()
          .then(response => {
            // 检查 response 是否是一个数组
            if (Array.isArray(response)) {
              this.data = response; // 直接赋值，因为 response 是一个数组
            } else if (response.data && Array.isArray(response.data)) {
              // 如果 response 是一个对象，并且有一个名为 data 的属性是数组，则使用该数组
              this.data = response.data; // 假设响应数据是一个数组
              this.total = this.data.length; // 总条数
              this.filteredData = this.data;
            } else {
              // 如果 response 既不是数组，也没有名为 data 的数组属性，则处理错误
              console.error('Expected an array or an object with a "data" array, but got:', response);
              Message.error('获取的数据格式不正确');
              return;
            }
            // console.log("11111", this.data);
            // console.log(Array.isArray(this.data)); // 检查 this.data 是否是数组
          })
          .catch(error => {
            // 处理错误
            console.error('Error fetching data:', error);
            Message.error('获取数据失败');
          });
    },
    openAddDialog() {
      // 打开新增数据的对话框
      MessageBox.prompt('请输入护士ID', '新增护士', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^[a-zA-Z0-9]+$/,
        inputErrorMessage: '护士ID只能包含字母和数字'
      }).then(({value}) => {
        // 调用API方法添加数据
        this.addNewData({nurseId: value, /* 其他属性 */});
      }).catch(() => {
        // 取消新增操作
      });
    },
    addNewData(newData) {
      addData(newData)
          .then(() => {
            // 添加成功后的操作
            console.log('Data added successfully');
            this.fetchData(); // 重新获取数据
          })
          .catch(error => {
            // 处理错误
            console.error('Error adding data:', error);
            Message.error('添加数据失败');
          });
    },
    deleteData(row) {
      MessageBox.confirm('确认删除该条数据？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        this.deleteDataById(row.nurseId);
      }).catch(() => {
        // 取消删除操作
      });
    },
    deleteDataById(id) {
      deleteData(id)
          .then(() => {
            // 删除成功后的操作
            console.log('Data deleted successfully');
            this.fetchData(); // 重新获取数据
          })
          .catch(error => {
            // 处理错误
            console.error('Error deleting data:', error);
            Message.error('删除数据失败');
          });
    },
    editData(row) {
      // 打开编辑数据的对话框
      MessageBox.prompt('请输入新的护士ID', '编辑护士', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputValue: row.nurseId,
        inputPattern: /^[a-zA-Z0-9]+$/,
        inputErrorMessage: '护士ID只能包含字母和数字'
      }).then(({value}) => {
        // 调用API方法更新数据
        this.updateDataById(row.nurseId, {nurseId: value, /* 其他属性 */});
      }).catch(() => {
        // 取消编辑操作
      });
    },
    updateDataById(id, updatedData) {
      updateData(id, updatedData)
          .then(() => {
            // 更新成功后的操作
            console.log('Data updated successfully');
            this.fetchData(); // 重新获取数据
          })
          .catch(error => {
            // 处理错误
            console.error('Error updating data:', error);
            Message.error('更新数据失败');
          });
    },
    exportData() {
      exportData()
          .then(blob => {
            // 处理返回的数据Blob
            // 这里可以实现将Blob保存为文件
            // 这里可以使用 FileSaver.js 或其他方法来保存 Blob
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'data.xls'); // 设置下载文件的名称
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
          })
          .catch(error => {
            // 处理错误
            console.error('Error exporting data:', error);
            Message.error('导出数据失败');
          });
    },
    handleSizeChange(val) {
      this.pageSize = val; // 每页显示的条数
    },
    handleCurrentChange(val) {
      this.currentPage4 = val; // 当前页
    },
  },
  created() {
    this.fetchData(); // 组件创建后获取数据
    // this.addNewData()
    console.log(Array.isArray(this.data)); // 检查 this.data 是否是数组

  },
};
</script>

<style>
/* 样式可以根据需求自行添加 */
</style>
