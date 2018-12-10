# wechat

> A Vue.js project

## 主要特性
- 界面布局大致模仿微信
- 聊天页面,自动回复调用[一言API](https://hitokoto.cn/)
- 聊天页面聊天记录采用 localstorage 存储，页面关闭后会自动清空 localstorage 存储；
- 我的栏目里的相册里的图片均来自[干货集中营](https://gank.io/),调用干货集中营API；
- 使用vue-lazyload插件，实现图片懒加载；
- ...


## 更新日志

- 2018/12/10 修复聊天界面小bug,添加时间显示，1分钟间隔，超过1分钟发消息，动态添加时间模块，时间当前发消息时间；
- 2018/12/09 更新，支持聊天回复，聊天回复调用一言 api 接口，聊天记录采用 localstorage 存储；
- 2018/11/28 上传至 [github](https://github.com/Jonathan143/vue-wechat)；
- 2018/11/08 初建项目；

## 效果图

- ![w1](https://yun-1256555015.cos.ap-chengdu.myqcloud.com/images/vue/vue-w1.png)
- ![w2](https://yun-1256555015.cos.ap-chengdu.myqcloud.com/images/vue/vue-w2.png)
- ![w3](https://yun-1256555015.cos.ap-chengdu.myqcloud.com/images/vue/vue-w3.png)
- ![w4](https://yun-1256555015.cos.ap-chengdu.myqcloud.com/images/vue/vue-w4.png)
- ![w5](https://yun-1256555015.cos.ap-chengdu.myqcloud.com/images/vue/vue-w5.png)


## 联系我

- QQ：1439821144
- Email: [1439821144@qq.com](mailto:1439821144@qq.com)
- Blog：[https://www.yang143.cn](https://www.yang143.cn/)

## 鸣谢

- Vue.js
- axios
- vue-lazyload
- sass
- Muse-ui
- hitokoto - 一言
- 干货集中营

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader)

