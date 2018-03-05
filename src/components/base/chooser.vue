<template>
  <div class="chooser">
    <ul>
      <li class="chooser-item" v-for="(item,index) in choosers"
          :class="{active:index === nowIndex}"
      @click="itemClick(index)">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props:{
    choosers:{
      type:Array,
      default:[]
    }
  },
  data(){
    return{
      nowIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.nowIndex = index;
      this.$emit('on-params', this.nowIndex);
    }
  }
}
</script>

<style lang="stylus">
.chooser
  display inline-block
  .chooser-item
    display inline-block
    padding 0 10px
    border 1px solid #e3e3e3
    border-radius 5px
    cursor pointer
  .chooser-item + .chooser-item
    margin-left 5px
  .active
    color #fff
    background #6c9
    border none
</style>
