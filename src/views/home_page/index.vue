<template>
  <div id="module">
  <!-- 左，右（上下主体 ） -->
  <el-container>

    <!-- 将左侧导航导入，第一步先定义一个名称NavMenue -->
    <NavMenue />

    <el-container>
      <!-- <el-header>医疗数据管理平台</el-header> -->
      <el-main class="main"><router-view/></el-main>
    </el-container>
  </el-container>
</div>
</template>




<script>
// 第二步，导入
import NavMenue from './navMenue.vue'
export default{
  data(){
    return{
      
    }
  },
      
  methods:{
      
  },
  // 第三步，在组件中表示出导入名称
  components:{
    NavMenue
  }
}
</script>
