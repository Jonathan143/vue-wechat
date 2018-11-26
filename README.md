# wechat

> A Vue.js project

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

## 过滤器
> 过滤器  原数组不变的情况，只改变显示的效果   ---管道符 |

// {{ data.price | toFixed(2) }}
//  toFixed  过滤器
filters：{  //可以定义好多自定义过滤器（这里的this指向Windows）
  toFixed(input,param1){
    return '￥' + input.toFixed(param1); // input 代表管道符前面的内容，param1代表的是toFixed传递的参数
  }
}


## {{ sum }} 数据改变就会执行函数
