<template>
  <div class="mom">
    <div class="topNav">
      <mu-button icon @click="back">
        <mu-icon value="chevron_left" :color="iconColor"></mu-icon>
      </mu-button>
      <mu-button icon class="fr">
        <mu-icon value="camera_alt" :color="iconColor"></mu-icon>
      </mu-button>
    </div>
    <div class="cont">
      <div class="topImg">
        <img src="https://api.i-meto.com/bing?new" alt="" width="100%">
        <div class="profile">
          <span>Jonathan</span>
          <img src="https://yang143.cn/images/Selfie.jpg" alt="" width="100">
        </div>
      </div>
      <mu-load-more :refreshing="refreshing" :loading="loading" @load="load">
      <div class="news">
        <div class="item" v-for="(item,index) in news" :key="index">
          <div class="acct">
            <img :src="item.img" alt="" width="60px">
          </div>
          <div class="info">
            <h2>{{item.name}}</h2>
            <p>{{item.text}}</p>
            <img :src="item.img" alt="" width="80px">
            <img :src="item.img" alt="" width="80px">
            <img :src="item.img" alt="" width="80px">
            <div class="time">
              <time>{{item.time}}</time>
              <svg class="icon" aria-hidden="true" style="color:#3f51b5;font-size: 20px">
                <use xlink:href="#icon-wodefankui"></use>
              </svg>
            </div>
            <div class="py">
              <span>{{item.name}}：</span>{{item.py}}
            </div>
          </div>
        </div>
      </div>
      </mu-load-more>
    </div>
  </div>
</template>

<script>
const news = [
  {name: 'Jonathan',text:
      '“生命抵达旺盛的青春期后，喜爱保留转瞬即逝的风景。”网易云（往亿云）最好的诠释就是往事被回忆者诉说出来的故事。每当看着那些陌生人的评论，仿佛看到的不是他人，而是自己的过往！',img: 'https://yang143.cn/images/Selfie.jpg',time: '刚刚',py:'此不负经年，相聚有时，后会无期。不负流年，飘散如烟，后会无期。'},
  {name: '杰伦',text:
      '高一的时候 我是文艺委员 每天上课前负责放点音乐 让大家一起唱 我每天都放周杰伦的歌 台下所有人都不耐烦 甚至骂我的…都要求我放秋天不回来 求佛 香水有毒之类的…现在想想 我从来没有和那些人一个世界过。《一路向北》——周杰伦',img: 'https://blog.yang143.cn/api/image/pop/a1.jpeg',time: '3小时前',py:'此不负经年，相聚有时，后会无期。不负流年，飘散如烟，后会无期。'},
  {name: '赵雷',text:
      '你真的红了 很开心 内场票也可以卖到1000+ 虽然以前50就能听你的livehouse 越来越听不起你的演唱会 不过没关系 我会努力变得跟你一样好 民谣不应该穷 以前你吃过的苦都是值得的 难过的日子都是你陪我一起过的 你说你是个普通人 想要买房结婚 我知道 愿你有酒有肉有姑娘 #赵雷 《成都》——赵雷',img: 'https://blog.yang143.cn/api/image/pop/a4.jpeg',time: '4小时前',py:'此不负经年，相聚有时，后会无期。不负流年，飘散如烟，后会无期。'},
  {name: '陈奕迅',text:
      '两天前 陈奕迅在墨尔本开演唱会 安东尼发微博说他在台下听的感慨万分 就像做了一场梦 他终于完成了自己的梦 自己喜欢的歌手为他的书唱的主题曲 你有梦想你就要捍卫它~ 《陪你度过漫长岁月》——陈奕迅',img: 'https://blog.yang143.cn/api/image/pop/a3.jpeg',time: '昨天',py:'此不负经年，相聚有时，后会无期。不负流年，飘散如烟，后会无期。'},
  {name: '网易云',text: '今天坐火车去了南阳看她,看她在大学里过得很开心,很舒适。我问她我在你心里到底是什么位置？一分钟后,她说了两个字:朋友。我陷入了沉默。看着她的侧脸,我想:四年了,我该开始自己的生活了。再见姑娘,再见南阳！ 《那些花儿》——朴树',img: 'https://blog.yang143.cn/api/image/pop/a2.jpeg',time: '昨天',py:'此不负经年，相聚有时，后会无期。不负流年，飘散如烟，后会无期。'},
];
  export default {
    data() {
      return {
        iconColor: '#e91e63',
        news: [...news],
        more: [...news],
        refreshing: false,
        loading: false,
      };
    },
    methods: {
      back() {
        this.$router.go(-1);
      },
      load() {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          for(let i=0;i<this.more.length;i++){
            this.news.push(this.more[i])
          }
        }, 2000)
      },
    },
    created() {
      // https://v.juhe.cn/weixin/query?key=66d82bdea22e985472cdedeb2ad356c1
      // console.log(this.news);
      // this.axios.get('https://v.juhe.cn/weixin/query?key=66d82bdea22e985472cdedeb2ad356c1')
      //   .then((res)=>{
      //     this.news = res.data.result.list;
      //     console.log(this.news)
      //   })
    }
  };
</script>

<style lang="scss" scoped>

  .cont {
    height: 100%;
    background-color: #F5F5F5;
  }

  .topNav {
    position: fixed;
    z-index: 99;
    width: 100%;
  }

  .topImg {
    position: relative;

    .profile {
      height: 100px;
      position: absolute;
      bottom: -30px;
      right: 10px;
      display: flex;
      align-items: center;

      span {
        position: relative;
        top: -8px;
        font-weight: 700;
        margin-right: 10px;
        color: #fff;
        font-size: 18px;
      }

      img {
        border: 2px solid #fff;
      }
    }

  }

  .fr {
    float: right;
  }

  .news {
    padding: 0 10px;
    margin: 32px 0 20px;
    .item {
      display: flex;
      border-bottom: 1px solid #aaa;
      padding: 10px 0;
      .acct {
        width: 60px;
      }

      .info {
        word-break: break-all;
        word-wrap: break-word;
        margin-left: 10px;
        h2 {
          font-weight: normal;
          color: #3f51b5;
          font-size: 14px;
        }
        img {
          margin: 10px 10px 0 0;
        }
        .time {
          margin: 10px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          time {
            font-size: 13px;
          }
        }
        .py {
          background-color: #ddd;
          padding: 10px;
          span {
            color: #3f51b5;
          }
        }
      }
    }
  }
</style>
