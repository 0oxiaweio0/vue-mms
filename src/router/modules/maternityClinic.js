import Layout from '@/views/layout/Layout'

const maternityClinicRouterMap = [
  /* 围产管理 */
  {
    path: '/maternityClinic',
    redirect: '/maternityClinic/workbench',
    component: Layout,
    name: 'app.maternityClinic',
    meta: {
      title: 'maternityClinic',
      group: 'maternityClinic'
    },
    hidden: true
  },
  {
    path: '/maternityClinic/workbench',
    redirect: '/maternityClinic/workbench/index',
    component: Layout,
    name: 'app.maternityClinic.workbench',
    meta: {
      title: 'maternityClinic',
      icon: '&#xe603',
      group: 'maternityClinic',
      name: '工作台'
    },
    children: [{
      path: 'index',
      component: () => import('@/views/maternityClinic/workbench'),
      name: 'app.maternityClinic.workbench',
      meta: {
        title: 'index',
        group: 'maternityClinic',
        name: '工作台首页'
      },
      hidden: true
    }
    ]
  },
  /* 围产管理--孕妇建档 */
  {
    path: '/maternityClinic/gravida',
    component: Layout,
    redirect: '/maternityClinic/gravida/archives',
    name: 'app.maternityClinic.gravida',
    meta: {
      title: 'maternityClinic',
      icon: '&#xe604',
      group: 'maternityClinic',
      name: '孕妇建档'
    },
    children: [{
      path: 'archives',
      component: () => import('@/views/maternityClinic/archives/archives'),
      name: 'app.maternityClinic.gravida.archives',
      meta: {
        title: 'archives',
        group: 'maternityClinic',
        name: '建档'
      }
    }, {
      path: 'archivesManage',
      component: () => import('@/views/maternityClinic/archives/archivesManage'),
      name: 'app.maternityClinic.gravida.archivesManage',
      meta: {
        title: 'archivesManage',
        group: 'maternityClinic',
        name: '建档管理'
      }
    }, {
      path: 'orderArchivesManage',
      component: () => import('@/views/maternityClinic/archives/orderArchivesManage'),
      name: 'app.maternityClinic.gravida.orderArchivesManage',
      meta: {
        title: 'orderArchivesManage',
        group: 'maternityClinic',
        name: '预约建档管理'
      }
    }
    ]
  },
  /* 围产管理--产前检查 */
  {
    path: '/maternityClinic/prenatal',
    component: Layout,
    redirect: '/maternityClinic/prenatal/checkup',
    name: 'app.maternityClinic.prenatal',
    meta: {
      title: 'maternityClinic',
      icon: '&#xe605',
      group: 'maternityClinic',
      name: '产前检查'
    },
    children: [{
      path: 'checkup',
      component: () => import('@/views/maternityClinic/checkup/checkup'),
      name: 'app.maternityClinic.prenatal.checkup',
      meta: {
        title: 'checkup',
        group: 'maternityClinic',
        name: '产检'
      }
    }, {
      path: 'checkupManage',
      component: () => import('@/views/maternityClinic/checkup/checkupManage'),
      name: 'app.maternityClinic.prenatal.checkupManage',
      meta: {
        title: 'checkupManage',
        group: 'maternityClinic',
        name: '产检管理'
      }
    }, {
      path: 'newOutRiskManage',
      component: () => import('@/views/maternityClinic/checkup/newOutRiskManage'),
      name: 'app.maternityClinic.prenatal.newOutRiskManage',
      meta: {
        title: 'orderArchivesManage',
        group: 'maternityClinic',
        name: '新出高危因素管理'
      }
    }
    ]
  },
  /* 围产管理--产妇分娩 */
  {
    path: '/maternityClinic/maternal',
    component: Layout,
    redirect: '/maternityClinic/maternal/childbirth',
    name: 'app.maternityClinic.maternal',
    meta: {
      title: 'maternal',
      icon: '&#xe606',
      group: 'maternityClinic',
      name: '产妇分娩'
    },
    children: [{
      path: 'childbirth',
      component: () => import('@/views/maternityClinic/maternal/childbirth'),
      name: 'app.maternityClinic.maternal.childbirth',
      meta: {
        title: 'childbirth',
        group: 'maternityClinic',
        name: '分娩'
      }
    }, {
      path: 'childbirthManage',
      component: () => import('@/views/maternityClinic/maternal/childbirthManage'),
      name: 'app.maternityClinic.maternal.childbirthManage',
      meta: {
        title: 'childbirthManage',
        group: 'maternityClinic',
        name: '分娩管理'
      }
    }, {
      path: 'neonateManage',
      component: () => import('@/views/maternityClinic/maternal/neonateManage'),
      name: 'app.maternityClinic.maternal.neonateManage',
      meta: {
        title: 'neonateManage',
        group: 'maternityClinic',
        name: '新生儿管理'
      }
    }
    ]
  }
]

export default maternityClinicRouterMap
