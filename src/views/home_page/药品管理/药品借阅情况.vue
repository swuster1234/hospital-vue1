<template>
  <div class="about">
    <h1>药品借阅情况</h1>
    <download-excel 
    class="export-excel-wrapper"
    :data="tableData"
    :fields="JSON_fields"
    :header="title"
    name="病人信息表格.xls">
      <el-button type="success">导出</el-button>
    </download-excel>
  </div>
  </template>
  
  
  
  
  <script>
  export default{
    data(){
      return{
        title:"病人信息表",
        JSON_fields:{
          "日期":'data',
          "姓名":'name',
          "地址":'address',
        },
        tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
      }
    },
        
    methods:{
        
    }
  
  }
  </script>