import Layout from '@/Layout/index.vue';

export default [
  {
    path: '/menus',
    name: 'menus',
    redirect: '/menus1',
    meta: {
      roles: ['admin', 'manager', 'visitor'],
      name: '菜单',
      icon: 'caidan'
    },
    component: Layout,
    children: [
      {
        path: '/menus1',
        name: 'menus1',
        meta: {
          roles: ['admin', 'manager', 'visitor'],
          name: '一级菜单1',
          icon: 'liebiao',
        },
        component: () => import('@/views/menus/index.vue'),
      },
      {
        path: '/menus2',
        name: 'menus2',
        redirect: '/menus2/menus2-1',
        meta: {
          roles: ['admin', 'manager', 'visitor'],
          name: '一级菜单2',
          icon: 'liebiao',
        },
        component: () => import('@/views/menus/subMenus/index.vue'),
        children: [
          {
            path: '/menus2/menus2-1',
            name: 'menus2-1',
            meta: {
              roles: ['admin', 'manager', 'visitor'],
              name: '二级菜单1',
              icon: 'liebiao',
            },
            component: () => import('@/views/menus/subMenus/threeMenus/index.vue'),
          },
          {
            path: '/menus2/menus2-2',
            name: 'menus2-2',
            meta: {
              roles: ['admin', 'manager', 'visitor'],
              name: '二级菜单2',
              icon: 'liebiao',
            },
            component: () => import('@/views/menus/subMenus/threeMenus/twoIndex.vue'),
          },
        ]
      },
    ]
  },
];
