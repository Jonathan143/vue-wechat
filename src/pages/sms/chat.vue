<template>
    <div>
      <div class="chat-sender">
        <div><img src="https://blog.yang143.cn/api/image/pop/a1.jpeg"></div>
        <div>阿奔 Ben</div>
        <div>
          <div class="chat-left_triangle"></div>
          <span> 苹果增加三款配件的颜色选项</span>
        </div>
      </div>
      <!-- Right -->
      <div class="chat-receiver">
        <div><img src="https://blog.yang143.cn/api/image/pop/a3.jpeg"></div>
        <div>好人·马克思</div>
        <div>
          <div class="chat-right_triangle"></div>
          <span> 但是如果你正在再发新的APP跨平台项目，我建议你考虑一下Ionic2/Ionic3。 ionic2/Ionic3的架构使得“单一职责原则”得到了体现，组件、页面之间相互独立，有利于内聚和解耦。</span>
        </div>
      </div>
      <!-- Right -->
      <div class="chat-sender">
        <div><img src="https://blog.yang143.cn/api/image/pop/a5.jpeg"></div>
        <div>阿达姆 Adam</div>
        <div>
          <div class="chat-left_triangle"></div>
          <span> 一款接近原生的Html5移动App开发框架</span>
        </div>
      </div>
      <!-- Notice/Center -->
      <div class="chat-notice">
        <span>2018年11月16日 23:13</span>
      </div>
      <!-- Left -->
      <div class="chat-sender">
        <div><img src="https://blog.yang143.cn/api/image/pop/a2.jpeg"/></div>
        <div>佩里 Perry</div>
        <div>
          <div class="chat-left_triangle"></div>
          <span> Ionic遵循视图控制模式，通俗的理解和 Cocoa 触摸框架相似。在视图控制模式中，我们将界面的不同部分分为子视图或包含其他视图的子视图控制器。</span>
        </div>
      </div>
      <!-- Left -->
      <div class="chat-sender">
        <div><img src="https://blog.yang143.cn/api/image/pop/a4.jpeg"></div>
        <div>麦克</div>
        <div>
          <div class="chat-left_triangle"></div>
          <span> 你可以用ionRefresher指令实现拉动刷新，并可以用ionInfiniteScroll指令实现无限滚动。</span>
        </div>
      </div>
      <!-- Right -->
      <div class="chat-receiver">
        <div><img src="https://blog.yang143.cn/api/image/pop/a3.jpeg"></div>
        <div>好人·马克思</div>
        <div>
          <div class="chat-right_triangle"></div>
          <span> 最后但并非最不重要的是</span>
        </div>
      </div>
      <!-- Notice/Center -->
      <div class="chat-notice">
        <span>你被群主移除群聊</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "chat"
    }
</script>

<style scoped>
  .chat-sender{
    clear:both;
    /*font-size: 90%;*/
    padding-top: 10px;
    color: #fff;
  }
  .chat-sender div:nth-of-type(1){
    float: left;
  }
  .chat-sender div:nth-of-type(2){
    margin: 0 50px 2px 50px;
    padding: 0px;
    color: #848484;
    font-size: 80%;
    text-align: left;
  }
  .chat-sender div:nth-of-type(3){
    background-color: #3f51b5;
    /*float: left;*/
    margin: 0 50px 10px 50px;
    padding: 10px 10px 10px 10px;
    border-radius:7px;
    text-indent: -12px;
  }

  .chat-receiver{
    clear:both;
    /*font-size: 80%;*/
    color: #fff;
  }
  .chat-receiver div:nth-of-type(1){
    float: right;
  }
  .chat-receiver div:nth-of-type(2){
    margin: 0px 50px 2px 50px;
    padding: 0px;
    color: #848484;
    font-size: 80%;
    text-align: right;
  }
  .chat-receiver div:nth-of-type(3){
    /*float:right;*/
    background-color: #4caf50;
    margin: 0px 50px 10px 50px;
    padding: 10px 10px 10px 10px;
    border-radius:7px;
  }

  .chat-receiver div:first-child img,
  .chat-sender div:first-child img{
    width: 40px;
    height: 40px;
    /*border-radius: 10%;*/
  }

  .chat-left_triangle{
    height: 0px;
    width: 0px;
    border-width: 6px;
    border-style: solid;
    border-color: transparent #3f51b5 transparent transparent;
    position: relative;
    left: -22px;
    top: 3px;
  }
  .chat-right_triangle{
    height: 0px;
    width: 0px;
    border-width: 6px;
    border-style: solid;
    border-color: transparent transparent transparent #4caf50;
    position: relative;
    right:-22px;
    top:3px;
  }

  .chat-notice{
    clear: both;
    font-size: 80%;
    color: white;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .chat-notice span{
    background-color: #cecece;
    line-height: 25px;
    border-radius: 5px;
    padding: 5px 10px;
  }
</style>
