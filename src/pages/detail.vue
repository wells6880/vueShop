<template>
  <div class="detail">
    <div class="detail-left">
      <div class="detail-product">
        <div class="detail-product-img"
        :class="'detail-product-img-' + productImg"></div>
        <ul v-for="(item,index) in products">
          <router-link :to="{path:item.toKey}" tag="li"
                       class="detail-product-item"
                       active-class="active">
            {{item.title}}
          </router-link>
        </ul>
      </div>
    </div>
    <div class="detail-right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>


</template>

<script type="text/ecmascript-6">
export default {
  data(){
    return{
      nowIndex:0,
      products: [
        {
          title: '流量分析',
          description: '开放产品是一款开放产品',
          id: 'car',
          toKey: 'analysis',
          src: require('../assets/slideShow/pic1.jpg')
        },
        {
          title: '数据统计',
          description: '品牌营销帮助你的产品更好地找到定位',
          id: 'earth',
          toKey: 'count',
          src: require('../assets/slideShow/pic2.jpg')
        },
        {
          title: '数据预测',
          description: '使命必达快速迭代永远保持最前端的速度',
          id: 'loud',
          toKey: 'forecast',
          src: require('../assets/slideShow/pic3.jpg')
        },
        {
          title: '广告发布',
          description: '帮你勇闯高峰，到达事业的顶峰',
          id: 'hill',
          toKey: 'publish',
          src: require('../assets/slideShow/pic4.jpg')
        }
      ],
    imgMap:{
      '/detail/analysis': 'car',
      '/detail/count': 'earth',
      '/detail/forecast': 'loud',
      '/detail/publish': 'hill'
      }
    }
  },
  computed:{
    productImg(){
      return this.imgMap[this.$route.path];
    }
  }
}
</script>

<style lang="stylus">
.detail
  margin-top 20px
  overflow hidden
  .detail-left
    float left
    width 200px
    .detail-product
      width 100%
      background #fff
      overflow hidden
      padding-bottom  20px
      .detail-product-img
        width 100px
        height 100px
        margin  20px 50px
      .detail-product-img-car
        background url('../assets/images/1.png')
      .detail-product-img-earth
        background url('../assets/images/2.png')
      .detail-product-img-loud
        background url('../assets/images/3.png')
      .detail-product-img-hill
        background url('../assets/images/4.png')
      .detail-product-item
        padding-left 20px
        height 35px
        line-height 35px
        cursor pointer
      .active
        color #fff
        background #6c9
  .detail-right
    float right
    width 1000px

/*detail下面子组件公用样式*/
.shops
  width 980px
  margin-left 20px
  .shops-choice
    background #fff
    overflow hidden
    padding-bottom 20px
    h2
      font-size 20px
      font-weight normal
      margin 20px
    .shops-choice-summary
      margin-top 20px
      background rgb(247,252,255)
      color #777
      font-size 14px
      line-height 25px
      padding 10px 20px
    .shops-choice-types
      height 32px
      line-height 32px
      margin-left 20px
      margin-top 20px
      .shops-choice-types-item
        display inline-block
        width 100px
    .btn
      display inline-block
      padding 10px 20px
      background #6c9
      margin 20px 0 20px 120px
      color #fff
      cursor pointer
  .shops-intro
    margin-top 20px
    background #fff
    overflow hidden
    padding 20px
    font-size 14px
    line-height 20px
    h2
      font-size 20px
      font-weight normal
      margin-bottom 20px
    h3
      font-size 20px
      margin 20px 0

.shops-intro-table
  margin-top 20px
  border 1px solid #ddd
  border-collapse:collapse
  td
    width 120px
    height 50px
    text-align center
    line-height 50px
  tr + tr
    border-top 1px solid #ddd
  td + td
    border-left 1px solid #ddd
</style>
