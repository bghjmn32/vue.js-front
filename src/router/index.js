import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import zhujiemian from '@/components/1'
import faqiyuyue from '@/components/1-1'
import OriginTeachers from '@/components/OriginTeachers'
import UserInfo from '@/components/UserInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

     {
      path: '/UserInfo',
      name: 'UserInfo',
      component: UserInfo
    },

    {
      path: '/1',
      name: 'zhujiemian',
      component: zhujiemian,
      children: [{
        path: '/faqiyuyue',
        component: faqiyuyue
      },

      {
        path: '/OriginTeachers',
        component: OriginTeachers
      },

      /*{
        path: '/yuyuefankui',
        component: yuyuefankui
      },
      {
        path: '/yuyuexiangying',
        component: yuyuexiangying
      }*/
      ]

    }

  ]
})
