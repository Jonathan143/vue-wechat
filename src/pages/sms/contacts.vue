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
      <div class="newChat" v-for="(m,index) in msgArr" :key="index">
        <div class="chat-notice" v-if="m.msgTime">
          <span>{{m.msgTime}}</span>
        </div>
        <div class="chat-receiver">
          <div><img src="https://blog.yang143.cn/api/image/pop/a3.jpeg"></div>
          <div>Jonathan</div>
          <div>
            <div class="chat-right_triangle"></div>
            <span> {{m.myMsg}}</span>
          </div>
        </div>
        <div class="chat-sender">
          <div><img src="https://img-1256555015.file.myqcloud.com/2018/12/09/5c0d252306620.ico"></div>
          <div>Hitokoto</div>
          <div>
            <div class="chat-left_triangle"></div>
            <span> {{m.robot}}</span>
          </div>
        </div>
      </div>
    </div>

    <!--输入框-->
    <mu-text-field v-model="msg" icon="mic" :action-icon="visibility ? 'keyboard' : 'mood'" :action-click="() =>
    (visibility =!visibility)" full-width>
      <mu-button icon color="primary" style="display: inline-block" @click="sendMsg">
        <mu-icon value="send"></mu-icon>
      </mu-button>
    </mu-text-field>

  </div>
</template>

<script>
  export default {
    name: "contacts",
    data() {
      return {
        contact: "",
        visibility: false,
        msg: "",
        msgArr: [],
        msgTime: 0
      };
    },
    watch: {
      msgArr() {
        this.$nextTick(() => {
          let container = this.$el.querySelector(".sms");
          container.scrollTop = container.scrollHeight;
        });
      }
    },
    created() {
      this.contact = this.$route.params.title;
      if (JSON.parse(localStorage.getItem("mMsg"))) {
        this.msgArr = JSON.parse(localStorage.getItem("mMsg"));
      }
    },
    methods: {
      black() {
        this.$router.go(-1);
      },
      sendMsg() {
        if (this.msg) {
          this.axios.get("https://v1.hitokoto.cn/").then(res => {
            let realy = `${res.data.hitokoto} --${res.data.creator} 《${
              res.data.from
              }》`;

            let nowTime = new Date();
            console.log(this.msgTime);
            if (this.msgTime - nowTime.getTime() < -60000) {
              this.msgTime = nowTime.getTime();
              console.log(this.msgTime);

              let nowT = `${nowTime.getFullYear()}年${nowTime.getMonth() +
              1}月${nowTime.getDate()}日 ${nowTime.getHours()}:${nowTime.getMinutes()}`;
              this.msgArr.push({myMsg: this.msg, robot: realy, msgTime: nowT});
            } else {
              this.msgArr.push({myMsg: this.msg, robot: realy});
            }

            this.msg = "";
            localStorage.setItem("mMsg", JSON.stringify(this.msgArr));
          });
        }
      }
    }
  };
</script>

<style scoped>
  @import "chat.css";

  .contacts {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .sms {
    flex-grow: 1;
    overflow: auto;
    background-color: #f5f5f5;
    height: 83%;
  }

  .mu-input {
    margin-bottom: 0;
    padding-right: 5px;
    border-top: 1px solid #eee;
    font-size: 16px;
  }
</style>
