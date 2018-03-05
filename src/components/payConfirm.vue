<template>
  <div class="confirm">
    <p class="confirm-content">请确认是否支付完成</p>
    <div class="confirm-btns">
      <a class="confirm-btn">已支付</a>
      <a class="confirm-btn">未支付</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style lang="stylus" scoped>
.confirm
  .confirm-btns
    text-align right
    margin-top 10px
    .confirm-btn
      display inline-block
      padding 10px 20px
      background #6c9
      color #fff
      cursor pointer
</style>
