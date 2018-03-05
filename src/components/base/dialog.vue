<template>
  <div class="dialog">
    <div class="dialog-cover" v-if="isShow" @click="closeMyself()"></div>
    <transition name="drop">
      <div class="dialog-content" v-if="isShow">
        <p class="dialog-close" @click="closeMyself()">x</p>
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props:{
    isShow:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {

    }
  },
  methods:{
    closeMyself(){
      this.$emit('on-close');
    }
  }
}
</script>

<style lang="stylus" scoped>
.drop-enter,.drop-leave-to
  transform translateY(-1000px)
.drop-enter-active,.drop-leave-active
  transition all .5s ease

.dialog
  .dialog-cover
    width 100%
    height 100%
    position fixed
    left 0
    top 0
    background #c0c0c0
    opacity .3
    z-index 10
  .dialog-content
    width 800px
    padding 20px
    border: 2px solid #6c9
    background white
    box-shadow 1px 1px 1px 0 #c0c0c0
    position fixed
    left 50%
    margin-left -400px
    top 200px
    z-index 20
    .dialog-close
      width 20px
      height 20px
      position absolute
      right 0
      top 5px
      cursor pointer
</style>
