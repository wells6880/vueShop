<template>
  <div class="index">
      <div class="left">
        <div class="left-block">
          <h2>全部产品</h2>
          <div v-for="product in productList" class="product-type">
            <h3>{{product.title}}</h3>
            <ul>
              <li v-for="item in product.list" class="product-item">
                <a :href="item.url">{{item.name}}</a>
                <span v-if="item.hot" class="hot-tag">HOT</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="left-block left-block-new">
          <h2>最新产品</h2>
          <ul class="new-product">
            <li v-for="item in newsList">
              <a :href="item.url">{{item.name}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <slide-show :products="products"></slide-show>
        <div class="board" v-for="(item,index) in products">
          <div class="board-item">
            <div class="board-item-logo"
                 :class="'board-item-logo-' + item.id"></div>
            <div class="board-item-content">
              <h2>{{item.title}}</h2>
              <p>{{item.description}}</p>
              <router-link :to="{path:'detail/'+ item.toKey}">点击购买</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import slideShow from '../components/slideShow.vue'

export default {
  components:{
    slideShow
  },
  data () {
    return {
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
      newsList: [
        {
          name: '数据统计',
          url: 'http://starcraft.com'
        },
        {
          name: '数据预测',
          url: 'http://warcraft.com'
        },
        {
          name: '流量分析',
          url: 'http://overwatch.com',
          hot: true
        },
        {
          name: '广告发布',
          url: 'http://hearstone.com'
        }
      ],
      productList: {
        pc: {
          title: 'PC产品',
          list: [
            {
              name: '数据统计',
              url: 'http://starcraft.com'
            },
            {
              name: '数据预测',
              url: 'http://warcraft.com'
            },
            {
              name: '流量分析',
              url: 'http://overwatch.com',
              hot: true
            },
            {
              name: '广告发布',
              url: 'http://hearstone.com'
            }
          ]
        },
        app: {
          title: '手机应用类',
          last: true,
          list: [
            {
              name: '91助手',
              url: 'http://weixin.com'
            },
            {
              name: '产品助手',
              url: 'http://twitter.com',
              hot: true
            },
            {
              name: '智能地图',
              url: 'http://maps.com'
            },
            {
              name: '团队语音',
              url: 'http://phone.com'
            }
          ]
        }
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.index
  /*width :1200px*/
  overflow :hidden
  .left
    float:left
    .left-block
      width :300px
      height 350px
      box-shadow :0 0 1px #ddd
      margin-top :10px
      background :#fff
      a//.left-block内所有a标签字体颜色
        color:#000
      h2
        background :#6c9
        color:white
        font-size :18px
        font-weight :normal
        padding:5px
      .product-type
        padding-left:10px
        margin-bottom :10px
        h3
          font-size :16px
          margin :10px 0
        ul
          margin-left :10px
          .product-item
            line-height 20px
            .hot-tag
              font-size 12px
              color white
              background red
              padding 0 1px
      .product-type + .product-type
        border-top :1px solid #c0c0c0
    .left-block-new
      height :460px
    .new-product
      margin :10px 20px
      line-height 20px
  .right
    float :left
    width :900px
    .board
      .board-item
        width :440px
        height:200px
        background :#fff
        float :left
        margin-left:10px
        margin-top:10px
        .board-item-logo
          width :100px
          height :100px
          float:left
          margin:50px 20px
        .board-item-logo-car
          background :url("../assets/images/1.png") no-repeat
        .board-item-logo-earth
          background :url("../assets/images/2.png") no-repeat
        .board-item-logo-loud
          background :url("../assets/images/3.png") no-repeat
        .board-item-logo-hill
          background :url("../assets/images/4.png") no-repeat
        .board-item-content
          float :left
          width :250px
          h2
            font-size :18px
            margin-top:20px
          p
            height :50px
            font-size :16px
            margin-top :20px
          a
            display :inline-block
            /*width :90px*/
            /*height :35px*/
            /*text-align :center*/
            /*line-height :35px*/
            background :#6c9
            color:white
            margin-top :5px
            padding :10px 20px
</style>
