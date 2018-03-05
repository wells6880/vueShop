<template>
  <div class="reg-form">
    <div class="reg-form-col">
      <label for="username" class="reg-form-label">用户名：</label>
      <input id="username" type="text" class="reg-form-input"
             v-model="usernameModel">
      <span class="reg-form-err">{{usernameErr.errText}}</span>
    </div>
    <div class="reg-form-col">
      <label for="password" class="reg-form-label">密码：</label>
      <input id="password" type="text" class="reg-form-input"
             v-model="passwordModel">
      <span class="reg-form-err">{{passwordErr.errText}}</span>
    </div>
    <div class="reg-form-col">
      <a class="logBtn" @click="register()">注册</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data(){
    return{
      usernameModel:'',
      passwordModel:'',
//      usernameErrText:'',
//      passwordErrText:''
    }
  },
  computed:{
    usernameErr(){
      let errText,status;
      if (this.usernameModel.indexOf('@') >= 0){
        errText = '';
        status = true;
      }
      else {
        errText = '请输入包含@的用户名';
        status = false;
      }
      return{
        errText,
        status
      }
    },
    passwordErr(){
      let errText,status;
      if (this.passwordModel.length >= 6 &&
        this.passwordModel.length < 12){
        errText = '';
        status = true;
      }
      else {
        errText = '请输入6-12位密码';
        status = false;
      }
      return{
        errText,
        status
      }
    }
  },
  methods:{
    register(){
      if (this.usernameErr.status && this.passwordErr.status){
        alert('注册成功')
      }
    }
  }
}
</script>

<style lang="stylus">
.reg-form
  .reg-form-col
    width 100%
    height 60px
    line-height 60px
    margin-left 30px
    .reg-form-label
      display inline-block
      width 80px
      font-size 20px
    .reg-form-input
      width 200px
      height 25px
    .logBtn
      padding 10px 30px
      color white
      background #6c9
      border none
      border-radius 3px
      margin-left 350px
      cursor pointer
    .reg-form-err
      color red
</style>
