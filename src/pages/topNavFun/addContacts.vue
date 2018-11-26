<template>
  <div>
    <back-nav title="添加朋友" :righticon="false"></back-nav>
    <div class="divider"></div>
    <mu-text-field label="微信号/QQ号/手机号" label-float full-width icon="search"></mu-text-field>
    <div class="ider">
      我的微信号：YJonathan&nbsp;
      <a href="">
        <svg class="icon" aria-hidden="true" font-size="20">
          <use xlink:href="#icon-erweima"></use>
        </svg>
      </a>
    </div>
    <mu-list >
      <mu-list-item button>
        <mu-list-item-action>
          <mu-icon value="wifi_tethering" color="blue400"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>雷达加朋友</mu-list-item-title>
          <mu-list-item-sub-title>添加身边的朋友</mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item button>
        <mu-list-item-action>
          <mu-icon value="group" color="indigo500"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>面对面建群</mu-list-item-title>
          <mu-list-item-sub-title>与身边的朋友进入同一群聊</mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item button>
        <mu-list-item-action>
          <svg class="icon" aria-hidden="true" font-size="25">
            <use xlink:href="#icon-saoyisao1"></use>
          </svg>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>扫一扫</mu-list-item-title>
          <mu-list-item-sub-title>扫二维码名片</mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item button>
        <mu-list-item-action>
          <mu-icon value="person_add" color="green400"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>手机联系人</mu-list-item-title>
          <mu-list-item-sub-title>添加或邀请通讯录中的朋友</mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item button>
        <mu-list-item-action>
          <mu-icon value="public" color="#7e57c2"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>公众号</mu-list-item-title>
          <mu-list-item-sub-title>获取更多资讯和服务</mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item button>
        <mu-list-item-action>
          <svg class="icon" aria-hidden="true" font-size="25">
            <use xlink:href="#icon-tongxunlu"></use>
          </svg>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>企业微信联系人</mu-list-item-title>
          <mu-list-item-sub-title>通过手机号搜索企业微信用户</mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
    </mu-list>
  </div>

</template>

<script>
  export default {
    name: "addContacts"
  }
</script>

<style scoped>
  .ider {
    height: 50px;
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 14px;
    background-color: #eeeeee;
  }
  .mu-list{
    padding: 0;
  }
</style>
