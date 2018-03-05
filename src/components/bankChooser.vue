<template>
  <div class="bank-chooser">
    <ul>
      <li v-for="(item,index) in banks" class="bank-chooser-img"
          :class="['bank-chooser-' + item.name,{active:index ===nowIndex}]"
      @click="bankClick(index)"></li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data(){
    return{
      nowIndex: null,
      banks: [
        {
          id: 201,
          label: '招商银行',
          name: 'zhaoshang'
        },
        {
          id: 301,
          label: '中国建设银行',
          name: 'jianshe'
        },
        {
          id: 601,
          label: '浦发银行',
          name: 'pufa'
        },
        {
          id: 1101,
          label: '交通银行',
          name: 'jiaotong'
        },
        {
          id: 101,
          label: '中国工商银行',
          name: 'gongshang'
        },
        {
          id: 401,
          label: '中国农业银行',
          name: 'nongye'
        },
        {
          id: 1201,
          label: '中国银行',
          name: 'zhongguo'
        },
        {
          id: 501,
          label: '中信银行',
          name: 'zhongxin'
        }
      ]
    }
  },
  methods:{
    bankClick(index){
      this.nowIndex = index;
    }
  }
}
</script>

<style lang="stylus" scoped>
.bank-chooser
  ul
    .bank-chooser-img
      display inline-block
      width 117px
      height 32px
      background url("../assets/banks/banks.png")
      border 1px solid #e3e3e3
      margin 5px
    .bank-chooser-zhaoshang
      background-position: -2160px 0;
    .bank-chooser-jianshe
      background-position: -720px 0;
    .bank-chooser-pufa
      background-position: -1800px 0;
    .bank-chooser-jiaotong
      background-position: -3120px 0;
    .bank-chooser-gongshang
      background-position: -2640px 0;
    .bank-chooser-nongye
      background-position: -1680px 0;
    .bank-chooser-zhongguo
      background-position: -2520px 0;
    .bank-chooser-zhongxin
      background-position: -480px 0;
    .active
      border 1px solid #6c9
</style>
