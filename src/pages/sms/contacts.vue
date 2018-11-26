<template>
    <div class="contacts">
      <mu-appbar style="width: 100%;" color="indigo500">
        <mu-button icon slot="left" @click="black">
          <mu-icon value="chevron_left"></mu-icon>
        </mu-button>
        {{contact}}
        <mu-button flat slot="right">
          <mu-icon value="more_horiz"></mu-icon>
        </mu-button>
      </mu-appbar>

      <!--聊天信息-->
      <div class="sms">
          <!--<p v-for="i in 40">aasdas{{i}}</p>-->
          <chat></chat>
      </div>

      <!--输入框-->
      <mu-text-field icon="mic" :action-icon="visibility ? 'keyboard' : 'mood'" :action-click="() => (visibility =
      !visibility)" full-width>
        <mu-button icon color="primary" style="display: inline-block">
          <mu-icon value="send"></mu-icon>
        </mu-button>
      </mu-text-field>

    </div>
</template>

<script>
    export default {
      name: "contacts",
      data(){
        return{
          contact:'',
          visibility: false
        }
      },
      created(){
        this.contact = this.$route.params.title;
      },
      methods:{
        black(){
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped>
  .contacts{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .sms{
    flex-grow: 1;
    overflow: auto;
    background-color: #f5f5f5;
    height: 83%;
  }
  .mu-input {
    margin-bottom: 0;
    padding-right: 5px;
    border-top: 1px solid #eee;
    font-size: 20px;
  }

</style>
