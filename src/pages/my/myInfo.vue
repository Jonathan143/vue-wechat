<template>
    <div class="myinfo">
      <back-nav title="个人信息"></back-nav>
      <div class="info">
        <ul>
          <li>
            <p>头像</p>
            <img :src="imgSrc" alt="" height="70">
          </li>
          <li>
            <p>昵称</p>
            <p>{{username}}</p>
          </li>
          <li>
            <p>微信号</p>
            <p>{{account}}</p>
          </li>
          <li>
            <p>二维码名片</p>
              <svg class="icon" aria-hidden="true" font-size="20.8">
                <use xlink:href="#icon-erweima"></use>
              </svg>
          </li>
          <li>
            <p>更多</p>
          </li>
        </ul>
      </div>
      <span>我的地址</span>
    </div>
</template>

<script>
    export default {
        name: "myInfo",
      data(){
        return{
          imgSrc:'',
          username: '',
          account: '',
        }
      },
      created() {
        this.imgSrc = this.$route.params.imgsrc;
        this.username = this.$route.params.n;
        this.account = this.$route.params.a;
      },
    }
</script>

<style lang="scss" scoped>
  .myinfo {
    background-color: #EBEBEB;
  }
.info{
  margin: 20px 0;
  padding: 0 20px;
  background-color: #fff;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #D9D9D9;
    padding: 10px 0;
  }
}
  span{
    padding: 10.5px 20px;
    display: block;
    background-color: #fff;
  }
</style>
