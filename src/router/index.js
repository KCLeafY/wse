import Vue from 'vue'
import Router from 'vue-router'
//使用懒加载的方式来引入,只有路由被访问的时候才加载
import evaluationconfig from '@/components/evaluationconfig'
import evaluationconfiglist from '@/components/evaluationconfiglist'
import evaluationconfigclass from '@/components/evaluationconfigclass'
import evaluationinfo from '@/components/evaluationinfo'
import evalutioninfoadd from '@/components/evalutioninfoadd'

const loginpage = resolve => require(['@/components/evaluationconfig'], resolve)

Vue.use(Router)
let router = new Router({
  routes: [
    {
      path: '/evaluationconfig',
      name: 'evaluationconfig',
      component: evaluationconfig
    },
    {
      path: '/evaluationconfiglist',
      name: 'evaluationconfiglist',
      component: evaluationconfiglist
    }
    ,
    {
      path: '/evaluationconfigclass',
      name: 'evaluationconfigclass',
      component: evaluationconfigclass
    }
    ,
    {
      path: '/evaluationinfo',
      name: 'evaluationinfo',
      component: evaluationinfo
    }
    ,
    {
      path: '/evalutioninfoadd',
      name: 'evalutioninfoadd',
      component: evalutioninfoadd
    }
  ]
})
//对每次访问之前都要先看是否已经登录
//router.beforeEach((to, from, next) => {
//  if (to.path.startsWith('/login')) {
//    //window.sessionStorage.removeItem('access-token');
//    //next();
//  } else {
//    //let token = window.sessionStorage.getItem('access-token');
//    //if (!token) {
//      //未登录  跳回主页面
//    //  next({ path: '/login' });
//   // } else {
//   //   next();
//    //}
//  }

//});


export default router
