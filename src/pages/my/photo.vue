<template>
  <div class="demo-loadmore-wrap">
    <mu-appbar color='indigo500'>
      <mu-button icon slot="left" @click="back">
        <mu-icon value="chevron_left"></mu-icon>
      </mu-button>
      相册
      <mu-button icon slot="right" @click="refresh()">
        <mu-icon value="refresh"></mu-icon>
      </mu-button>
    </mu-appbar>
    <mu-container ref="container" class="demo-loadmore-content">
      <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
        <img class="preview-img" v-for="(img,index) in photo" :src="img.url" width="100%" height="100%"
             :key="index" v-lazy="img.url">
      </mu-load-more>
    </mu-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        refreshing: false,
        loading: false,
        photo: [],
        img: [],
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      refresh() {
        this.refreshing = true;
        this.$refs.container.scrollTop = 0;
        setTimeout(() => {
          this.refreshing = false;
          this.photo = [];
          this.getImg();
        }, 2000)
      },
      load() {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.getImg();
        }, 2000)
      },
      getImg(){
        this.axios.get('https://gank.io/api/random/data/福利/20')
          .then((res)=>{
            this.img = res.data.results;
            for(let i=0;i<this.img.length;i++){
              this.photo.push(this.img[i])
            }
          });
      }
    },
    created() {
      this.axios.get('https://gank.io/api/random/data/福利/20')
        .then((res)=>{
          this.photo = res.data.results
        });
    }
  };
</script>

<style scoped>
  .demo-loadmore-wrap {
    width: 100%;
    display: flex;
    height: 100%;
    flex-direction: column;
  }
  .mu-appbar {
    width: 100%;
  }
  .demo-loadmore-content {
    flex: 1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
</style>
