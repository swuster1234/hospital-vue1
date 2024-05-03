
const chart1 = {
  color:['#188df0', 'rgb(238, 208, 98)'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  legend: {
    data: ['上午', '下午', '就诊趋势']
  },
  xAxis: [
    {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周天'],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '上午',
      min: 0,
      max: 250,
      interval: 50,
      axisLabel: {
        formatter: '{value}'
      }
    },
    {
      type: 'value',
      name: '就诊趋势',
      min: 0,
      max: 25,
      interval: 5,
      axisLabel: {
        formatter: '{value}'
      }
    }
  ],
  series: [
    {
      name: '上午',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value+'人';
        }
      },
      data: [
        2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
      ]
    },
    {
      name: '下午',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' 人';
        }
      },
      data: [
        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
      ]
    },
    {
      name: '就诊趋势',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value +'人';
        }
      },
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    }
  ]
};

const chart2 = {
  //          title: {
  //              text: 'ECharts 入门示例'
  //          },
              tooltip: {},
              legend: {
                  data:['儿科','外科','其他','内科','妇产科','五官科']
              },
              xAxis: {
                  data: ["儿科","外科","其他","内科","妇产科","五官科"]
              },
              yAxis: {},
              series: [
              {
                  name: '儿科',
                  type: 'bar',
                  barGap:'-100%',
                   itemStyle: {
                       normal: {
                          color: '#C1232B'
                      }
                  },
  //              data: [5, 20, 36, 10, 10, 20]
                  data: [5, 0, 0, 0, 0, 0]
              },
              {
                  name: '外科',
                  type: 'bar',
                  barGap:'-100%',
                   itemStyle: {
                       normal: {
                          color: '#B5C334'
                      }
                  },
  //              data: [5, 20, 36, 10, 10, 20]
                  data: [0, 20, 0, 0, 0, 0]
              },
              {
                  name: '其他',
                  type: 'bar',
                  barGap:'-100%',
                   itemStyle: {
                       normal: {
                          color: '#FCCE10'
                      }
                  },
  //              data: [5, 20, 36, 10, 10, 20]
                  data: [0, 0, 36, 0, 0, 0]
              },
              {
                  name: '内科',
                  type: 'bar',
                  barGap:'-100%',
                   itemStyle: {
                       normal: {
                          color: '#E87C25'
                      }
                  },
  //              data: [5, 20, 36, 10, 10, 20]
                  data: [0, 0, 0, 10, 0, 0]
              },
              {
                  name: '妇产科',
                  type: 'bar',
                  barGap:'-100%',
                   itemStyle: {
                       normal: {
                          color: '#27727B'
                      }
                  },
  //              data: [5, 20, 36, 10, 10, 20]
                  data: [0, 0, 0, 0, 10, 0]
              },
              {
                  name: '五官科',
                  type: 'bar',
                  barGap:'-100%',
                   itemStyle: {
                       normal: {
                          color: '#FE8463'
                      }
                  },
  //              data: [5, 20, 36, 10, 10, 20]
                  data: [0, 0, 0, 0, 0, 20]
              },
                {
              name: '访问来源',
              type: 'pie',
              radius : '28%',
              center: ['75%', '35%'],
  //          data:['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子']
  //          data: [5, 20, 36, 10, 10, 20]
  
              data:[
                  {value:5, name:'儿科',itemStyle: {color: '#C1232B'}},
                  {value:20, name:'外科',itemStyle: {color: '#B5C334'}},
                  {value:36, name:'其他',itemStyle: {color: '#FCCE10'}},
                  {value:10, name:'内科',itemStyle: {color: '#E87C25'}},
                  {value:10, name:'妇产科',itemStyle: {color: '#27727B'}},
                  {value:20, name:'五官科',itemStyle: {color: '#FE8463'}}
              ],
              itemStyle: {
                  emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
          }
              ]
          };
  const chart3 = {
    title: {
    
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'category',
      data: ['内科','外科','妇产科','儿科','五官科','其他']
    },
    series: [
      {
        name: '上午',
        type: 'bar',
        data: [180, 234, 290, 104, 131, 630,]
      },
      {
        name: '下午',
        type: 'bar',
        data: [193, 234, 310, 121, 134, 681,]
      }
    ]
  };
 const chart4  = {
  title: {
    left: 'center',
    top: 20,
    textStyle: {
      color: 'rgb(0, 0, 0)'
    }
  },
  tooltip: {
    trigger: 'item'
  },
  visualMap: {
    show: false,
    min: 80,
    max: 600,
    inRange: {
      colorLightness: [0, 1]
    }
  },
  series: [
    {
      color:'rgb(0, 0, 0)',
      name: 'Access From',
      type: 'pie',
      radius: '55%',
      center: ['50%', '50%'],
      data: [
        { value: 335, name: '内科手术室' },
        { value: 310, name: '外科手术室' },
        { value: 274, name: '妇产科手术室' },
        { value: 235, name: '儿科手术室' },
        { value: 400, name: '其他手术室' }
      ].sort(function (a, b) {
        return a.value - b.value;
      }),
      roseType: 'radius',
      label: {
        color: 'rgba(255, 255, 255, 1.0)'
      },
      labelLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 1.0)'
        },
        smooth: 0.2,
        length: 10,
        length2: 20
      },
      itemStyle: {
        color:'rgb(37, 205, 152)',
        shadowBlur: 200,
        shadowColor: 'rgba(0, 0, 0)'
      },
      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return Math.random() * 200;
      }
    }
  ]
};
const chart5  = {
  color:['#188df0', 'rgb(238, 208, 98)'],
  legend: {
    data: ['上午', '下午']
  },
  radar: {
    // shape: 'circle
    indicator: [
      { name: '其他', max: 650,color:'#fff'},
      { name: '五官科', max: 360,color:'#fff'},
      { name: '儿科', max: 300,color:'#fff'},
      { name: '妇产科', max: 380,color:'#fff'},
      { name: '外科', max: 520,color:'#fff'},
      { name: '内科', max: 250,color:'#fff'}
    ]
  },
  series: [
    {
      name: '',
      type: 'radar',
      data: [
        {
          value: [420, 300, 200, 350, 500, 180],
          name: '上午'
        },
        {
          value: [500, 140, 280, 260, 420, 210],
          name: '下午'
        }
      ]
    }
  ]
};
const chart6 = {
  title: {
     
      x: 'center',
      y: '47%',
      textStyle: {
          fontSize:18,
          fontWeight:'normal',
          color: ['#333']
      },
      subtextStyle: {
          color: '#f1bb4c',
          fontSize: 16
      },
  },
  grid: {
      bottom: 150,
      left: 0,
      right: '10%'
  },
  legend: {
      show:false,
      orient: 'vertical',
      top: "middle",
      right: "5%",
      textStyle: {
          color: '#f2f2f2',
          fontSize: 25,

      },
      icon: 'roundRect'
  },
  series: [
      // 主要展示层的
      {
          radius: ['29%', '59%'],
          center: ['50%', '50%'],
          type: 'pie',
          itemStyle: {
              normal: {
                  color: function(params) {
                    var  colorList=['#afa3f5', '#00d488', '#3feed4', '#3bafff', '#f1bb4c','#aff', "rgba(250,250,250,0.5)"];
                      return colorList[params.dataIndex]
                  }
              }
          },
          labelLine: {
              normal: {
                  show: true,
                  length: 35,
                  length2: 45,
                  lineStyle: {
                      color: '#d3d3d3'
                  },
                  align: 'right'
              },
              color: "#000",
              emphasis: {
                  show: true
              }
          },
          label:{
              normal:{
                  formatter: function(params){
                      var str = '';
                      switch(params.name){
                          case '儿科':str = '儿科'+params.value;break;
                          case '五官科':str = '五官科'+params.value;break;
                          case '外科':str = '外科'+params.value;break;
                          case '其他':str = '其他'+params.value;break;
                          case '内科':str = '内科 '+params.value;break;
                          case '妇产科':str = '妇产科'+params.value;break;
                      }
                      return str
                  },
                  padding: [0, -90],
                  height: 35,
                  rich: {
                      a: {
                          width:38,
                          height:38,
                          lineHeight: 50,

                          align: 'left'
                      },
                      b: {
                          width:29,
                          height:45,
                          lineHeight: 50,
                          align: 'left'
                      },
                      c: {
                          width:34,
                          height:33,
                          lineHeight: 50,

                          align: 'left'
                      },
                      d: {
                          width:34,
                          height:44,
                          lineHeight: 50,
                          align: 'left'
                      },
                      e: {
                          width:38,
                          height:30,
                          lineHeight: 50,
                          align: 'left'
                      },
                      nameStyle: {
                          fontSize: 16,
                          color: "#555",
                          align: 'left'
                      },
                      rate: {
                          fontSize: 20,
                          color: "#1ab4b8",
                          align: 'left'
                      }
                  }
              }
          },
          data: [
              {
                  value:17,
                  name:'烟雾传感器',
              },
              {value:23, name:'儿科'},
              {value:27, name:'外科'},
              {value:33, name:'其他'},
              {value:9, name:'内科'},
              {value:9, name:'妇产科'}],
      },
      // 边框的设置
      {
          radius: ['54%', '59%'],
          center: ['50%', '50%'],
          type: 'pie',
          label: {
              normal: {
                  show: false
              },
              emphasis: {
                  show: false
              }
          },
          labelLine: {
              normal: {
                  show: false
              },
              emphasis: {
                  show: false
              }
          },
          animation: false,
          tooltip: {
              show: false
          },
          itemStyle: {
              normal: {
                  color:'rgba(250,250,250,0.5)'
              }
          },
          data: [{
              value: 1,
          }],
      }
  ]
};
  export {chart1,chart2,chart3,chart4,chart5,chart6};