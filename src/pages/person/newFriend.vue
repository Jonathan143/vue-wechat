<template>
    <div>
      <back-nav title="新的朋友" rTShow="true" rightTxt="添加朋友"></back-nav>
      <div class="friends">
        <h3>还没有推荐的朋友</h3>
        <p>你可以绑定手机，以便找到更多的朋友</p>
      </div>
      <mu-list>
        <mu-list-item button>
          <mu-list-item-action>
            <mu-icon value="call" color="green500"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>添加手机联系人</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </div>
</template>

<script>
    export default {
        name: "newFriend"
    }
</script>

<style scoped>
  .friends h3{
    font-weight: normal;
  }
  .friends {
    text-align: center;
    padding: 20px 0;
  }
  .mu-list {
    background: #fff;
  }
</style>
