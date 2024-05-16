<template>
    <div>
      <div class="report-header">
        <div>患者年龄：{{ age }}</div>
        <div>患者性别：{{ gender }}</div>
      </div>
      
      <div class="report-content">
        <div id="chart" style="width: 100%; height: 400px;"></div>
        
        <div class="report-section">
          <h3>检查项目</h3>
          <p>{{ examItems }}</p>
        </div>
        
        <div class="report-section">
          <h3>检查所见</h3>
          <p>{{ examResults }}</p>
        </div>
        
        <div class="report-section">
          <h3>检查结论</h3>
          <p>{{ examConclusion }}</p>
        </div>
        
        <div class="report-section">
          <h3>检查时间</h3>
          <p>{{ examTime }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import echarts from 'echarts';
  
  export default {
    data() {
      return {
        age: 30,
        gender: '男',
        examItems: '血常规、尿常规、心电图',
        examResults: '血红蛋白正常，尿蛋白异常，心电图正常',
        examConclusion: '建议进一步检查肾功能',
        examTime: '2022-01-01',
      };
    },
    mounted() {
      var myChart = echarts.init(document.getElementById('chart'));
      // 数据可视化部分的代码
    },
  };
  </script>
  
  <style>
  .report-header {
    display: flex;
    justify-content: space-between;
  }
  
  .report-content {
    padding: 20px;
  }
  
  .report-section {
    margin-top: 20px;
  }
  </style>
  