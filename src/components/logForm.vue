<template>
  <div class="log-form">
    <div class="log-form-col">
      <label for="username" class="log-form-label">用户名：</label>
      <input id="username" type="text" class="log-form-input"
      v-model="usernameModel">
    </div>
    <div class="log-form-col">
      <label for="password" class="log-form-label">密码：</label>
      <input id="password" type="text" class="log-form-input"
      v-model="passwordModel">
    </div>
    <div class="log-form-col">
      <a class="logBtn" @click="validate()">登录</a>
      <span class="log-form-err log-form-logErr">{{validateErrText}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data(){
    return{
      user:[
        {
          username:'wells@',
          password:'123456'
        },
        {
          username:'zhang@',
          password:'111111'
        },
        {
          username:'@',
          password:'111111'
        }
      ],
      usernameModel:'',
      passwordModel:'',
      usernameErrText:'',
      validateErrText:''
    }
  },
  methods:{
    validate() {
      let i=0;
      for (i;i<this.user.length;i++) {
        if (this.usernameModel === this.user[i].username &&
          this.passwordModel === this.user[i].password) {
          this.validateErrText = '';
          let timer = setTimeout(()=>{
            alert('登录成功');
            this.$emit('has-log',this.usernameModel);
          }, 10);
          break;
        }
      }
      if(i===this.user.length){
        this.validateErrText = '用户名、密码不正确'
      }
    }
  }
}

</script>

<style lang="stylus">
.log-form
  .log-form-col
    width 100%
    height 60px
    line-height 60px
    margin-left 30px
    .log-form-label
      display inline-block
      width 80px
      font-size 20px
    .log-form-input
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
    .log-form-err
      color red
    .log-form-logErr
      position absolute
      left 130px
</style>
