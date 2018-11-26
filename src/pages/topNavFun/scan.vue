<template>
  <div>
    <back-nav title="扫一扫" righticon="true"></back-nav>
    <div class="pays">
      <mu-expansion-panel :expand="panel === 'redEnvelopes'" @change="toggle('redEnvelopes')">
        <div slot="header">扫码领红包</div>
        <img src="https://blog.yang143.cn/api/image/pay/redEnvelopes.jpg" alt="redEnvelopes" width="100%">
      </mu-expansion-panel>
      <mu-expansion-panel :expand="panel === 'alipay'" @change="toggle('alipay')">
        <div slot="header">支付宝</div>
        <img src="https://blog.yang143.cn/api/image/pay/alipay.jpg" alt="AliPay" width="100%">
      </mu-expansion-panel>
      <mu-expansion-panel :expand="panel === 'wechat'" @change="toggle('wechat')">
        <div slot="header">微信</div>
        <img src="https://blog.yang143.cn/api/image/pay/wechat.png" alt="WeChat" width="100%">
      </mu-expansion-panel>
      <mu-expansion-panel :expand="panel === 'qq'" @change="toggle('qq')">
        <div slot="header">QQ</div>
        <img src="https://blog.yang143.cn/api/image/pay/qq.png" alt="QQ" width="100%">
      </mu-expansion-panel>
    </div>
  </div>
</template>

<script>
  export default {
    name: "scan",
    data() {
      return {
        panel: 'redEnvelopes',
      }
    },
    methods:{
      toggle(panel) {
        this.panel = panel === this.panel ? '' : panel;
      }
    }
  }
</script>

<style scoped>

</style>
