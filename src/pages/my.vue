<template>
    <div>
      <div class="divider"></div>
      <mu-list textline="three-line" v-elevation="20">
        <mu-list-item button :to="{name:'myInfo',params:{imgsrc:imgSrc,n:username,a:account}}">
          <mu-list-item-action style="min-width: 70px;margin-right: 20px;padding-top: 14px;">
            <mu-avatar size="70">
              <img :src="imgSrc" alt="">
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-content>
            <mu-list-item-title>{{username}}</mu-list-item-title>
            <mu-list-item-sub-title>微信号：{{account}}</mu-list-item-sub-title>
          </mu-list-item-content>
          <mu-list-item-action>
            <svg class="icon" aria-hidden="true" font-size="25">
              <use xlink:href="#icon-erweima"></use>
            </svg>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
      <div class="divider"></div>
      <mu-list>
        <mu-list-item button :to="{name:'wallet'}">
          <mu-list-item-action>
            <svg class="icon" aria-hidden="true" font-size="25">
              <use xlink:href="#icon-qianbao"></use>
            </svg>
          </mu-list-item-action>
          <mu-list-item-title>钱包</mu-list-item-title>
        </mu-list-item>
        <div class="divider"></div>
        <mu-list-item button>
          <mu-list-item-action>
            <svg class="icon" aria-hidden="true" font-size="25">
              <use xlink:href="#icon-weixinshoucang"></use>
            </svg>
          </mu-list-item-action>
          <mu-list-item-title>收藏</mu-list-item-title>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button :to="{name:'photo'}">
          <mu-list-item-action>
            <svg class="icon" aria-hidden="true" font-size="25">
              <use xlink:href="#icon-xiangce-copy"></use>
            </svg>
          </mu-list-item-action>
          <mu-list-item-title>相册</mu-list-item-title>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button>
          <mu-list-item-action>
            <svg class="icon" aria-hidden="true" font-size="25">
              <use xlink:href="#icon-zhifu"></use>
            </svg>
          </mu-list-item-action>
          <mu-list-item-title>卡包</mu-list-item-title>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button>
          <mu-list-item-action>
            <svg class="icon" aria-hidden="true" font-size="25">
              <use xlink:href="#icon-biaoqing"></use>
            </svg>
          </mu-list-item-action>
          <mu-list-item-title>表情</mu-list-item-title>
        </mu-list-item>
        <div class="divider"></div>
        <mu-list-item button>
          <mu-list-item-action>
            <svg class="icon" aria-hidden="true" font-size="25">
              <use xlink:href="#icon-shezhi1"></use>
            </svg>
          </mu-list-item-action>
          <mu-list-item-title>设置</mu-list-item-title>
        </mu-list-item>
        <mu-divider></mu-divider>
      </mu-list>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "my",
      data(){
          return{
            imgSrc:'https://yang143.cn/images/Selfie.jpg',
            username:'Jonathan',
            account: 'YJonathan'
          }
      }
    }
</script>

<style scoped>
  .mu-list{
    padding: 0;
  }
</style>
