<template>
  <div class="favorites">
    <back-nav title="我的收藏" rightSearch="true"></back-nav>
    <div class="topTit">
      <p><span>图片视频</span><i>|</i><span>链接</span><i>|</i><span>文件</span><i>|</i><span>音乐</span></p>
      <p><span>聊天记录</span><i>|</i><span>语音</span><i>|</i><span>笔记</span><i>|</i><span>位置</span></p>
    </div>
    <div class="topTit" v-for="(item,index) in favorites" :key="index">
      <div class="info">
        <img :src="item.src" height="60">
        <h3>{{item.title}}</h3>
      </div>
      <time>{{item.time}}</time>
    </div>

  </div>
</template>

<script>
  const favorites = [
    {src:'https://blog.yang143.cn/api/image/pop/a1.jpeg',title: '美国某知名乐队沦落到婚礼现场蹭吃蹭喝《Sugar》——魔力红 ',time:'Jonathan 2018-11-13'},
    {src:'https://blog.yang143.cn/api/image/pop/a2.jpeg',title: '9年前，魔兽世界公测时我有女朋友，现在，魔兽世界还在电脑里，陪伴我9年的女朋友却没了《Intro:The Dawn》——Dreamtale',time:'Jonathan 2018-11-11'},
    {src:'https://blog.yang143.cn/api/image/pop/a3.jpeg',title: '小楼依旧当年貌，世间已无程蝶衣。 《霸王别姬》——张国荣 ',time:'Jonathan 2018-10-30'},
    {src:'https://blog.yang143.cn/api/image/pop/a4.jpeg',title: '好想哭，没有女朋友《Five Hundred Miles(500英里)》——贾老板 ',time:'Jonathan 2018-10-20'},
    {src:'https://blog.yang143.cn/api/image/pop/a2.jpeg',title: '绝对影响世界的乐队，词曲都是和平，奋斗，鼓励。可惜啊《海阔天空》——Beyond ',time:'Jonathan 2018-10-12'},
    {src:'https://blog.yang143.cn/api/image/pop/a4.jpeg',title: '在路上听着这首歌，脑中突然冒出一个念头：这辈子只要有摇滚和电玩，不谈恋爱好像也没什么大不了。《Numb》——林肯公园',time:'Jonathan 2018-10-11'},
    {src:'https://blog.yang143.cn/api/image/pop/a1.jpeg',title: '循环了很久，在猛然听成“如果天黑之前还来得及，我要挖了你的眼睛”之后，我就没法好好听这首歌了《南山南》——马頔',time:'Jonathan 2018-9-30'},
  ];
  export default {
    name: "favorites",
    data(){
      return{
        favorites: [...favorites],
      }
    }
  }
</script>

<style lang="scss" scoped>
  .favorites {
    background-color: #EBEBEB;
    .topTit:last-child {
      margin-bottom: 16px;
    }
  }

  .topTit {
    margin: 16px 16px 0;
    padding: 16px;
    background-color: #fff;
    border-radius: 5px;
    p {
      display: flex;
      justify-content: space-around;
      line-height: 30px;
      color: #4caf50;
      i{
        color: #eee;
      }
    }
    .info {
      display: flex;
      h3 {
        margin-left: 10px;
        font-weight: 500;
        font-size: 14px;
      }
    }
    time {
      font-size: 13px;
      color: #616161;
    }
  }

</style>
