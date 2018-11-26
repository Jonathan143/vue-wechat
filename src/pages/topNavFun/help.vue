<template>
    <div>
      <mu-flex direction="column" style="height: 100%;">
        <back-nav title="帮助与反馈" righticon="true" ></back-nav>
        <mu-list class="help">
          <mu-sub-header>热点问题</mu-sub-header>
          <div class="list" v-for="problem in problems">
            <mu-list-item avatar button>
              <mu-list-item-title v-text="problem"></mu-list-item-title>
              <mu-list-item-action>
                <mu-icon value="keyboard_arrow_right"></mu-icon>
              </mu-list-item-action>
            </mu-list-item>
            <mu-divider></mu-divider>
          </div>
        </mu-list>
        <!--全部问题  快捷帮助  意见反馈-->
          <ul class="pro">
            <li><mu-icon value="format_list_bulleted" size="20"></mu-icon>&nbsp;全部问题</li>
            <li>|</li>
            <li><mu-icon value="import_contacts" size="20"></mu-icon>&nbsp;快捷帮助</li>
            <li>|</li>
            <li><mu-icon value="chat" size="20"></mu-icon>&nbsp;意见反馈</li>
          </ul>
        </mu-flex>

    </div>
</template>

<script>
    export default {
        name: "help",
      data(){
          return{
            problems:[
              '微信如何开启和关闭新消息通知？',
              '朋友圈发表异常问题',
              '微信通信录添加朋友问题',
              '微信漂流瓶使用规则说明',
              '手机号/QQ号绑定与解绑微信问题',
              '附近的人使用问题',
              '如何迁移备份微信聊天记录？',
            ]
          }
      }
    }
</script>

<style scoped>
  .help {
    flex-grow: 1;
  }
  .pro{
    display: flex;
    width: 100%;
    height: 40px;
    background-color: #f5f5f5;
    align-items: center;
    justify-content: space-around;
    padding-inline-start: 0;
    margin-block-end: 0;
  }
  .pro li{
    list-style: none;
    display: flex;
  }

</style>
