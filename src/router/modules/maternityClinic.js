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
  },
  /* 围产管理--出院小结 */
  {
    path: '/maternityClinic/leaveHospital',
    redirect: '/maternityClinic/leaveHospital/index',
    component: Layout,
    name: 'app.maternityClinic.leaveHospital',
    meta: {
      title: 'leaveHospital',
      icon: '&#xe603',
      group: 'maternityClinic',
      name: '出院小结'
    },
    children: [{
      path: 'index',
      component: () => import('@/views/maternityClinic/leaveHospital'),
      name: 'app.maternityClinic.leaveHospital',
      meta: {
        title: 'index',
        group: 'maternityClinic',
        name: '出院小结首页'
      },
      hidden: true
    }
    ]
  },
  /* 围产管理--产后复查 */
  {
    path: '/maternityClinic/chfc',
    component: Layout,
    redirect: '/maternityClinic/chfc/recheckup',
    name: 'app.maternityClinic.chfc',
    meta: {
      title: 'chfc',
      icon: '&#xe608',
      group: 'maternityClinic',
      name: '产后复查'
    },
    children: [{
      path: 'recheckup',
      component: () => import('@/views/maternityClinic/chfc/recheckup'),
      name: 'app.maternityClinic.chfc.recheckup',
      meta: {
        title: 'recheckup',
        group: 'maternityClinic',
        name: '复查'
      }
    }, {
      path: 'recheckupManager',
      component: () => import('@/views/maternityClinic/chfc/recheckupManager'),
      name: 'app.maternityClinic.chfc.recheckupManager',
      meta: {
        title: 'recheckupManager',
        group: 'maternityClinic',
        name: '复查管理'
      }
    }
    ]
  },
  /* 围产管理--产后访视管理 */
  {
    path: '/maternityClinic/postpartumFollowManager',
    redirect: '/maternityClinic/postpartumFollowManager/index',
    component: Layout,
    name: 'app.maternityClinic.postpartumFollowManager',
    meta: {
      title: 'postpartumFollowManager',
      icon: '&#xe632',
      group: 'maternityClinic',
      name: '产后访视管理'
    },
    children: [{
      path: 'index',
      component: () => import('@/views/maternityClinic/postpartumFollowManager'),
      name: 'app.maternityClinic.postpartumFollowManager',
      meta: {
        title: 'index',
        group: 'maternityClinic',
        name: '产后访视管理首页'
      },
      hidden: true
    }
    ]
  },
  /* 围产管理--产前筛查 */
  {
    path: '/maternityClinic/screening',
    redirect: '/maternityClinic/screening/index',
    component: Layout,
    name: 'app.maternityClinic.screening',
    meta: {
      title: 'screening',
      icon: '&#xe609',
      group: 'maternityClinic',
      name: '产前筛查'
    },
    children: [{
      path: 'index',
      component: () => import('@/views/maternityClinic/screening'),
      name: 'app.maternityClinic.screening',
      meta: {
        title: 'index',
        group: 'maternityClinic',
        name: '产前筛查首页'
      },
      hidden: true
    }
    ]
  },
  /* 围产管理--产筛申请管理 */
  {
    path: '/maternityClinic/laboratoryScreening',
    component: Layout,
    redirect: '/maternityClinic/laboratoryScreening/screeningApply',
    name: 'app.maternityClinic.screeningLaboratory',
    meta: {
      title: 'screeningLaboratory',
      icon: '&#xe609',
      group: 'maternityClinic',
      name: '产筛申请管理'
    },
    children: [{
      path: 'screeningApply',
      component: () => import('@/views/maternityClinic/screeningLaboratory/screeningApply'),
      name: 'app.maternityClinic.screeningLaboratory.screeningApply',
      meta: {
        title: 'screeningApply',
        group: 'maternityClinic',
        name: '产筛申请'
      }
    }, {
      path: 'screeningManager',
      component: () => import('@/views/maternityClinic/screeningLaboratory/screeningManager'),
      name: 'app.maternityClinic.screeningLaboratory.screeningManager',
      meta: {
        title: 'screeningManager',
        group: 'maternityClinic',
        name: '产筛管理'
      }
    }
    ]
  },
  /* 围产管理--新生儿筛查申请 */
  {
    path: '/maternityClinic/childScreening',
    component: Layout,
    redirect: '/maternityClinic/childScreening/childScreeningApply',
    name: 'app.maternityClinic.childScreening',
    meta: {
      title: 'childScreening',
      icon: '&#xe609',
      group: 'maternityClinic',
      name: '新生儿筛查申请'
    },
    children: [{
      path: 'childScreeningApply',
      component: () => import('@/views/maternityClinic/childScreening/childScreeningApply'),
      name: 'app.maternityClinic.childScreening.childScreeningApply',
      meta: {
        title: 'childScreeningApply',
        group: 'maternityClinic',
        name: '新筛查申请'
      }
    }, {
      path: 'childScreeningManager',
      component: () => import('@/views/maternityClinic/childScreening/childScreeningManager'),
      name: 'app.maternityClinic.childScreening.childScreeningManager',
      meta: {
        title: 'childScreeningManager',
        group: 'maternityClinic',
        name: '新筛查管理'
      }
    }
    ]
  },
  /* 围产管理--孕产妇管理 */
  {
    path: '/maternityClinic/GravidaManager',
    component: Layout,
    redirect: '/maternityClinic/GravidaManager/index',
    name: 'app.maternityClinic.gravidaManager',
    meta: {
      title: 'gravidaManager',
      icon: '&#xe60d',
      group: 'maternityClinic',
      name: '孕产妇管理'
    },
    children: [{
      path: 'index',
      component: () => import('@/views/maternityClinic/gravidaManager/index'),
      name: 'app.maternityClinic.gravidaManager',
      meta: {
        title: 'gravidaManager',
        group: 'maternityClinic',
        name: '孕产妇管理'
      },
      hidden: true
    }
    ]
  },
  /* 围产管理--危急管理 */
  {
    path: '/maternityClinic/crisisManager',
    component: Layout,
    redirect: '/maternityClinic/crisisManager/index',
    name: 'app.maternityClinic.crisisManager',
    meta: {
      title: 'crisisManager',
      icon: '&#xe614',
      group: 'maternityClinic',
      name: '危急管理'
    },
    children: [{
      path: 'index',
      component: () => import('@/views/maternityClinic/crisisManager/index'),
      name: 'app.maternityClinic.crisisManager',
      meta: {
        title: 'crisisManager',
        group: 'maternityClinic',
        name: '危急管理'
      },
      hidden: true
    }
    ]
  },
  /* 围产管理--孕产妇服务管理 */
  {
    path: '/maternityClinic/maternalServiceManager',
    component: Layout,
    redirect: '/maternityClinic/maternalServiceManager/index',
    name: 'app.maternityClinic.gravidaServiceManager',
    meta: {
      title: 'maternalServiceManager',
      icon: '&#xe60d',
      group: 'maternityClinic',
      name: '孕产妇服务管理'
    },
    children: [{
      path: 'index',
      component: () => import('@/views/maternityClinic/maternalServiceManager/index'),
      name: 'app.maternityClinic.gravidaServiceManager',
      meta: {
        title: 'maternalServiceManager',
        group: 'maternityClinic',
        name: '孕产妇服务管理'
      },
      hidden: true
    }
    ]
  },
  /* 围产管理--高危转诊 */
  {
    path: '/maternityClinic/referral',
    component: Layout,
    redirect: '/maternityClinic/referral/index',
    name: 'app.maternityClinic.referral',
    meta: {
      title: 'referral',
      icon: '&#xe60e',
      group: 'maternityClinic',
      name: '高危转诊'
    },
    children: [{
      path: 'index',
      component: () => import('@/views/maternityClinic/referral/index'),
      name: 'app.maternityClinic.referral',
      meta: {
        title: 'referral',
        group: 'maternityClinic',
        name: '高危转诊'
      },
      hidden: true
    }
    ]
  },
  /* 围产管理--统计管理 */
  {
    path: '/maternityClinic/statisticsManage',
    component: Layout,
    redirect: '/maternityClinic/statisticsManage/checkupStatistics',
    name: 'app.maternityClinic.statisticsManage',
    meta: {
      title: 'statisticsManage',
      icon: '&#xe619',
      group: 'maternityClinic',
      name: '统计管理'
    },
    children: [{
      path: 'checkupStatistics',
      component: () => import('@/views/maternityClinic/statisticsManage/checkupStatistics'),
      name: 'app.maternityClinic.statisticsManage.checkupStatistics',
      meta: {
        title: 'checkupStatistics',
        group: 'maternityClinic',
        name: '产检人数统计'
      }
    }, {
      path: 'dueDateStatistics',
      component: () => import('@/views/maternityClinic/statisticsManage/dueDateStatistics'),
      name: 'app.maternityClinic.statisticsManage.dueDateStatistics',
      meta: {
        title: 'dueDateStatistics',
        group: 'maternityClinic',
        name: '预产期统计管理'
      }
    }, {
      path: 'dueDateStatistics',
      component: () => import('@/views/maternityClinic/statisticsManage/makeHospStatistics'),
      name: 'app.maternityClinic.statisticsManage.makeHospStatistics',
      meta: {
        title: 'makeHospStatistics',
        group: 'maternityClinic',
        name: '住院预约统计'
      }
    }, {
      path: 'backHospStatistics',
      component: () => import('@/views/maternityClinic/statisticsManage/backHospStatistics'),
      name: 'app.maternityClinic.statisticsManage.backHospStatistics',
      meta: {
        title: 'backHospStatistics',
        group: 'maternityClinic',
        name: '回院提醒统计'
      }
    }, {
      path: 'inHospStatistics',
      component: () => import('@/views/maternityClinic/statisticsManage/inHospStatistics'),
      name: 'app.maternityClinic.statisticsManage.inHospStatistics',
      meta: {
        title: 'inHospStatistics',
        group: 'maternityClinic',
        name: '住院提醒统计'
      }
    }, {
      path: 'realHospStatistics',
      component: () => import('@/views/maternityClinic/statisticsManage/realHospStatistics'),
      name: 'app.maternityClinic.statisticsManage.realHospStatistics',
      meta: {
        title: 'realHospStatistics',
        group: 'maternityClinic',
        name: '实际住院统计'
      }
    }, {
      path: 'failHospStatistics',
      component: () => import('@/views/maternityClinic/statisticsManage/failHospStatistics'),
      name: 'app.maternityClinic.statisticsManage.failHospStatistics',
      meta: {
        title: 'failHospStatistics',
        group: 'maternityClinic',
        name: '预约失败统计'
      }
    }, {
      path: 'highRiskStatistics',
      component: () => import('@/views/maternityClinic/statisticsManage/highRiskStatistics'),
      name: 'app.maternityClinic.statisticsManage.highRiskStatistics',
      meta: {
        title: 'highRiskStatistics',
        group: 'maternityClinic',
        name: '高危统计管理'
      }
    }, {
      path: 'cjystj',
      component: () => import('@/views/maternityClinic/statisticsManage/cjystj'),
      name: 'app.maternityClinic.statisticsManage.cjystj',
      meta: {
        title: 'cjystj',
        group: 'maternityClinic',
        name: '产检医生统计'
      }
    }, {
      path: 'cjcsfbtj',
      component: () => import('@/views/maternityClinic/statisticsManage/cjcsfbtj'),
      name: 'app.maternityClinic.statisticsManage.cjcsfbtj',
      meta: {
        title: 'cjcsfbtj',
        group: 'maternityClinic',
        name: '产检次数分布统计'
      }
    }, {
      path: 'jcrstj',
      component: () => import('@/views/maternityClinic/statisticsManage/jcrstj'),
      name: 'app.maternityClinic.statisticsManage.jcrstj',
      meta: {
        title: 'cjcsfbtj',
        group: 'maternityClinic',
        name: '建册人数统计'
      }
    }
    ]
  },
  /* 围产管理--高危统计管理 */
  {
    path: '/maternityClinic/statisticsManage',
    component: Layout,
    redirect: '/maternityClinic/statisticsManage/checkupStatistics',
    name: 'app.maternityClinic.statisticsManage',
    meta: {
      title: 'statisticsManage',
      icon: '&#xe619',
      group: 'maternityClinic',
      name: '统计管理'
    },
    children: [{
      path: 'checkupStatistics',
      component: () => import('@/views/maternityClinic/statisticsManage/checkupStatistics'),
      name: 'app.maternityClinic.statisticsManage.checkupStatistics',
      meta: {
        title: 'checkupStatistics',
        group: 'maternityClinic',
        name: '产检人数统计'
      }
    }, {
      path: 'dueDateStatistics',
      component: () => import('@/views/maternityClinic/statisticsManage/dueDateStatistics'),
      name: 'app.maternityClinic.statisticsManage.dueDateStatistics',
      meta: {
        title: 'dueDateStatistics',
        group: 'maternityClinic',
        name: '预产期统计管理'
      }
    }
    ]
  },
  /* 围产管理--优惠券管理 */
  {
    path: '/maternityClinic/coupon',
    component: Layout,
    redirect: '/maternityClinic/coupon/index',
    name: 'app.maternityClinic.coupon',
    meta: {
      title: 'coupon',
      icon: '&#xe60b',
      group: 'maternityClinic',
      name: '优惠券管理'
    },
    children: [{
      path: 'index',
      component: () => import('@/views/maternityClinic/coupon/index'),
      name: 'app.maternityClinic.coupon',
      meta: {
        title: 'coupon',
        group: 'maternityClinic',
        name: '优惠券管理'
      },
      hidden: true
    }
    ]
  },
  /* 围产管理--健康管理 */
  {
    path: '/maternityClinic/healthyManager',
    component: Layout,
    redirect: '/maternityClinic/healthyManager/record',
    name: 'app.maternityClinic.healthyManager',
    meta: {
      title: 'healthyManager',
      icon: '&#xe609',
      group: 'maternityClinic',
      name: '新生儿筛查申请'
    },
    children: [{
      path: 'record',
      component: () => import('@/views/maternityClinic/healthyManager/record'),
      name: 'app.maternityClinic.childScreening.childScreeningApply',
      meta: {
        title: 'record',
        group: 'maternityClinic',
        name: '体重录入'
      }
    }, {
      path: 'lists',
      component: () => import('@/views/maternityClinic/healthyManager/lists'),
      name: 'app.maternityClinic.healthyManager.lists',
      meta: {
        title: 'lists',
        group: 'maternityClinic',
        name: '体重列表'
      }
    }, {
      path: 'bloodSugar',
      component: () => import('@/views/maternityClinic/healthyManager/bloodSugar'),
      name: 'app.maternityClinic.healthyManager.bloodSugar',
      meta: {
        title: 'bloodSugar',
        group: 'maternityClinic',
        name: '血糖管理'
      }
    }, {
      path: 'bloodPressure',
      component: () => import('@/views/maternityClinic/healthyManager/bloodPressure'),
      name: 'app.maternityClinic.healthyManager.bloodPressure',
      meta: {
        title: 'bloodPressure',
        group: 'maternityClinic',
        name: '血压管理'
      }
    }, {
      path: 'temperature',
      component: () => import('@/views/maternityClinic/healthyManager/temperature'),
      name: 'app.maternityClinic.healthyManager.temperature',
      meta: {
        title: 'temperature',
        group: 'maternityClinic',
        name: '体温管理'
      }
    }
    ]
  },
  /* 围产管理--服务管理 */
  {
    path: '/maternityClinic/serviceManager',
    component: Layout,
    redirect: '/maternityClinic/serviceManager/activeService',
    name: 'app.maternityClinic.serviceManager',
    meta: {
      title: 'serviceManager',
      icon: '&#xe628',
      group: 'maternityClinic',
      name: '服务管理'
    },
    children: [{
      path: 'activeService',
      component: () => import('@/views/maternityClinic/serviceManager/activeService'),
      name: 'app.maternityClinic.serviceManager.activeService',
      meta: {
        title: 'activeService',
        group: 'maternityClinic',
        name: '服务开通'
      }
    }, {
      path: 'activeServiceManager',
      component: () => import('@/views/maternityClinic/serviceManager/activeServiceManager'),
      name: 'app.maternityClinic.serviceManager.activeServiceManager',
      meta: {
        title: 'activeServiceManager',
        group: 'maternityClinic',
        name: '服务开通管理'
      }
    }, {
      path: 'activeConfigService',
      component: () => import('@/views/maternityClinic/serviceManager/activeConfigService'),
      name: 'app.maternityClinic.serviceManager.activeConfigService',
      meta: {
        title: 'activeConfigService',
        group: 'maternityClinic',
        name: '医院服务配置'
      }
    }, {
      path: 'configServiceManager',
      component: () => import('@/views/maternityClinic/serviceManager/configServiceManager'),
      name: 'app.maternityClinic.healthyManager.configServiceManager',
      meta: {
        title: 'configServiceManager',
        group: 'maternityClinic',
        name: '医院服务列表管理'
      }
    }
    ]
  },
  /* 围产管理--住院管理 */
  {
    path: '/maternityClinic/makeHospitalManager',
    component: Layout,
    redirect: '/maternityClinic/makeHospitalManager/activeService',
    name: 'app.maternityClinic.makeHospitalManager',
    meta: {
      title: 'activeService',
      icon: '&#xe625',
      group: 'maternityClinic',
      name: '住院管理'
    },
    children: [{
      path: 'activeService',
      component: () => import('@/views/maternityClinic/makeHospitalManager/activeService'),
      name: 'app.maternityClinic.makeHospitalManager.activeService',
      meta: {
        title: 'activeService',
        group: 'maternityClinic',
        name: '住院预约'
      }
    }, {
      path: 'backHospitalServiceManager',
      component: () => import('@/views/maternityClinic/makeHospitalManager/backHospitalServiceManager'),
      name: 'app.maternityClinic.makeHospitalManager.backHospitalServiceManager',
      meta: {
        title: 'backHospitalServiceManager',
        group: 'maternityClinic',
        name: '回院提醒管理'
      }
    }, {
      path: 'inHospitalServiceManager',
      component: () => import('@/views/maternityClinic/makeHospitalManager/inHospitalServiceManager'),
      name: 'app.maternityClinic.makeHospitalManager.inHospitalServiceManager',
      meta: {
        title: 'inHospitalServiceManager',
        group: 'maternityClinic',
        name: '住院提醒管理'
      }
    }
    ]
  },
  /* 围产管理--产筛查询 */
  {
    path: '/maternityClinic/cscx',
    component: Layout,
    redirect: '/maternityClinic/cscx/query',
    name: 'app.maternityClinic.cscx',
    meta: {
      title: 'cscx',
      icon: '&#xe630',
      group: 'maternityClinic',
      name: '产筛查询'
    },
    children: [{
      path: 'query',
      component: () => import('@/views/maternityClinic/cscx/query'),
      name: 'app.maternityClinic.cscx.query',
      meta: {
        title: 'query',
        group: 'maternityClinic',
        name: '查询'
      }
    }, {
      path: 'lists',
      component: () => import('@/views/maternityClinic/cscx/lists'),
      name: 'app.maternityClinic.cscx.lists',
      meta: {
        title: 'lists',
        group: 'maternityClinic',
        name: '孕妇列表'
      }
    }
    ]
  }
]

export default maternityClinicRouterMap
