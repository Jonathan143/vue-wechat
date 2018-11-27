<template>
  <div style="width: 100%;">
    <mu-appbar style="width: 100%;" color="indigo500">
      微信
      <mu-button icon slot="right" class="search" @click="openFullscreenDialog">
        <mu-icon value="search"></mu-icon>
      </mu-button>
      <mu-menu slot="right" :open.sync="open">
        <mu-button flat>
          <mu-icon value="add"></mu-icon>
        </mu-button>
        <mu-list slot="content">
          <mu-list-item button @click="open = !open">
            <mu-list-item-content>
              <mu-list-item-title>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-weixin"></use>
                </svg>&nbsp;&nbsp;&nbsp;
                发起群聊
              </mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-list-item button :to="{name:'addContacts'}" @click="open = !open">
            <mu-list-item-content>
              <mu-list-item-title>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-add-friends_icon"></use>
                </svg> &nbsp;&nbsp;&nbsp;
                添加朋友
              </mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-list-item button :to="{name:'scan'}" @click="open = !open">
            <mu-list-item-content>
              <mu-list-item-title>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-saoyisao1"></use>
                </svg> &nbsp;&nbsp;&nbsp;
                扫一扫
              </mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-list-item button :to="{name:'money'}" @click="open = !open">
            <mu-list-item-content>
              <mu-list-item-title>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-erweima"></use>
                </svg> &nbsp;&nbsp;&nbsp;
                收付款
              </mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-list-item button @click="open = !open" :to="{name:'help'}">
            <mu-list-item-content>
              <mu-list-item-title>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-youjian"></use>
                </svg> &nbsp;&nbsp;&nbsp;
                帮助与反馈
              </mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list>
      </mu-menu>
    </mu-appbar>
    <!--搜索弹窗-->
    <mu-dialog width="360" transition="slide-bottom" fullscreen :open.sync="openFullscreen">
      <mu-appbar color="#607d8b">
        <mu-text-field placeholder="搜索" color="#66bb6a"></mu-text-field>
        <mu-button slot="left" icon @click="closeFullscreenDialog">
          <mu-icon value="keyboard_arrow_left"></mu-icon>
        </mu-button>
      </mu-appbar>
      <div class="searchDialog">
        <p>搜索制定内容</p>
        <div class="cont">
          <p><span>朋友圈</span><i>|</i><span>文章</span><i>|</i><span>公众号</span></p>
          <p><span>小程序</span><i>|</i><span>音乐</span><i>|</i><span>表情包</span></p>
        </div>
      </div>
    </mu-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return{
      openFullscreen: false,
      open: false,
    }
  },
  methods: {
    openFullscreenDialog () {
      this.openFullscreen = true;
    },
    closeFullscreenDialog () {
      this.openFullscreen = false;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .search{
    margin-right: 20px
  }
  .searchDialog{
    padding: 20px;
    text-align: center;
  }
  .cont p{
    display: flex;
    justify-content: space-around;
  }
  .cont p span {
    color: #4caf50;
  }
  .cont i {
    font-style: normal;
    color: #eee;
  }
</style>
