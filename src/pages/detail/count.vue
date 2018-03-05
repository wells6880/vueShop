<template>
  <div class="shops">
    <div class="shops-choice">
      <h2>数据统计</h2>
      <p class="shops-choice-summary">历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
      <div class="shops-choice-types">
        <span class="shops-choice-types-item">产品类型：</span>
        <v-chooser :choosers="buyTypes" @on-params="getBuyTypes"></v-chooser>
      </div>
      <div class="shops-choice-types">
        <span class="shops-choice-types-item">使用地区：</span>
        <v-selection :selections="districts" @on-params="getDistricts"></v-selection>
      </div>
      <div class="shops-choice-types">
        <span class="shops-choice-types-item">有效时间：</span>
        <span>半年</span>
      </div>
      <div class="shops-choice-types">
        <span class="shops-choice-types-item">总价：</span>
        <span class="shops-choice-result">500元</span>
      </div>
      <a class="btn" @click="showDialog()">立即购买</a>
    </div>
    <div class="shops-intro">
      <h2>产品说明</h2>
      <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>

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

    <my-dialog :is-show="isShowPayDialog" @on-close="closeDia('isShowPayDialog')">
      <table class="order-table">
        <tr>
          <th>产品类型</th>
          <th>使用地区</th>
          <th>有效时间</th>
          <th>总价</th>
        </tr>
        <tr>
          <td>{{ orderType.label }}</td>
          <td>{{ orderDistrict.label }}</td>
          <td>半年</td>
          <td>{{ 500 }}</td>
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
import vSelection from '../../components/base/selection.vue'
import vChooser from '../../components/base/chooser.vue'
import myDialog from '../../components/base/dialog.vue'
import vBankChooser from '../../components/bankChooser.vue';

export default {
  components:{
    vSelection,
    vChooser,
    myDialog,
    vBankChooser
  },
  data () {
    return {
      isShowPayDialog:false,
      isShowPayConfirm:false,
      isShowSuccessMsg:false,
      isShowFailMsg:false,
      orderType:{},
      orderDistrict:{},
      buyTypes: [
        {
          label: '红色版',
          value: 0
        },
        {
          label: '绿色版',
          value: 1
        },
        {
          label: '紫色版',
          value: 2
        }
      ],
      districts: [
        {
          label: '北京',
          value: 0
        },
        {
          label: '上海',
          value: 1
        },
        {
          label: '广州',
          value: 2
        },
        {
          label: '天津',
          value: 3
        },
        {
          label: '武汉',
          value: 4
        },
        {
          label: '重庆',
          value: 5
        },
      ]
    }
  },
  methods:{
    showDialog(){
      this.isShowPayDialog = true;
    },
    getBuyTypes(attr){
      this.orderType = this.buyTypes[attr];
    },
    getDistricts(attr){
      this.orderDistrict = this.districts[attr];
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
  mounted(){
    this.orderType = this.buyTypes[0];
    this.orderDistrict = this.districts[0];
  }
}
</script>

<style lang="stylus" scoped>

</style>
