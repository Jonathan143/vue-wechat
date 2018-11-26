<template>
  <div>
    <back-nav title="群聊" rightSearch="true"></back-nav>

    <mu-list>
      <mu-sub-header>群聊</mu-sub-header>
      <div class="per" v-for="(pop,index) in groups" :key="index">
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
    <p class="countGroup">{{groups.length}}个群聊</p>
  </div>
</template>

<script>
  export default {
    name: "groups",
    data(){
      return{
        groups:[],
      }
    },
    created(){
      this.axios.get(this.dataURL('wechat.php','pop'))
        .then((res)=>{
          this.groups = res.data;
        })
    }
  }
</script>

<style scoped>
.countGroup{
  text-align: center;
}
</style>
