<template>
  <div>
    <div class="app-header">
      <div class="app-logo">
        <router-link to="/">
          <img src="./assets/logo.png" alt="logo">
        </router-link>
      </div>
      <div class="app-sign">
        <ul>
          <li>{{username}}</li>
          <li v-if="username !==''">|</li>
          <li v-if="username !==''">退出</li>

          <li v-if="username ===''" class="app-log pointer" @click="logClick()">登录</li>
          <li v-if="username ===''">|</li>
          <li v-if="username ===''" class="app-reg pointer" @click="regClick()">注册</li>
          <li>|</li>
          <li class="app-about pointer" @click="aboutClick()">关于</li>
        </ul>
      </div>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-footer">
      <p>© 2016 fishenal MIT</p>
    </div>

    <my-dialog :is-show="isShowLogDialog"
               @on-close="closeDialog('isShowLogDialog')">
      <log-form @has-log="logSuccess"></log-form>
    </my-dialog>

    <my-dialog :is-show="isShowRegDialog"
               @on-close="closeDialog('isShowRegDialog')">
      <reg-form></reg-form>
    </my-dialog>

    <my-dialog :is-show="isShowAboutDialog"
               @on-close="closeDialog('isShowAboutDialog')">
      <p class="about">本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。
      </p>
    </my-dialog>

  </div>
</template>

<script type="text/ecmascript-6">
import myDialog from './components/base/dialog.vue'
import logForm from './components/logForm.vue'
import regForm from './components/regForm.vue'

export default {
  components:{
    myDialog,
    logForm,
    regForm
  },
  data(){
    return{
      isShowLogDialog:false,
      isShowRegDialog:false,
      isShowAboutDialog:false,
      username:''
    }
  },
  methods:{
    logClick(){
      this.isShowLogDialog = true;
    },
    regClick(){
      this.isShowRegDialog = true;
    },
    aboutClick(){
      this.isShowAboutDialog = true;
    },
    closeDialog(attr){
      this[attr] = false;
    },
    logSuccess(data){
      this.username = data;
      this.isShowLogDialog = false;
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
body
  background :#f5f5f5
.app-header
  width: 100%;
  height: 60px;
  background: #333;
  .app-logo
    float:left;
    height: 60px;
    margin-left: 5%;
    img
      width: 50px;
      height: 50px;
      padding:5px 0;
  .app-sign
    float: right;
    margin-right: 5%;
    color:#ddd;
    font-size: 14px;
    height :60px
    line-height: 60px;
    .pointer
      cursor pointer
  ul li
    float:left;
    padding: 0 5px;
.app-content
  width :1200px
  margin :0 auto
.app-footer
  width 100%
  height :50px
  line-height :50px
  text-align :center
  background :#ddd
  margin-top 9px

.about
  font-size 18px
  line-height 25px
  text-indent 18px*2
</style>
