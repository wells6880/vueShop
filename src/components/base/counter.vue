<template>
  <div class="counter">
    <span class="counter-cal" @click="minus()">-</span><input class="counter-num" type="text" v-model="numModel" @keyup="numRg()"><span class="counter-cal" @click="plus()">+</span>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data(){
    return{
      numModel:1
    }
  },
  computed:{
    numRange(){
      if(this.numModel < 1){
        this.numModel = 1;
      }
      if(this.numModel > 99){
        this.numModel = 99;
      }
      return this.numModel
    }
  },
  methods:{
    minus(){
      this.numModel -= 1;
      this.numRange;
      this.$emit('on-params',this.numModel)
    },
    plus(){
      this.numModel += 1;
      this.numRange;
      this.$emit('on-params',this.numModel)
    },
    numRg(){
      this.numRange;
      this.$emit('on-params',this.numModel)
    }
  },
}
</script>

<style lang="stylus" scoped>
.counter
  display inline-block
  height 30px
  border 1px solid #e3e3e3
  .counter-cal
    display inline-block
    width 25px
    line-height 30px
    text-align center
    cursor pointer
  .counter-num
    width 30px
    line-height 30px
    vertical-align top
    border none
    border-left 1px solid #e3e3e3
    border-right 1px solid #e3e3e3
    text-align center
</style>
