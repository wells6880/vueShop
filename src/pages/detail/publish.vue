<template>
  <div class="publish">
    <div class="shops">
      <div class="shops-choice">
        <h2>广告发布</h2>
        <p class="shops-choice-summary">广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>
        <div class="shops-choice-types">
          <span class="shops-choice-types-item">购买数量：</span>
          <v-counter @on-params="priceCalc"></v-counter>
        </div>
        <div class="shops-choice-types">
          <span class="shops-choice-types-item">行业：</span>
          <v-selection :selections="tradeList"></v-selection>
        </div>
        <div class="shops-choice-types">
          <span class="shops-choice-types-item">产品版本：</span>
          <v-chooser :choosers="versionList"></v-chooser>
        </div>
        <div class="shops-choice-types">
          <span class="shops-choice-types-item">有效时间：</span>
          <span>半年</span>
        </div>
        <div class="shops-choice-types">
          <span class="shops-choice-types-item">总价：</span>
          <span class="shops-choice-result">{{price + '元'}}</span>
        </div>
        <a class="btn">立即购买</a>
      </div>
      <div class="shops-intro">
        <h2>产品说明</h2>
        <p>广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>

        <table class="shops-intro-table">
          <tbody>
          <tr>
            <td>
              <div>
                <label>安全安保</label>
              </div>
            </td>
            <td>
              <div>
                <label>办公文教</label>
              </div>
            </td>
            <td>
              <div>
                <label>彩票</label>
              </div>
            </td>
            <td>
              <div>
                <label>车辆物流</label>
              </div>
            </td>
            <td>
              <div>
                <label>成人用品</label>
              </div>
            </td>
            <td>
              <div>
                <label>出版传媒</label>
              </div>
            </td>
            <td>
              <div>
                <label>电脑硬件</label>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <label>电子电工</label>
              </div>
            </td>
            <td>
              <div>
                <label>房地产建筑装修</label>
              </div>
            </td>
            <td>
              <div>
                <label>分类平台</label>
              </div>
            </td>
            <td>
              <div>
                <label>服装鞋帽</label>
              </div>
            </td>
            <td>
              <div>
                <label>箱包饰品</label>
              </div>
            </td>
            <td>
              <div>
                <label>化工原料制品</label>
              </div>
            </td>
            <td>
              <div>
                <label>机械设备</label>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <label>家庭日用品</label>
              </div>
            </td>
            <td>
              <div>
                <label>家用电器</label>
              </div>
            </td>
            <td>
              <div>
                <label>教育培训</label>
              </div>
            </td>
            <td>
              <div>
                <label>节能环保</label>
              </div>
            </td>
            <td>
              <div>
                <label>金融服务</label>
              </div>
            </td>
            <td>
              <div>
                <label>礼品</label>
              </div>
            </td>
            <td>
              <div>
                <label>旅游住宿</label>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <label>美容化妆</label>
              </div>
            </td>
            <td>
              <div>
                <label>母婴护理</label>
              </div>
            </td>
            <td>
              <div>
                <label>农林牧渔</label>
              </div>
            </td>
            <td>
              <div>
                <label>软件</label>
              </div>
            </td>
            <td>
              <div>
                <label>商务服务</label>
              </div>
            </td>
            <td>
              <div>
                <label>生活服务</label>
              </div>
            </td>
            <td>
              <div>
                <label>食品保健品</label>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <label>手机数码</label>
              </div>
            </td>
            <td>
              <div>
                <label>通讯服务设备</label>
              </div>
            </td>
            <td>
              <div>
                <label>网络服务</label>
              </div>
            </td>
            <td>
              <div>
                <label>医疗服务</label>
              </div>
            </td>
            <td>
              <div>
                <label>游戏</label>
              </div>
            </td>
            <td>
              <div>
                <label>运动休闲娱乐</label>
              </div>
            </td>
            <td>
              <div>
                <label>招商加盟</label>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import vSelection from '../../components/base/selection.vue';
import vChooser from '../../components/base/chooser.vue';
import vCounter from '../../components/base/counter.vue';

export default {
  components:{
    vSelection,
    vChooser,
    vCounter
  },
  data () {
    return {
      unitPrice: 500,
      price:500,
      tradeList: [
        {
          label: '出版业',
          value: 0
        },
        {
          label: '媒体',
          value: 1
        },
        {
          label: '金融',
          value: 2
        },
        {
          label: '互联网',
          value: 3
        },
        {
          label: '游戏',
          value: 4
        }
      ],
      versionList: [
        {
          label: '初级版',
          value: 0
        },
        {
          label: '中级版',
          value: 1
        },
        {
          label: '高级版',
          value: 2
        },
        {
          label: '专家版',
          value: 3
        }
      ]
    }
  },
  methods:{
    priceCalc(data){
      this.price = this.unitPrice * data;
    }
  }
}
</script>

<style>

</style>
