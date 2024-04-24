<template>
  <div class="about">
    <el-container>
      <el-aside class="pationce-aside" width="400px">
        <h1 class="patience-h1">病人基础信息</h1>
        <el-input v-model="input" placeholder="请输入病人信息"></el-input>
        <div>
          <p>姓名：{{ patientInfo.name }}</p>
          <p>年龄：{{ patientInfo.age }}</p>
          <p>性别：{{ patientInfo.gender }}</p>
          <p>地址：{{ patientInfo.address }}</p>
          <p>电话：{{ patientInfo.phone }}</p>
        </div>
      </el-aside>
      <el-container>
        <el-header class="pationce-header">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">病历信息</el-menu-item>
            <el-submenu index="2">
              <template slot="title">检查科室</template>
              <el-menu-item index="2-1">血液科</el-menu-item>
              <el-menu-item index="2-2">牙科</el-menu-item>
              <el-menu-item index="2-3">皮肤科</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">内科</template>
                <el-menu-item index="2-4-1">呼吸科</el-menu-item>
                <el-menu-item index="2-4-2">心血管内科</el-menu-item>
                <el-menu-item index="2-4-3">消化内科</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="3">手术记录</el-menu-item>
            <el-menu-item index="4">缴费记录</el-menu-item>
          </el-menu>
          <div class="line"></div>
        </el-header>
        <el-main class="pationce-main">
          <div v-if="activeIndex === '1'">
<!--            <h4>病历信息</h4>-->
            <el-table :data="medicalRecords" style="width: 100%">
              <el-table-column prop="date" label="日期" width="180"></el-table-column>
              <el-table-column prop="department" label="科室" width="180"
                               :filters="[{text: '内科', value: '内科'}, {text: '妇产科', value: '妇产科'}, {text: '儿科', value: '儿科'}, {text: '急诊科', value: '急诊科'},{text: '眼科', value: '眼科'},{text: '肿瘤科', value: '肿瘤科'},{text: '耳鼻喉科', value: '耳鼻喉科'}]"
                               :filter-method="filterHandler">

              </el-table-column>
              <el-table-column prop="doctor" label="医生"></el-table-column>
              <el-table-column prop="diagnosis" label="诊断"></el-table-column>
              <el-table-column prop="treatment" label="治疗"></el-table-column>
            </el-table>
          </div>
          <!-- 其他数据显示区域 -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: '',
      activeIndex: '1',
      patientInfo: {
        name: '张三',
        age: 30,
        gender: '男',
        address: '北京市朝阳区',
        phone: '13800138000'
      },
      medicalRecords: [
        {
          date: '2023-01-15',
          department: '内科',
          doctor: '李医生',
          diagnosis: '普通感冒',
          treatment: '休息，多喝水，药物治疗'
        },
        {date: '2023-02-10',
         department: '外科', 
         doctor: '王医生', 
         diagnosis: '右脚扭伤',
          treatment: '冷敷，包扎，休息'
        },
        {
          date: '2023-03-01',
          department: '妇产科',
          doctor: '张医生',
          diagnosis: '怀孕初期',
          treatment: '定期检查，注意饮食和休息'
        },
        {
          date: '2023-04-15',
          department: '儿科',
          doctor: '赵医生',
          diagnosis: '呼吸道感染',
          treatment: '抗生素治疗，多喝水，注意保暖'
        },
        {
          date: '2023-05-05',
          department: '急诊科',
          doctor: '刘医生',
          diagnosis: '食物中毒',
          treatment: '洗胃，静脉输液，注意饮食卫生'
        },
        {
          date: '2023-06-20',
          department: '眼科',
          doctor: '孙医生',
          diagnosis: '近视',
          treatment: '配戴眼镜，定期检查视力'
        },
        {
          date: '2023-07-08',
          department: '耳鼻喉科',
          doctor: '周医生',
          diagnosis: '中耳炎',
          treatment: '抗生素治疗，保持耳朵清洁'
        },
        {
          date: '2023-08-25',
          department: '皮肤科',
          doctor: '吴医生',
          diagnosis: '湿疹',
          treatment: '外用药物，避免过敏原'
        },
        {
          date: '2023-09-10',
          department: '消化科',
          doctor: '陈医生',
          diagnosis: '胃溃疡',
          treatment: '药物治疗，调整饮食习惯'
        },
        {
          date: '2023-10-05',
          department: '肿瘤科',
          doctor: '徐医生',
          diagnosis: '甲状腺结节',
          treatment: '定期检查，必要时手术治疗'
        },
        {
          date: '2023-11-10',
          department: '康复科',
          doctor: '胡医生',
          diagnosis: '骨折恢复',
          treatment: '物理治疗，康复训练'
        }
      ],
      surgeryRecords: [

        {
          date: '2022-11-20',
          department: '骨科',
          doctor: '赵医生',
          surgeryType: '骨折修复手术',
          outcome: '手术成功，恢复良好'
        }
      ],
      paymentRecords: [
        {date: '2023-01-01', type: '挂号费', amount: 50},
        {date: '2023-01-15', type: '药费', amount: 200},
        {date: '2023-02-10', type: '检查费', amount: 300}
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = key;
    },
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    }
  }
};
</script>

<style>
.patience-h1 {
  height: 20px;
  line-height: 20px;
  font-size: 18px;
  text-align: center;
}

.pationce-aside {
  background-color: #f9f9f9;
  padding: 20px;
}

.pationce-header {
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
}

.pationce-main {
  background-color: #fff;
  padding: 20px;
}

el-card__body, .el-main {
  padding: 0px;
}

.el-header {
  padding: 0px;
}
</style>
