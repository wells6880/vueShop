<template>
  <div class="selection">
    <div class="selection-show" @click="listShow()">
      <span>{{selections[nowIndex].label}}</span>
      <div class="arrow"></div>
    </div>
    <div class="selection-list" v-if="isListShow">
      <ul>
        <li v-for="(item,index) in selections"
          @click="itemClick(index)" class="selection-list-item">{{item.label}}</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props:{
    selections:{
      type:Array,
      default:[]
    }
  },
  data(){
    return {
      isListShow: false,
      nowIndex:0
    };
  },
  methods:{
    listShow(){
      this.isListShow = !this.isListShow;
    },
    itemClick(index){
      this.nowIndex = index;
      this.isListShow = false;
      this.$emit('on-params', this.nowIndex);
    }
  }
}
</script>

<style lang="stylus" scoped>
.selection
  display inline-block
  position relative
  .selection-show
    height 30px
    line-height 30px
    padding-left 10px
    border 1px solid #e3e3e3
    border-radius 3px
    cursor pointer
    .arrow
      display: inline-block;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 5px solid #e3e3e3;
      width: 0;
      height: 0;
      margin 5px
      vertical-align middle
  .selection-list
    width calc(100% - 12px)
    border 1px solid #e3e3e3
    padding 5px 0 5px 10px
    line-height 20px
    background #fff
    position absolute
    top 25px
    .selection-list-item
      cursor pointer
</style>
