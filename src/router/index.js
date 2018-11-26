import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Person from '../pages/person'
import Find from '../pages/find'
import My from '../pages/my'
import Moments from '../pages/find/moments'
import AddContacts from '../pages/topNavFun/addContacts'
import Contacts from '../pages/sms/contacts'
import Scan from '../pages/topNavFun/scan'
import Money from '../pages/topNavFun/money'
import Help from '../pages/topNavFun/help'
import GroupChat from '../pages/topNavFun/groupChat'
import NotFond from '../pages/404'
import NewFriend from '../pages/person/newFriend'
import Groups from '../pages/person/groups'
import Chips from '../pages/person/chip'
import Shopping from '../pages/find/shopping'
import Photo from '../pages/my/photo'
import Wallet from '../pages/my/wallet'
import MyInfo from '../pages/my/myInfo'
import Nav from '../components/nav'
Vue.component('top-nav',Nav);
import Chat from '../pages/sms/chat'
Vue.component('chat',Chat);
import BackNav from '../components/backNav'
Vue.component('back-nav',BackNav);

import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import Axios from 'axios'
Axios.defaults.baseURL = 'https://blog.yang143.cn/api/';
Vue.prototype.axios = Axios;
Vue.prototype.dataURL = function (file,title,id) {
  id = (id === undefined)?'':id;
  return file+'?title='+title+id;
};
Vue.use(MuseUI);


Vue.use(Router);

export default new Router({

  routes: [
    {
      path: '/',
      redirect: {name: 'index'},
    },
    {
      path: '/index.html',
      name: 'index',
      component: Index,
      meta:{ navShow: true,topNav:true}
    },
    {
      path: '/sms/contacts',
      name: 'contacts',
      component: Contacts,

    },
    {
      path: '/friend',
      name: 'person',
      component: Person,
      meta:{ navShow: true,topNav:true },
    },
    {
      path: '/friend/groups',
      name: 'groups',
      component: Groups,
    },
    {
      path: '/friend/newFriend',
      name: 'newFriend',
      component: NewFriend,
    },
    {
      path: '/friend/chips',
      name: 'chips',
      component: Chips,
    },

    {
      path: '/find',
      name: 'find',
      component: Find,
      meta:{ navShow: true ,topNav:true},
    },
    {
      path: '/find/moments',
      name: 'moments',
      component:Moments,
      meta:{ navShow: false,topNav:false }
    },
    {
      path: '/find/shopping',
      name: 'shopping',
      component: Shopping,
    },
    {
      path: '/person',
      name: 'my',
      component: My,
      meta:{ navShow: true,topNav:true },
    },
    {
      path: '/person/myInfo',
      name: 'myInfo',
      component: MyInfo
    },
    {
      path: '/person/photo',
      name: 'photo',
      component: Photo,
    },
    {
      path: '/person/wallet',
      name: 'wallet',
      component: Wallet,
    },

    {
      path: '/addContacts',
      name: 'addContacts',
      component: AddContacts,
      meta:{ navShow: false,topNav:false }
    },
    {
      path: '/scan',
      name: 'scan',
      component: Scan,
    },
    {
      path: '/money',
      name: 'money',
      component: Money,
    },
    {
      path: '/groupChat',
      name: 'groupChat',
      component: GroupChat,
    },
    {
      path: '/help',
      name: 'help',
      component: Help,
    },
    {
      path: '*',
      component: NotFond,
    },

  ]
})
