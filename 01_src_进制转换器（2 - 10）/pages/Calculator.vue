<template>
  <div class="container">
    <div class="box">
      <h1>小焦转换器</h1>
      <div class="input-box">
        <el-input class="cal-int" placeholder="请输入要转换的二进制数字" v-model="bin" clearable></el-input>
        <el-button class="cal-btn" @click="change(bin)" type="primary" icon="el-icon-thumb" circle></el-button>
      </div>
      <div class="output" v-show="isShow">{{oldValue}}转换成十进制为：{{ dec }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      bin: "",
      dec: 0,
      oldValue: '',
      isShow: false,
    };
  },
  methods: {
    change(bin) {
      let sum = 0;
      let flag = true;
      if (!bin.trim()) {
        return alert("输入不能为空");
      } else {
        let n = 0;
        for (let i = bin.length - 1; i >= 0; i--) {
          if (bin.charAt(i) !== "0" && bin.charAt(i) !== "1") {
            flag = false;
          } else {
            let temp = bin.charAt(i) * 2 ** n;
            sum += temp;
            n++;
          }
        }
      }
      this.oldValue = this.bin;
      this.bin = "";
      if (flag) {
        this.isShow = true;
        this.dec = sum;
      } else {
        return alert("只能输入0或1");
      }
    },
  },
};
</script>

<style scoped>
.container{
    width: 100%;
    height: 100%;
    background: url('../assets/imgs/2.png') no-repeat center right;
    position: relative;
}

.box{
    width: 400px;
    /* height: 400px; */
    background-color: rgba(255, 255, 255, 0.7);
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 20px;
    transform: translate(-50%, -50%);
    padding: 20px;
}

h1{
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
    color: #B58F5A;
    font-weight: bold;
    font-family: STCaiyun;
    letter-spacing: 3px;
}

.input-box{
    display: flex;
}

.cal-int{
    margin-right: 20px;
}

.cal-int :hover{
    border-color: #cdac7f;
}

.output{
    margin-top: 20px;
    color: #B58F5A;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
}

.cal-btn{
    background-color: #cdac7f;
    border-color: #cdac7f;
}

</style>