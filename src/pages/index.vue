<template>
    <div class="index">

      <mu-list textline="two-line">
        <mu-sub-header>今天</mu-sub-header>
        <div class="sms" v-for="(pop,index) in sms" :key="index">
          <mu-list-item avatar button :to="{name:'contacts',params:{title:pop.author}}">
            <mu-list-item-action>
              <mu-avatar>
                <img :src="pop.picUrl">
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>{{pop.author}}</mu-list-item-title>
              <mu-list-item-sub-title>{{pop.title}}</mu-list-item-sub-title>
            </mu-list-item-content>
              <mu-list-item-action>
              <mu-badge content="news" color="secondary"></mu-badge>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider></mu-divider>
        </div>
        <mu-sub-header>昨天</mu-sub-header>
        <div class="sms" v-for="ye in sms">
          <mu-list-item avatar button :to="{name:'contacts',params:{title:ye.author}}">
            <mu-list-item-action>
              <mu-avatar>
                <img :src="ye.picUrl">
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>{{ye.author}}</mu-list-item-title>
              <mu-list-item-sub-title>{{ye.title}}</mu-list-item-sub-title>
            </mu-list-item-content>
            <mu-list-item-action>
              <mu-badge content="6" color="primary"></mu-badge>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider></mu-divider>
        </div>

        <mu-sub-header>更早</mu-sub-header>
        <div class="sms" v-for="ye in sms">
          <mu-list-item avatar button :to="{name:'contacts',params:{title:ye.author}}">
            <mu-list-item-action>
              <mu-avatar>
                <img :src="ye.picUrl">
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>{{ye.author}}</mu-list-item-title>
              <mu-list-item-sub-title>{{ye.title}}</mu-list-item-sub-title>
            </mu-list-item-content>
            <mu-list-item-action>
              <mu-badge content="old"></mu-badge>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider></mu-divider>
        </div>
      </mu-list>
    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return{
            sms:[],
          }
      },
      created(){
          this.axios.get(this.dataURL('wechat.php','pop'))
            .then((res)=>{
              this.sms = res.data
            })
      }
    }
</script>

<style scoped>


</style>
