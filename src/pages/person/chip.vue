<template>
  <div>
    <back-nav title="标签" rTShow="true" rightTxt="新建"></back-nav>
    <ul>
        <li v-for="(chip, index) in chips" :key="index">
          <mu-chip  :color="chip.color">{{chip.title}}</mu-chip>
        </li>
    </ul>

  </div>
</template>

<script>
  const initChips = [
    {title: '家人',color: 'secondary'},
    {title: '同学',color: 'primary'},
    {title: '朋友',color: 'success'},
    {title: '陌生人',color: 'info'}
  ];
  export default {
    name: "chip",
    data(){
      return{
        chips:[...initChips],
      }
    }
  }
</script>

<style scoped>
  ul{
    list-style: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
  }
  ul li {
    margin: 10px;
  }
  .mu-chip{
    width: 100%;
    justify-content: center;
    border-radius: 26px;
    line-height: 42px;
    font-size: 16px;
  }
</style>
