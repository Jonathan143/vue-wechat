<template>
  <div style="width: 100%;">
    <mu-appbar style="width: 100%;" color='indigo500'>
      <mu-button icon slot="left" @click="back">
        <mu-icon value="chevron_left"></mu-icon>
      </mu-button>
        {{title}}
      <mu-button flat slot="right" v-if="righticon">
        <mu-icon value="more_horiz"></mu-icon>
      </mu-button>
        <mu-button flat slot="right" v-if="rTShow">{{rightTxt}}</mu-button>
      <mu-button flat slot="right" v-if="rightSearch">
        <mu-icon value="search"></mu-icon>
      </mu-button>
      <mu-menu slot="right" :open.sync="open" v-if="rightSearch">
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
  </div>
</template>

<script>
  export default {
    name: "backNav",
    props:['righticon','title','rightTxt','rTShow','rightSearch'],
    data(){
      return{
        open: false,
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      }
    },
  }
</script>

<style scoped>

</style>
