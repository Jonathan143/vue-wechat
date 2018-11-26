<template>
  <div class="money">
    <back-nav title="收付款"></back-nav>
    <div class="qrcode">
      <div class="top">
        <mu-icon value="filter_center_focus" style="margin-right: 10px;"></mu-icon>
        向商家付款
      </div>
      <div class="cont">
        <small>点击查看付款码数字</small>
        <svg class="icon qrc" aria-hidden="true">
          <use xlink:href="#icon-tiaoxingma1"></use>
        </svg>
        <svg class="icon" aria-hidden="true" font-size="162">
          <use xlink:href="#icon-erweima"></use>
        </svg>
      </div>
      <div class="foot">
            <span><svg class="icon" aria-hidden="true" font-size="20">
              <use xlink:href="#icon-vip"></use>
            </svg>零钱通</span><br>
        <small>优先使用此方式支付</small>
      </div>
    </div>
    <div class="sele">
      <mu-list>
        <mu-list-item button :to="{name: 'scan'}">
          <svg class="icon" aria-hidden="true" font-size="24px">
            <use xlink:href="#icon-shoukuanma"></use>
          </svg>
          <mu-list-item-title>二维码收款</mu-list-item-title>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button>
          <svg class="icon" aria-hidden="true" font-size="24px">
            <use xlink:href="#icon-zanshang"></use>
          </svg>
          <mu-list-item-title>赞赏码</mu-list-item-title>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button>
          <svg class="icon" aria-hidden="true" font-size="24px">
            <use xlink:href="#icon-shoukuan-"></use>
          </svg>
          <mu-list-item-title>群收款</mu-list-item-title>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button>
          <svg class="icon" aria-hidden="true" font-size="24px">
            <use xlink:href="#icon-hongbao"></use>
          </svg>
          <mu-list-item-title>面对面红包</mu-list-item-title>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button>
          <svg class="icon" aria-hidden="true" font-size="24px">
            <use xlink:href="#icon-zhuanzhang"></use>
          </svg>
          <mu-list-item-title>转账到银行卡</mu-list-item-title>
          <svg class="icon" aria-hidden="true" font-size="35px" color="#f5f5f5">
            <use xlink:href="#icon-new"></use>
          </svg>
        </mu-list-item>
      </mu-list>
    </div>
  </div>
</template>

<script>
  export default {
    name: "money"
  }
</script>

<style scoped>
  .money {
    background-color: #5c6bc0;
  }

  .qrcode {
    margin: 10px 20px;
    background-color: #fff;
  }

  small {
    font-size: 13px;
    color: #9e9e9e;
  }

  .top {
    color: #5c6bc0;
    display: flex;
    align-items: Center;
    background-color: #f5f5f5;
    padding: 16px;
    margin-bottom: 20px;
  }

  .cont {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .qrc {
    font-size: 64px;
    width: 5em;
  }

  .foot {
    margin: 16px 16px 0;
    padding: 16px 0;
    border-top: 1px solid #959595;
  }

  .foot small {
    margin-left: 20px;
  }
  .sele {
    margin: 0 20px 20px;
    border-radius: 5px;
    background-color: rgba(225,225,225,.2);
  }
  .mu-list{
    padding: 0;
  }
  .mu-item-title{
    color: #fff;
    margin-left: 10px;
  }
</style>
