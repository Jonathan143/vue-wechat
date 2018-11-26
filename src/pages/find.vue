<template>
  <div class="finds">
    <div class="divider"></div>
    <mu-list>
      <mu-list-item button :to="{name:'moments'}">
        <mu-list-item-action>
          <svg class="icon" aria-hidden="true" font-size="25">
            <use xlink:href="#icon-pengyouquan"></use>
          </svg>
        </mu-list-item-action>
        <mu-list-item-title>朋友圈</mu-list-item-title>
        <mu-list-item-action>
          <mu-avatar size="30">
            <img src="https://blog.yang143.cn/api/image/pop/a2.jpeg">
          </mu-avatar>
        </mu-list-item-action>
      </mu-list-item>
      <div class="divider"></div>
      <mu-list-item button :to="{name:'scan'}">
        <mu-list-item-action>
          <svg class="icon" aria-hidden="true" font-size="25">
            <use xlink:href="#icon-saoyisao"></use>
          </svg>
        </mu-list-item-action>
        <mu-list-item-title>扫一扫</mu-list-item-title>
      </mu-list-item>
      <div class="divider"></div>
      <mu-list-item button :to="{name: 'shopping'}">
        <mu-list-item-action>
          <svg class="icon" aria-hidden="true" font-size="25">
            <use xlink:href="#icon-gouwu1"></use>
          </svg>
        </mu-list-item-action>
        <mu-list-item-title>购物</mu-list-item-title>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item button>
        <mu-list-item-action>
          <svg class="icon" aria-hidden="true" font-size="25">
            <use xlink:href="#icon-youxi"></use>
          </svg>
        </mu-list-item-action>
        <mu-list-item-title>游戏</mu-list-item-title>
        <mu-list-item-sub-title>全新火影抢先下载</mu-list-item-sub-title>
        <mu-list-item-action class="game">
          <mu-avatar size="30">
            <img src="https://blog.yang143.cn/api/image/game.png">
          </mu-avatar>
        </mu-list-item-action>
      </mu-list-item>
      <div class="divider"></div>
      <mu-list-item button>
        <mu-list-item-action>
          <svg class="icon" aria-hidden="true" font-size="25">
            <use xlink:href="#icon-xiaochengxu"></use>
          </svg>
        </mu-list-item-action>
        <mu-list-item-title>小程序</mu-list-item-title>
      </mu-list-item>
      <mu-divider></mu-divider>
    </mu-list>
  </div>
</template>

<script>
  export default {
    name: "find"
  }
</script>

<style scoped>
  .mu-list{
    padding: 0;
  }
  .game{
    min-width: 30px;
  }
</style>
