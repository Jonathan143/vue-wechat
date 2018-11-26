<template>
    <div class="flex">
        <back-nav title="我的钱包" righticon="true"></back-nav>
        <div class="cont">
          <div class="top">
            <ul>
              <li v-for="(i,index) in icons" :key="index">
                <i :class="i.class"></i>
                <p>{{i.title}}</p>
              </li>
            </ul>
            <span>￥6688.66</span>
          </div>
          <div class="divider"></div>
          <div class="bottom">
            <span>腾讯服务</span>
            <ul>
              <li v-for="(i,index) in tcSevers" :key="index">
                <i :class="i.class"></i>
                <p>{{i.title}}</p>
              </li>
            </ul>
            <div class="divider"></div>
            <span>第三方服务</span>
            <ul>
              <li v-for="(i,index) in other" :key="index">
                <i :class="i.class"></i>
                <p>{{i.title}}</p>
              </li>
            </ul>
          </div>
        </div>
    </div>
</template>

<script>
  const icon =[
    {class:'iconfont icon-shoufukuan',title: '收付款'},
    {class:'iconfont icon-lingqian',title: '零钱'},
    {class:'iconfont icon-icon',title: '银行卡'}
  ];
  const tcSever = [
    {class:'iconfont icon-xinyongqiahuankuan green',title: '信用卡还款'},
    {class:'iconfont icon-shoujichongzhi blue',title: '手机充值'},
    {class:'iconfont icon-licaitong blue',title: '理财通'},
    {class:'iconfont icon-shenghuojiaofei green',title: '生活缴费'},
    {class:'iconfont icon-Qbichongzhi blue',title: 'Q币充值'},
    {class:'iconfont icon-chengshifuwu green',title: '城市服务'},
    {class:'iconfont icon-tengxungongyi red',title: '腾讯公益'},
    {class:'iconfont icon-baoxianfuwu orange',title: '保险服务'},
    {}
  ]
  const others = [
    {class:'iconfont icon-huochepiao green',title: '火车票机票'},
    {class:'iconfont icon-didichuhang orange',title: '滴滴出行'},
    {class:'iconfont icon-jingdongyouxuan pink',title: '京东优选'},
    {class:'iconfont icon-meituanwaimai orange',title: '美团外卖'},
    {class:'iconfont icon-maoyan pink',title: '电影演出赛事'},
    {class:'iconfont icon-chihewanle orange',title: '吃喝玩乐'},
    {class:'iconfont icon-jiudian green',title: '酒店'},
    {class:'iconfont icon-pinduoduo red',title: '拼多多'},
    {class:'iconfont icon-mobaidanche red',title: '摩拜单车'},
    {class:'iconfont icon-mogujie red',title: '蘑菇街女装'},
    {class:'iconfont icon-weipinhui pink',title: '唯品会特卖'},
    {class:'iconfont icon-xiongmao red',title: '转转二手'}
  ]
    export default {
      name: "wallet",
      data(){
          return{
              icons: [...icon],
              tcSevers: [...tcSever],
              other: [...others]
          }
      }
    }
</script>

<style lang="scss" scoped>
  $indigo:#3f51b5;
  .flex{
    display: flex;
    height: 100%;
    flex-direction: column;
  }
  .divider {
    height: 10px;
  }
  ul {
    display: flex;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .cont{
    flex:1;
    overflow: auto;
    .top{
      height: 200px;
      background-color: $indigo;
      text-align: center;
      box-sizing: border-box;
      padding-top: 30px;
      span {
        color: #ddd;
        font-size: 13px;
      }
      ul {
        color: #fff;
        align-items: center;
        justify-content: space-around;
        i {
          font-size: 36px;
        }
      }
    }
    .bottom {
      span {
        padding-left: 16px;
        line-height: 36px;
      }
      ul {
        flex-wrap: wrap;
        li {
          width: 33.33%;
          padding: 25px 10px;
          border-top: 1px solid #EBEBEB;
          border-right: 1px solid #EBEBEB;
        }
        li:nth-child(3n){
          border-right:none;
        }
        i {
          font-size: 34px;
        }
      }

    }

  }
  .green {color: #009966;}
  .orange {color: #F19234;}
  .blue {color:#468EC9}
  .red {color:#ED6066}
  .pink {color:#E65890}
</style>
