<template>
  <div class="shops">
    <div class="shops-choice">
      <h2>流量分析</h2>
      <p class="shops-choice-summary">是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的
      </p>
      <div class="shops-choice-types">
        <span class="shops-choice-types-item">购买数量：</span>
        <v-counter @on-params="priceCalc"></v-counter>
      </div>
      <div class="shops-choice-types">
        <span class="shops-choice-types-item">产品类型：</span>
        <v-selection :selections="buyTypes" @on-params="getType"></v-selection>
      </div>
      <div class="shops-choice-types">
        <span class="shops-choice-types-item">有效时间：</span>
        <v-chooser :choosers="periodList" @on-params="getPeriod"></v-chooser>
      </div>
      <div class="shops-choice-types">
        <span class="shops-choice-types-item">产品版本：</span>
        <v-mul-chooser :choosers="versionList" @on-params="getVersions"></v-mul-chooser>
      </div>
      <div class="shops-choice-types">
        <span class="shops-choice-types-item">总价：</span>
        <span class="shops-choice-result">{{price + '元'}}</span>
      </div>
      <a class="btn" @click="showPayDialog()">立即购买</a>
    </div>
    <div class="shops-intro">
      <h2>产品说明</h2>
      <p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>

      <h3>用户行为指标</h3>
      <ul>
        <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
        <li>用户在网站的停留时间；</li>
        <li>用户来源网站（也叫“引导网站”）；</li>
        <li>用户所使用的搜索引擎及其关键词；</li>
        <li>在不同时段的用户访问量情况等。</li>
      </ul>

      <h3>浏览网站方式</h3>
      <ul>
        <li>用户上网设备类型</li>
        <li>用户浏览器的名称和版本</li>
        <li>访问者电脑分辨率显示模式</li>
        <li>用户所使用的操作系统名称和版本</li>
        <li>用户所在地理区域分布状况等</li>
      </ul>
    </div>

    <my-dialog :is-show="isShowPayDialog" @on-close="closeDia('isShowPayDialog')">
      <table class="order-table">
        <tr>
          <th>购买数量</th>
          <th>产品类型</th>
          <th>有效时间</th>
          <th>产品版本</th>
          <th>总价</th>
        </tr>
        <tr>
          <td>{{ orderNum }}</td>
          <td>{{ orderType.label }}</td>
          <td>{{ orderPeriod.label }}</td>
          <td>
            <span class="order-table-ver" v-for="item in orderVersionList">{{ item.label }}</span>
          </td>
          <td>{{ price }}</td>
        </tr>
      </table>
      <h3>请选择银行</h3>
      <v-bank-chooser></v-bank-chooser>
      <div class="order-btn" @click="showPayConfirm()">
        确认购买
      </div>
    </my-dialog>

    <my-dialog :is-show="isShowPayConfirm" @on-close="closeDia('isShowPayConfirm')">
      <div class="confirm">
        <p class="confirm-content">请确认是否支付完成</p>
        <div class="confirm-btns">
          <a class="confirm-btn" @click="showSuccess()">已支付</a>
          <a class="confirm-btn" @click="showFail()">未支付</a>
        </div>
      </div>
    </my-dialog>

    <my-dialog :is-show="isShowSuccessMsg" @on-close="toOrderList('isShowSuccessMsg')">
      支付成功
      <a class="order-btn" @click="toOrderList('isShowSuccessMsg')">确定</a>
    </my-dialog>

    <my-dialog :is-show="isShowFailMsg" @on-close="toOrderList('isShowFailMsg')">
      支付失败
      <a class="order-btn" @click="toOrderList('isShowFailMsg')">确定</a>
    </my-dialog>


  </div>
</template>

<script type="text/ecmascript-6">
import vSelection from '../../components/base/selection.vue';
import vChooser from '../../components/base/chooser.vue';
import vMulChooser from '../../components/base/mulChooser.vue';
import vCounter from '../../components/base/counter.vue';
import myDialog from '../../components/base/dialog.vue'
import vBankChooser from '../../components/bankChooser.vue';


export default {
  components:{
    vSelection,
    vChooser,
    vMulChooser,
    vCounter,
    myDialog,
    vBankChooser,
  },
  data () {
    return {
      unitPrice: 678,
      price:678,
      orderNum:1,
      orderType:{},
      orderPeriod:{},
      orderVersionList:[],
      isShowPayDialog:false,
      isShowPayConfirm:false,
      isShowSuccessMsg:false,
      isShowFailMsg:false,
      versionList: [
        {
          label: '客户版',
          value: 0
        },
        {
          label: '代理商版',
          value: 1
        },
        {
          label: '专家版',
          value: 2
        }
      ],
      periodList: [
        {
          label: '半年',
          value: 0
        },
        {
          label: '一年',
          value: 1
        },
        {
          label: '三年',
          value: 2
        }
      ],
      buyTypes: [
        {
          label: '入门版',
          value: 0
        },
        {
          label: '中级版',
          value: 1
        },
        {
          label: '高级版',
          value: 2
        }
      ],
    }
  },
  methods:{
    showPayDialog(){
      this.isShowPayDialog = true;
    },
    closePayDialog(){
      this.isShowPayDialog = false;
    },
    priceCalc(data){
      this.orderNum = data;
      this.price = this.unitPrice * data;
    },
    getType(data){
      this.orderType = this.buyTypes[data];
    },
    getPeriod(data){
      this.orderPeriod = this.periodList[data];
    },
    getVersions(data){
      this.orderVersionList = [];
      for(let i=0;i<data.length;i++){
        this.orderVersionList[i] = this.versionList[data[i]];
      }
    },
    showPayConfirm(){
      this.isShowPayConfirm = true;
      this.isShowPayDialog = false;
    },
    showSuccess(){
      this.isShowSuccessMsg = true;
      this.isShowPayConfirm = false;
    },
    showFail(){
      this.isShowFailMsg = true;
      this.isShowPayConfirm = false;
    },
    closeDia(attr){
      this[attr] = false;
    },
    toOrderList(attr){
      this[attr] = false;
      this.$router.push({path: '/orderList'});
    }
  },
  mounted () {
    this.orderNum = 1;
    this.orderType = this.buyTypes[0];
    this.orderVersionList = [this.versionList[0]];
    this.orderPeriod = this.periodList[0];
    this.priceCalc(this.orderNum)
  }
}
</script>

<style lang="stylus">
.order-table
  width 100%
  margin-top 5px
  border 1px solid #e3e3e3
  th
    height 30px
    line-height 30px
    text-align center
    background #6c9
  td
    height 30px
    line-height 30px
    text-align center
  .order-table-ver + .order-table-ver:before
    content '、'
    display inline-block
h3
  margin-top 20px
  margin-bottom 10px
  font-size 18px
  font-weight normal
.order-btn
  display inline-block
  padding 10px 20px
  background #6c9
  margin 20px 0 0 calc(800px - 104px)
  color #fff
  cursor pointer

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
