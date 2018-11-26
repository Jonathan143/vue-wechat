<template>
  <div id="app">
    <top-nav v-show="$route.meta.topNav"></top-nav>
    <router-view class="routerV"/>
    <mu-bottom-nav :value.sync="shift" shift color="indigo500" class="btNav" v-show="$route.meta.navShow">
      <mu-bottom-nav-item value="weixin" title="微信" icon="sms" :to="{name: 'index'}"></mu-bottom-nav-item>
      <mu-bottom-nav-item value="friend" title="通讯录" icon="person_add" :to="{name: 'person'}"></mu-bottom-nav-item>
      <mu-bottom-nav-item value="find" title="发现" icon="bubble_chart" :to="{name: 'find'}"></mu-bottom-nav-item>
      <mu-bottom-nav-item value="person" title="我" icon="perm_identity" :to="{name: 'my'}"></mu-bottom-nav-item>
    </mu-bottom-nav>

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      shift:'weixin',
    }
  },
  created(){
    if(this.$route.path=='/'){
      this.shift='weixin';
    }else if(this.$route.path=='/friend'){
      this.shift='friend';
    }else if(this.$route.path=='/find'){
      this.shift='find';
    }else if(this.$route.path=='/person'){
      this.shift='person';
    }
  },

}
</script>

<style>
  @import "../static/css/demo.css";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .mu-appbar-left {
    padding-right: 0;
  }
  .routerV{
    flex-grow: 1;
    overflow: auto;
    height: 83%;

  }
  .btNav{
    width: 100%;
    background-color: #000;
    height: 56px;
  }
  .divider {
    height: 20px;
    width: 100%;
    line-height: 20px;
    padding-left: 20px;
    font-size: 13px;
    background-color: #EBEBEB;
  }
</style>
