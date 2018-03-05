<template>
  <div class="chooser">
    <ul>
      <li class="chooser-item" v-for="(item,index) in choosers"
          :class="{active:nowIndexs.indexOf(index) > -1}"
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
      nowIndexs:[0]
    }
  },
  methods:{
    itemClick(index){
      if(this.nowIndexs.indexOf(index) === -1){
        this.nowIndexs.push(index);
      }
      else {
        this.nowIndexs.splice(this.nowIndexs.indexOf(index), 1);
      }
      this.$emit('on-params', this.nowIndexs);
    }
  }
}
</script>

<style>

</style>
