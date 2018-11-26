<template>
  <div>
    <mu-list>
      <mu-list-item button :to="{name: 'newFriend'}">
        <mu-list-item-action>
          <mu-icon value="person_add" color="deepPurple500"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>新的朋友</mu-list-item-title>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item button :to="{name: 'groups'}">
        <mu-list-item-action>
          <mu-icon value="group" color="indigo500"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>群聊</mu-list-item-title>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item button :to="{name:'chips'}">
        <mu-list-item-action>
          <mu-icon value="bookmarks" color="teal500"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>标签</mu-list-item-title>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item button>
        <mu-list-item-action>
          <mu-icon value="public" color="green500"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>公众号</mu-list-item-title>
      </mu-list-item>
      <div class="divider">我的企业</div>
      <mu-list-item button>
        <mu-list-item-action>
          <svg class="icon" aria-hidden="true" font-size="25">
            <use xlink:href="#icon-Vue"></use>
          </svg>
        </mu-list-item-action>
        <mu-list-item-title>Vue</mu-list-item-title>
      </mu-list-item>
      <mu-divider></mu-divider>
      <div class="divider">我的联系人</div>
      <div class="per" v-for="(pop,index) in person" :key="index">
        <mu-list-item avatar button :to="{name:'contacts',params:{title:pop.author}}">
          <mu-list-item-action>
            <mu-avatar>
              <img :src="pop.picUrl">
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-content>
            <mu-list-item-title>{{pop.author}}</mu-list-item-title>
          </mu-list-item-content>
        </mu-list-item>
        <mu-divider></mu-divider>
      </div>

      <div class="divider">我的联系人2</div>
      <div class="per" v-for="pop in person">
        <mu-list-item avatar button :to="{name:'contacts',params:{title:pop.author}}">
          <mu-list-item-action>
            <mu-avatar>
              <img :src="pop.picUrl">
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-content>
            <mu-list-item-title>{{pop.author}}</mu-list-item-title>
          </mu-list-item-content>
        </mu-list-item>
        <mu-divider></mu-divider>
      </div>

      <div class="divider">我的联系人3</div>
      <div class="per" v-for="pop in person">
        <mu-list-item avatar button :to="{name:'contacts',params:{title:pop.author}}">
          <mu-list-item-action>
            <mu-avatar>
              <img :src="pop.picUrl">
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-content>
            <mu-list-item-title>{{pop.author}}</mu-list-item-title>
          </mu-list-item-content>
        </mu-list-item>
        <mu-divider></mu-divider>
      </div>
    </mu-list>


    <div class="zw"></div>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        person: [],
      }
    },
    created() {
      this.axios.get(this.dataURL('wechat.php', 'pop'))
        .then((res) => {
          this.person = res.data;
        })
    },
  }
</script>

<style scoped>
  .divider {
    height: 30px;
    line-height: 30px;
  }
</style>
