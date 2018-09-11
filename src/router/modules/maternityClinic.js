import Layout from '@/views/layout/Layout'

const maternityClinicRouterMap = [
  /* 围产管理 */
  {
    path: '/maternityClinic',
    redirect: '/maternityClinic/workbench',
    name: 'app.maternityClinic',
    meta: {
      title: 'maternityClinic',
      group: 'maternityClinic'
    },
    hidden: true
  },
  {
    path: '/maternityClinic/workbench',
    component: Layout,
    name: 'app.maternityClinic.workbench',
    meta: {
      title: 'maternityClinic',
      icon: '&#xe603',
      group: 'maternityClinic'
    }
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
      group: 'maternityClinic'
    },
    children: [{
      path: 'archives',
      component: () => import('@/views/maternityClinic/archives/archives'),
      name: 'app.maternityClinic.gravida.archives',
      meta: {
        title: 'archives',
        group: 'maternityClinic'
      }
    }, {
      path: 'archivesManage',
      component: () => import('@/views/maternityClinic/archives/archivesManage'),
      name: 'app.maternityClinic.gravida.archivesManage',
      meta: {
        title: 'archivesManage',
        group: 'maternityClinic'
      }
    }]
  }
]

export default maternityClinicRouterMap
