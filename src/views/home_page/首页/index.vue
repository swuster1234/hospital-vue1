<template>
  <!DOCTYPE html>
  <html lang="en">
  <body>
     <header>
      <h1>绵阳市中心医院</h1>
      <div class="time"></div>
      <!-- 外部script标签引入 -->
     </header>
     <section class="mainbox">
      <div class="column">
          <div class="pannel">
              <div class="pannel-footer">
              
            </div>           
              <h2>医院每日就诊量趋势</h2>
          </div>
          <div class="pannel">
              <div class="pannel-footer"></div>
              <h2>医院首页数据分析</h2>
              
          </div>
          <div class="pannel">
              <div class="pannel-footer"></div>
              <h2>各科室病人在线统计</h2>
          </div>
      </div>
  
  
      <div class="column">
          <div class="no">
              <!-- 在no盒子里再放入两个盒子，一个填数字no-hd，一个作说明no-bd -->
              <div class="no-hd">
                  <ul>
                      <li >就诊人数</li>
                      <li>在线医生</li>
                  </ul>
              </div>
          </div>
          <!-- 中间盒子还要放入一个map -->
          <div class="map">
 
          </div>
      </div>
  
  
      <div class="column">
          <div class="pannel">
              <div class="pannel-footer"></div>
              <h2>今日医生到岗情况统计</h2>
          </div>
          <div class="pannel">
              <div class="pannel-footer"></div>
              <h2>病房空余统计</h2>
          </div>
          <div class="pannel">
              <div class="pannel-footer"></div>
              <h2>手术室空余统计</h2>
          </div>
      </div>
     </section>
  </body>
  </html>
</template>




<script>

export default{

}
</script>

<style>
.el-card__body, .el-main {
  padding: 0px;
}



</style>
