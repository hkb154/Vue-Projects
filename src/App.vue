<template>
  <div class="container">
    <h2>小焦转换器</h2>
    <input v-model="bin" type="text" placeholder="请输入要转换的二进制数字"><br>
    <button @click="change(bin)">转换为十进制</button>
    <div class="output" v-show="isShow">
      结果为：{{dec}}
    </div>    
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      bin: '',
      dec: 0,
      isShow: false
    }
  },
  methods:{
    change(bin){
      let sum = 0;
      let flag = true;
      if(!bin.trim()){
        return alert('输入不能为空');
      }else{
        let n = 0;
        for(let i = bin.length - 1; i >= 0; i--){
          if(bin.charAt(i) !== '0' && bin.charAt(i) !== '1'){
            flag = false;
          }else{
            let temp = bin.charAt(i) * 2 ** n;
            sum += temp;
            n++;
          }
        }
      }
      this.bin = '';
      if(flag){
        this.isShow = true;
        this.dec = sum;
      }else{
        return alert('只能输入0或1');
      }
    }
  }
}
</script>

<style>
.container{
  width: 800px;
  height: 600px;
  margin: auto;
  text-align: center;
  border-radius: 50px;
  background-color: blanchedalmond;
}

h2{
  width: 100%;
  height: 50px;
  background-color: orange;
  text-align: center;
  color: #fff;
  line-height: 50px;
}

input{
  margin-top: 50px;
  width: 400px;
  height: 100px;
  text-align: center;
}

button{
  margin-top: 100px;
  width: 400px;
  height: 80px;
  border-radius: 50px;
  cursor: pointer;
  background-color: #fff;
  border: none;
}

.output{
  width: 400px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  margin: 40px auto;
}
</style>
