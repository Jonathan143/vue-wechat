<template>
  <div>
    <back-nav title="购物" righticon="true"></back-nav>
    <mu-container>
      <mu-flex justify-content="center">
        <mu-paper :z-depth="1">
          <mu-grid-list class="gridlist-demo">
            <!--<mu-sub-header>December</mu-sub-header>-->
            <mu-grid-tile v-for="(shop, index) in goods" :key="index" :rows=co :cols="co">
              <img :src="shop.picUrl" v-lazy="shop.picUrl">
              <span slot="title">{{shop.title}}</span>
              <span slot="subTitle"><b>{{shop.desc}}</b></span>
              <mu-button flat slot="action" color="grey50" style="font-size: 22px">
                <!--跳转商品详情页 :to="{name:'shopDetails',query:{id:shop.id,title:'goods'}}"-->
                <mu-icon left value="attach_money" color="grey50"></mu-icon>
                {{shop.price}}
              </mu-button>
            </mu-grid-tile>
          </mu-grid-list>
        </mu-paper>
      </mu-flex>
    </mu-container>
  </div>
</template>

<script>
  export default {
    name: "shopList",
    data(){
      return{
        co:2,
        goods:[]
      }
    },
    created(){
      this.axios.get(this.dataURL('vue1.php','goods'))
        .then((res)=>{
          this.goods=res.data;
        })
    }
  }
</script>

<style scoped>

</style>
