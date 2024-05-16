<template>
  <!DOCTYPE html>
  <html lang="en">
   
  <body>
     <header>
      <h1>绵阳市中心医院</h1>
      <div class="time"></div>
      <!-- 外部script标签引入 -->
     </header>
     <section class="mainbox" >
      <div class="column" >
          <div class="pannel" >
            <div class="pannel-footer" ></div>  
            <div class="title">
                <h2>医院每日就诊量趋势</h2>
                <div  ref="chart1" id="mychart1"></div>
            </div>
            
          </div>
          <div class="pannel">
              <div class="pannel-footer"></div>
              <div class="title">
                <h2>医院首页数据分析</h2>
                <div ref="chart2" id="mychart2"></div>
              </div>
              
          </div>
          <div class="pannel">
              <div class="pannel-footer"></div>
              <div class="title">
                <h2>各科室病人在线统计</h2>
                <div ref="chart3" id="mychart"></div>
              </div>
              
          </div>
      </div>
  
  
      <div class="column" >
          <div class="no" >
              <!-- 在no盒子里再放入两个盒子，一个填数字no-hd，一个作说明no-bd -->
              <div class="no-hd" >
                  <ul>
                      <li >就诊人数</li>
                      <li>在线医生</li>
                  </ul>
              </div>
          </div>
          <!-- 中间盒子还要放入一个map -->
          <div class="map" >
                <div class="map1" ></div>

                <div class="map2"></div>
          </div>
      </div>
  
  
      <div class="column">
          <div class="pannel">
              <div class="pannel-footer"></div>
              <div class="title">
                <h2>今日医生到岗情况统计</h2>
                <div ref="chart4" id="mychart"></div>
              </div>
              
          </div>
          <div class="pannel3">
              <div class="block1">
                <div class="title"><h2>病房空余统计</h2>
                  <div ref="chart5" id="mychart5"></div>
                </div>
                
              </div>
              <div class="block2">
                <div class="title"><h2>h2</h2></div>
              </div>
          </div>
          <div class="pannel4">
            <div class="block1">
                <div class="title"> <h2>手术室空余统计</h2>
                <div ref="chart6" id="mychart6"></div>
                </div>
            </div>
              <div class="pannel-footer"></div>
              <div class="block2">
                <div  class="title"><h2>h2</h2></div>
             </div>
          </div>
      </div>
     </section>
  </body>
  </html>
</template>




<script>
import * as echarts from "echarts";
import { chart1,chart2,chart3,chart4,chart5,chart6} from "@/assets/js/homeCharts";
export default {
  data() {
    return {
     
    };
  },
  mounted() {
    console.log(chart1);
    console.log(chart2);
    console.log(chart3);
    console.log(chart4);
    console.log(chart5);
    console.log(chart6);
    this.initEcharts();
  },
  methods: {
    initEcharts() {
    
      const myChart1= echarts.init(this.$refs.chart1);// 图标初始化
      const myChart2 = echarts.init(this.$refs.chart2);
      const mychart3 = echarts.init(this.$refs.chart3);
      const mychart4 = echarts.init(this.$refs.chart4);
      const mychart5 = echarts.init(this.$refs.chart5);
      const mychart6 = echarts.init(this.$refs.chart6);

      mychart6.setOption(chart6)
      mychart5.setOption(chart5)
      mychart4.setOption(chart4)
      mychart3.setOption(chart3)
      myChart2.setOption(chart2)
      myChart1.setOption(chart1);// 渲染页面
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        myChart1.resize();
        myChart2.resize();
        mychart3.resize();
        mychart4.resize();
        mychart5.resize();
        mychart6.resize();
      });
    }
  }
};
</script>

<style>
.el-card__body, .el-main {
  padding: 0px;
}
#mychart1{
    width:90%;
    height:250px;
  }
#mychart2{
  width:100%;
  height:250px; 
}
#mychart{
  width:100%;
  height:250px; 
}
#mychart5{
  height: 250px;
  width:90%;
}
#mychart6{
  height:250px;
  width:100%;
}
</style>
