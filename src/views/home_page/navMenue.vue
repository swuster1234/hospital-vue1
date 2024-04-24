<template>
    <el-aside width="200px">
      <!-- default-active为默认激活第index个菜单 -->
      <el-menu
      default-active="1"
      class="el-menu-vertical-demo" router>
      <!-- 添加了router之后，index变为网页地址导航 -->
      <!-- 无子集 -->
      <el-menu-item index="/首页">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
        <el-menu-item index="/护士管理">
          <i class="el-icon-s-custom"></i>
          <span slot="title">护士管理</span>
        </el-menu-item>
      <el-menu-item index="/病人管理">
        <i class="el-icon-s-custom"></i>
        <span slot="title">病人管理</span>
      </el-menu-item>

      <el-menu-item index="/医疗器械管理">
        <i class="el-icon-takeaway-box"></i>
        <span slot="title">医疗器械管理</span>
      </el-menu-item>

      <!-- 有子集 -->
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-first-aid-kit"></i>
          药品管理</template>
        <el-menu-item index="/药品信息">药品信息</el-menu-item>
        <el-menu-item index="/药品借阅情况">药品借阅情况</el-menu-item>
      </el-submenu>


    </el-menu>
    </el-aside>
    
</template>




<script>
// 设置初始状态
history.pushState({ page: 1 }, "", ""); // 这里可以根据需要设置状态对象和标题

// 监听浏览器的返回事件
window.addEventListener('popstate', function(event) {
  // 可以在这里执行你希望的操作，比如返回上一页
  window.history.back();
});

export default{
  data(){
    return{
      
    }
  },
      
  methods:{
      
  }
}
</script>
