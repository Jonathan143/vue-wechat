<template>
  <div>
    <!-- Notice/Center -->
    <div class="chat-notice">
      <span>2018年11月16日 23:13</span>
    </div>
    <div class="chat-sender">
      <div><img src="https://blog.yang143.cn/api/image/pop/a1.jpeg"></div>
      <div>阿奔 Ben</div>
      <div>
        <div class="chat-left_triangle"></div>
        <span> 本项目GitHub地址：<a
          href="https://github.com/Jonathan143/vue-wechat">https://github.com/Jonathan143/vue-wechat</a></span>
      </div>
    </div>
    <!-- Right -->
    <div class="chat-receiver">
      <div><img src="https://blog.yang143.cn/api/image/pop/a3.jpeg"></div>
      <div>Jonathan</div>
      <div>
        <div class="chat-right_triangle"></div>
        <span> 欢迎关注我的博客：<a href="https://www.yang143.cn">https://www.yang143.cn</a></span>
      </div>
    </div>
    <!-- left -->
    <div class="chat-sender">
      <div><img src="https://blog.yang143.cn/api/image/pop/a5.jpeg"></div>
      <div>阿达姆 Adam</div>
      <div>
        <div class="chat-left_triangle"></div>
        <span> 本项目简介请访问：<a href="https://yang143.cn/index.php/archives/2018/11/15/cid=30.html"> https://yang143.cn/index.php/archives/2018/11/15/cid=30.html</a></span>
      </div>
    </div>

    <div class="chat-notice">
      <span>2018年12月9日 23:16</span>
    </div>
    <!-- Right -->
    <div class="chat-receiver">
      <div><img src="https://blog.yang143.cn/api/image/pop/a3.jpeg"></div>
      <div>Jonathan</div>
      <div>
        <div class="chat-right_triangle"></div>
        <span> 2018/12/09 更新，支持聊天自动回复</span>
      </div>
    </div>

    <!-- left -->
    <div class="chat-sender">
      <div><img src="https://blog.yang143.cn/api/image/pop/a4.jpeg"></div>
      <div>Jack</div>
      <div>
        <div class="chat-left_triangle"></div>
        <span> 聊天自动回复调用一言API</span>
      </div>
    </div>
    <!-- Notice/Center -->
    <!-- <div class="chat-notice">
      <span>你被群主移除群聊</span>
    </div> -->
  </div>
</template>

<script>
  export default {
    name: "chat"
  }
</script>

<style scoped>
  @import "chat.css";
</style>
