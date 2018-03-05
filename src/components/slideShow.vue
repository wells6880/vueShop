<template>
  <div class="slide-show"
       @mouseover="clearAutoPlay()" @mouseout="autoPlay()">
    <div class="slide-show-img">
      <a :href="products[nowIndex].href">
        <transition name="slide-trans">
          <img v-if="isShow" :src="products[nowIndex].src">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="products[nowIndex].src">
        </transition>
      </a>
    </div>
    <h2>{{products[nowIndex].title}}</h2>
    <div class="slide-show-num">
      <ul>
        <li v-for="(item,index) in products" @click="goTo(index)"
        :class="{active:index === nowIndex}">
          {{index + 1}}
        </li>
      </ul>
    </div>
    <div class="slide-show-arrow">
      <span class="slide-show-arrow-base slide-show-arrow-left"
      @click="goTo(preIndex)"> < </span>
      <span class="slide-show-arrow-base slide-show-arrow-right"
            @click="goTo(nextIndex)"> > </span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props:{
    products:Array,
    default:[]
  },
  data(){
    return{
      nowIndex:0,
      timer:true,
      isShow:true
    }
  },
  computed:{
    preIndex(){
      if(this.nowIndex === 0){
        return this.products.length - 1;
      }
      else {
        return this.nowIndex - 1;
      }
    },
    nextIndex(){
      if(this.nowIndex === this.products.length - 1){
        return 0;
      }
      else{
        return this.nowIndex + 1;
      }
    }
  },
  methods:{
    goTo(index){
      this.isShow = false;
      setTimeout(() => {
        this.isShow = true;
        this.nowIndex = index;
      }, 10);
    },
    autoPlay(){
      this.timer=setInterval(()=>{
        this.goTo(this.nextIndex);
      },2000)
    },
    clearAutoPlay(){
      clearInterval(this.timer)
    }
  },
  mounted(){
    this.autoPlay();
  }
}
</script>

<style lang="stylus" scoped>
.slide-trans-enter-active
  transition : all .5s
.slide-trans-enter
  transform: translateX(900px);
.slide-trans-old-leave-active
  transition: all .5s;
  transform: translateX(-900px)

.slide-show
  width :890px
  height :400px
  margin-top :10px
  margin-left :10px
  position :relative
  overflow hidden
  .slide-show-img
    img
      width :890px
      height :400px
      position: absolute;
      top: 0;
  h2
    position :absolute
    left: 20px
    bottom:20px
    font-size :20px
    font-weight :normal
    color white
  .slide-show-num
    position :absolute
    right :20px
    bottom :10px
    background :rgba(0,0,0,0.5)
    z-index :10
    ul
      li
        float :left
        padding :5px 10px
        color white
        cursor :pointer
      li:hover
        color red
      .active
        color red
  .slide-show-arrow
    .slide-show-arrow-base
      display :inline-block
      width 30px
      height 50px
      line-height 50px
      text-align center
      background :#000000
      opacity 0.6
      cursor pointer
      font-size :30px
      color white
      position :absolute
      top: 0
      bottom:0
      margin :auto
    .slide-show-arrow-base:hover
      opacity 0.8
    .slide-show-arrow-left
      left :10px
    .slide-show-arrow-right
      right :10px
</style>
