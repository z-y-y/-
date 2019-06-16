import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import login from '../components/pages/login'
import home from '../components/pages/home'

import manage from '../components/pages/manage'
import user from '../components/pages/user'
import inform from '../components/pages/inform'
import device from '../components/pages/device'

import manageList from '../components/pages/manageList'
import userList from '../components/pages/userList'
import informList from '../components/pages/informList'
import deviceList from '../components/pages/deviceList'

import manageCreate from '../components/pages/manageCreate'
import userCreate from '../components/pages/userCreate'
import informCreate from '../components/pages/informCreate'
import deviceCreate from '../components/pages/deviceCreate'
import welcome from '../components/pages/welCome'

export default new Router({
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path: '/home',
      component: home,
      children: [
        {
          path: '',
          component: welcome
        },
        {
          path: 'manage',
          component: manage,
          children: [
            {
              path: '',
              component: manageList,
              name: '管理员列表页'
            },
            {
              path: 'create/:id',
              component: manageCreate,
              name: '修改/新建管理员'
            }
          ]
        },
        {
          path: 'user',
          component: user,
          children: [
            {
              path: '',
              component: userList,
              name: '用户列表页'
            },
            {
              path: 'create/:id',
              component: userCreate,
              name: '修改/创建用户'
            }
          ]
        },
        {
          path: 'inform',
          component: inform,
          children: [
            {
              path: '',
              component: informList,
              name: '通知列表页'
            },
            {
              path: 'create/:id',
              component: informCreate,
              name: '修改/创建信息'
            }
          ]
        },
        {
          path: 'device',
          component: device,
          children: [
            {
              path: '',
              component: deviceList,
              name: '设备列表页'
            }, {
              path: 'create/:id',
              component: deviceCreate,
              name: '修改/创建设备'
            }
          ]
        },
      ]
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
